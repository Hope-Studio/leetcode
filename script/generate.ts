import { statSync, readdirSync, writeFileSync } from "fs";
import { resolve } from "path";
import { getFiles } from "./file";
import {
  getExercise,
  genExerciseList,
  genLanguageMarkdown,
  genPersonMarkdown,
} from "./markdown";

const folderList = getExercise("exercise");

void Promise.all(
  folderList.map((folderName) => {
    const folderPath = resolve("exercise", folderName);
    const fileList = readdirSync(folderPath).filter(
      (fileName) =>
        statSync(resolve(folderPath, fileName)).isFile() &&
        !fileName.includes(".md")
    );

    return getFiles(folderPath, fileList).then((fileInfoList) =>
      Promise.all([
        genPersonMarkdown(folderPath, fileInfoList),
        genLanguageMarkdown(folderPath, fileInfoList),
      ]).then(([authors, languages]) =>
        Promise.resolve({
          title: folderName,
          icon: "exercise",
          prefix: `${folderName}/`,
          children: [
            "",
            {
              title: "作者",
              icon: "people",
              collapsable: false,
              children: authors,
            },
            {
              title: "语言",
              icon: "code",
              collapsable: false,
              children: languages,
            },
          ],
        })
      )
    );
  })
).then((sidebarList) => {
  writeFileSync(
    "exercise/.vuepress/sidebar.js",
    `module.exports = ${JSON.stringify(["", ...sidebarList])};\n`
  );
});

genExerciseList("exercise", folderList);
