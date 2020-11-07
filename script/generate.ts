import { statSync, readdirSync } from "fs";
import { resolve } from "path";
import { getFiles } from "./file";
import {
  getExercise,
  genExerciseList,
  genLanguageMarkdown,
  genPersonMarkdown,
} from "./markdown";

const folderList = getExercise();

folderList.forEach((folderName) => {
  const folderPath = resolve("exercise", folderName);
  const fileList = readdirSync(folderPath).filter(
    (fileName) =>
      statSync(resolve(folderPath, fileName)).isFile() &&
      !fileName.includes(".md")
  );

  void getFiles(folderPath, fileList).then((fileInfoList) => {
    void genLanguageMarkdown(folderPath, fileInfoList);
    void genPersonMarkdown(folderPath, fileInfoList);
  });
});

genExerciseList("exercise", folderList);
