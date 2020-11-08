import { readFile } from "fs";
import { resolve } from "path";

export interface FileInfo {
  author: string;
  version: string;
  ext: string;
  language: string;
  fileName: string;
  content: string;
}

const extMap: Record<string, string> = {
  js: "JavaScript",
  ts: "TypeScript",
  cpp: "C++",
  c: "C",
  java: "Java",
  py: "Python3",
  kt: "kotlin",
};

export const getLanguage = (ext: string): string => extMap[ext];

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
                fileName,
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
