import {
  readdirSync,
  statSync,
  unlinkSync,
  writeFile,
  writeFileSync,
} from "fs";
import { basename, resolve } from "path";
import { FileInfo, groupFiles } from "./file";
import { capitalizeSentence } from "./string";

export const getExerciseName = (title: string): string =>
  /(?:\/|\\)/u.exec(title)
    ? capitalizeSentence(basename(title).replace(/-/u, ". ").replace(/-/g, " "))
    : capitalizeSentence(title.replace(/-/u, ". ").replace(/-/g, " "));

const genFrontMatter = (title: string, tags: string[], icon?: string): string =>
  `---\ntitle: ${title}\n${icon ? `icon: ${icon}\n` : ""}category: ${title}\n${
    tags.length
      ? `tag:\n${Array.from(new Set(tags))
          .map((tag) => `  - ${tag}\n`)
          .join("")}`
      : ""
  }---\n\n`;

const genMarkdownList = (list: string[]): string =>
  list
    .map(
      (title) =>
        `- [${getExerciseName(title)}](${decodeURI(title)}/readme.md)\n`
    )
    .join("\n");

const genDescription = (title: string): string =>
  `> **题目**: [${getExerciseName(title)}](readme.md)\n\n<!-- more -->\n\n`;

const genContent = (
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

export const genPersonMarkdown = (
  folderPath: string,
  fileInfoList: FileInfo[]
): Promise<string[]> => {
  const authorList = groupFiles(fileInfoList, "author");
  const promises: Promise<void>[] = [];
  for (const author in authorList) {
    const files = authorList[author];
    const tags = files.map((fileInfo) => fileInfo.language);

    promises.push(
      new Promise((resolve2) => {
        writeFile(
          resolve(folderPath, `${author}.md`),
          genFrontMatter(author, tags) +
            genDescription(folderPath) +
            genContent(files, "language"),
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

export const genLanguageMarkdown = (
  folderPath: string,
  fileInfoList: FileInfo[]
): Promise<string[]> => {
  const languageList = groupFiles(fileInfoList, "language");
  const promises: Promise<void>[] = [];
  for (const language in languageList) {
    const files = languageList[language];
    const tags = files.map((fileInfo) => fileInfo.author);

    promises.push(
      new Promise((resolve2) => {
        writeFile(
          resolve(folderPath, `${language}.md`),
          genFrontMatter(language, tags, files[0].icon) +
            genDescription(folderPath) +
            genContent(files, "author"),
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
    resolve(dir, "readme.md"),
    `---\ntitle: 题目列表\nicon: list\n---\n\n${genMarkdownList(folderList)}`
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
