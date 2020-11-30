import { statSync, readdirSync, writeFileSync } from "fs";
import { resolve } from "path";
import { getFiles } from "./util/file";
import {
  getExercise,
  getExerciseName,
  genExerciseList,
  genLanguageMarkdown,
  genPersonMarkdown,
  genProblemMarkdown,
} from "./util/markdown";

const folderList = getExercise("leetcode");

void Promise.all(
  folderList.map((folderName) => {
    const folderPath = resolve("leetcode", folderName);
    const fileList = readdirSync(folderPath).filter(
      (fileName) =>
        statSync(resolve(folderPath, fileName)).isFile() &&
        !fileName.includes(".md")
    );

    return getFiles(folderPath, fileList).then((files) => {
      const title = getExerciseName(folderName);

      return Promise.all([
        genPersonMarkdown({ path: folderPath, files, title }),
        genLanguageMarkdown({ path: folderPath, files, title }),
      ]).then(([authors, languages]) =>
        Promise.resolve({
          title: getExerciseName(folderName),
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
      );
    });
  })
).then((sidebarList) => {
  writeFileSync(
    "leetcode/.vuepress/sidebar.js",
    `module.exports = ${JSON.stringify(["", ...sidebarList])};\n`
  );
});

genExerciseList("leetcode", folderList);
void genProblemMarkdown("leetcode", folderList);
