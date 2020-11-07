import {
  readdirSync,
  statSync,
  writeFile,
  writeFileSync,
} from "fs";
import { resolve } from "path";
import { FileInfo, groupFiles } from "./file";

const genFrontMatter = (
  title: string,
  category = "",
  tags: string[] = []
): string =>
  `---\ntitle: ${title}\n` +
  (category ? `category: ${category}\n` : "") +
  (tags.length ? `tag:\n${tags.map((tag) => `  - ${tag}\n`).join("")}` : "") +
  "---\n\n";

const genMarkdownList = (list: string[]): string =>
  list.map((text) => `- [${text}](${decodeURI(text)}/readme.md)\n`).join("");

const genContent = (
  fileInfoList: FileInfo[],
  key: "author" | "language"
): string =>
  fileInfoList
    .map(
      (fileInfo) =>
        `## ${fileInfo[key]}\n\n\`\`\`${fileInfo.ext}\n${fileInfo.content}\n\`\`\`\n`
    )
    .join("\n");

export const genPersonMarkdown = (
  folderPath: string,
  fileInfoList: FileInfo[]
): Promise<void[]> => {
  const authorList = groupFiles(fileInfoList, "author");
  const promises: Promise<void>[] = [];
  for (const author in authorList) {
    const files = authorList[author];
    const tags = files.map((fileInfo) => fileInfo.language);

    promises.push(
      new Promise((resolve2) => {
        writeFile(
          resolve(folderPath, `${author}.md`),
          genFrontMatter(author, author, tags) + genContent(files, "language"),
          { encoding: "utf-8", flag: "w" },
          () => resolve2()
        );
      })
    );
  }

  return Promise.all(promises);
};

export const genLanguageMarkdown = (
  folderPath: string,
  fileInfoList: FileInfo[]
): Promise<void[]> => {
  const languageList = groupFiles(fileInfoList, "language");
  const promises: Promise<void>[] = [];
  for (const language in languageList) {
    const files = languageList[language];
    const tags = files.map((fileInfo) => fileInfo.author);

    promises.push(
      new Promise((resolve2) => {
        writeFile(
          resolve(folderPath, `${language}.md`),
          genFrontMatter(language, language, tags) +
            genContent(files, "author"),
          { encoding: "utf-8", flag: "w" },
          () => resolve2()
        );
      })
    );
  }

  return Promise.all(promises);
};

export const getExercise = (): string[] =>
  readdirSync("exercise")
    .filter(
      (fileName) =>
        statSync(resolve("exercise", fileName)).isDirectory() &&
        fileName !== ".vuepress"
    )
    .sort((x, y) => Number(x.split("-")[0]) - Number(y.split("-")[0]));

export const genExerciseList = (folder: string, folderList: string[]): void => {
  writeFileSync(
    resolve(folder, "readme.md"),
    "# 题目列表\n\n" + genMarkdownList(folderList)
  );
};
