import { readFile } from "fs";
import { resolve } from "path";

export interface FileInfo {
  author: string;
  version: string;
  ext: string;
  icon: string;
  language: string;
  content: string;
}

const extMap: Record<string, string> = {
  js: "JavaScript",
  ts: "TypeScript",
  c: "C",
  cpp: "C++",
  cs: "C#",
  java: "Java",
  py: "Python3",
  kt: "kotlin",
  rs: "Rust",
  rb: "Ruby",
  go: "Go",
  swift: "Swift",
  scala: "scala",
  php: "PHP",
};

const iconMap: Record<string, string> = {
  js: "javascript",
  ts: "typescript",
  c: "c",
  cpp: "cpp",
  cs: "c-sharp",
  java: "java",
  py: "python",
  kt: "kotlin",
  rs: "rust",
  rb: "ruby",
  go: "go",
  swift: "swift",
  scala: "scala",
  php: "php",
};

export const getLanguage = (ext: string): string => extMap[ext];

export const getIcon = (ext: string): string => iconMap[ext];

export const getFiles = (
  folderPath: string,
  fileList: string[]
): Promise<FileInfo[]> =>
  Promise.all(
    fileList.map(
      (fileName) =>
        new Promise<FileInfo>((resolve1) => {
          const temp = fileName.split(".");
          const ext = temp.pop() || "";
          const version = temp.length > 1 ? (temp.pop() as string) || "" : "";
          const author = temp.join(".");

          readFile(
            resolve(folderPath, fileName),
            { encoding: "utf-8" },
            (_err, content) => {
              resolve1({
                author,
                version,
                ext,
                content,
                icon: getIcon(ext),
                language: getLanguage(ext),
              });
            }
          );
        })
    )
  );

export const groupFiles = (
  fileInfoList: FileInfo[],
  key: keyof FileInfo
): Record<string, FileInfo[]> => {
  const result: Record<string, FileInfo[]> = {};

  fileInfoList.forEach((fileInfo) => {
    if (!result[fileInfo[key]]) result[fileInfo[key]] = [];
    result[fileInfo[key]].push(fileInfo);
  });

  return result;
};
