import { exec } from "node:child_process";
import {
  existsSync,
  readdirSync,
  statSync,
  unlinkSync,
  writeFile,
  writeFileSync,
} from "node:fs";
import { basename, resolve } from "node:path";
import { default as Turndown } from "turndown";

import { FileInfo, groupFiles } from "./file.js";
import { capitalizeSentence } from "./string.js";

const turndown = new Turndown({
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  emDelimiter: "*",
});

export const html2md = (html = ""): string =>
  turndown
    .turndown(html)
    .replace(/\n- {3}/gu, "\n- ")
    .replace(/\n(\d*?)\. {2}/gu, "\n$1. ")
    .replace(/\n\*\*Output:\*\*/gu, "\n\n**Output:**")
    .replace(/\n\*\*Explanation:\*\*/gu, "\n\n**Explanation:**")
    .replace(/\n\*\*Explanation\*\*\*\*:\*\*/gu, "\n\n**Explanation:**")
    .replace(/!\[\]\((.*?)\)/gu, "![LeetCode Image]($1)")
    // eslint-disable-next-line no-irregular-whitespace
    .replace(/ /gu, " ")
    .replace(/ \n/gu, "\n")
    .replace(/\*\*Constraints:\*\*/gu, "## Constraints")
    .replace(/\n?$/u, "\n");

export const getExerciseName = (title: string): string =>
  /(?:\/|\\)/u.exec(title)
    ? capitalizeSentence(basename(title).replace(/-/u, ". ").replace(/-/g, " "))
    : capitalizeSentence(title.replace(/-/u, ". ").replace(/-/g, " "));

interface FrontMatterOption {
  title: string;
  icon?: string;
  author?: string;
  category: string;
  tags: string[];
}

const generateFrontmatter = ({
  title,
  author,
  category,
  tags,
  icon,
}: FrontMatterOption): string =>
  `---\ntitle: ${title}\n${icon ? `icon: ${icon}\n` : ""}${
    author ? `author: ${author}\n` : ""
  }category: ${category}\n${
    tags.length
      ? `tag:\n${Array.from(new Set(tags))
          .map((tag) => `  - ${tag}\n`)
          .join("")}`
      : ""
  }---\n\n`;

const generateMarkdownList = (list: string[]): string =>
  list
    .map(
      (title) =>
        `- [${getExerciseName(title)}](${decodeURI(title)}/README.md)\n`
    )
    .join("\n");

const generateContent = (
  fileInfoList: FileInfo[],
  key: "author" | "language"
): string => {
  const content: string[] = [];
  const groupResult = groupFiles(fileInfoList, key);

  for (const keyName in groupResult) {
    const fileInfos = groupResult[keyName];

    content.push(
      `## ${fileInfos[0][key]}\n\n${fileInfos
        .sort((x, y) =>
          x.version ? x.version.charCodeAt(0) - y.version.charCodeAt(0) : -1
        )
        .map(
          (fileInfo) =>
            `${fileInfo.version ? `### ${fileInfo.version}\n\n` : ""}\`\`\`${
              fileInfo.ext
            }\n${fileInfo.content}\n\`\`\`\n`
        )
        .join("\n")}`
    );
  }

  return content.join("\n");
};

interface GenerateInfo {
  title: string;
  path: string;
  files: FileInfo[];
}

export const generatePersonMarkdown = ({
  title,
  path,
  files,
}: GenerateInfo): Promise<string[]> => {
  const authorList = groupFiles(files, "author");
  const promises: Promise<void>[] = [];
  for (const author in authorList) {
    const files = authorList[author];
    const tags = files.map((fileInfo) => fileInfo.language);

    promises.push(
      new Promise((resolve2) => {
        writeFile(
          resolve(path, `${author}.md`),
          generateFrontmatter({
            title: author,
            author: title,
            category: author,
            tags,
          }) + generateContent(files, "language"),
          { encoding: "utf-8", flag: "w" },
          () => resolve2()
        );
      })
    );
  }

  return Promise.all(promises).then(() =>
    Promise.resolve(Object.keys(authorList))
  );
};

export const genLanguageMarkdown = ({
  title,
  path,
  files,
}: GenerateInfo): Promise<string[]> => {
  const languageList = groupFiles(files, "language");
  const promises: Promise<void>[] = [];
  for (const language in languageList) {
    const files = languageList[language];
    const tags = files.map((fileInfo) => fileInfo.author);

    promises.push(
      new Promise((resolve2) => {
        writeFile(
          resolve(path, `${language}.md`),
          generateFrontmatter({
            title: language,
            icon: files[0].icon,
            author: title,
            category: language,
            tags,
          }) + generateContent(files, "author"),
          { encoding: "utf-8", flag: "w" },
          () => resolve2()
        );
      })
    );
  }

  return Promise.all(promises).then(() =>
    Promise.resolve(Object.keys(languageList))
  );
};

export const getExercise = (dir: string): string[] =>
  readdirSync(dir)
    .filter(
      (fileName) =>
        statSync(resolve(dir, fileName)).isDirectory() &&
        fileName !== ".vuepress"
    )
    .sort((x, y) => Number(x.split("-")[0]) - Number(y.split("-")[0]));

export const genExerciseList = (dir: string, folderList: string[]): void => {
  writeFileSync(
    resolve(dir, "README.md"),
    `---\ntitle: 题目列表\nicon: list\n---\n\n${generateMarkdownList(
      folderList
    )}`
  );
};

export const cleanMarkdown = (dir: string): void =>
  getExercise(dir).forEach((folderName) => {
    readdirSync(resolve(dir, folderName)).forEach((fileName) => {
      if (
        statSync(resolve(dir, folderName, fileName)).isFile() &&
        /^(?!.*readme).*\.md$/u.exec(fileName.toLowerCase())
      )
        unlinkSync(resolve(dir, folderName, fileName));
    });
  });

export const getProblemMarkdown = (exerciseName: string): Promise<string> =>
  new Promise((resolve1) => {
    const [, id] = /(.*?)[.|-].*/u.exec(exerciseName) || [];

    if (isNaN(Number(id)))
      console.error(`folderName ${exerciseName} is illegal!`);
    else {
      let retryTimes = 0;

      const getContent = (): void => {
        exec(`leetcode show ${id}`, (_err, output) => {
          const [, serial, title, link, content] =
            /^\[(.*?)\] (.*?) *?\n\n(.*?)description\/\n\n[\s\S]*?\n\n([\s\S]*)$/mu.exec(
              output
            ) || [];

          if (content)
            resolve1(`# [${serial}. ${title}](${link})\n\n${html2md(content)}`);
          else {
            if (retryTimes === 3) {
              console.warn(`${id} fail:`, output);
              resolve1("");
            } else {
              retryTimes += 1;
              getContent();
            }
          }
        });
      };

      getContent();
    }
  });

export const genProblemMarkdown = (
  dir: string,
  folderList: string[]
): Promise<void[]> =>
  Promise.all(
    folderList.map((folderName) => {
      const readmePath = resolve(dir, folderName, "README.md");

      if (existsSync(readmePath)) return Promise.resolve();

      return getProblemMarkdown(folderName).then((content) => {
        if (content) writeFileSync(readmePath, content);
        return Promise.resolve();
      });
    })
  );
