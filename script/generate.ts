import { statSync, readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

import { getFiles } from "./utils/file.js";
import {
  getExercise,
  getExerciseName,
  genExerciseList,
  genLanguageMarkdown,
  generatePersonMarkdown,
  genProblemMarkdown,
} from "./utils/markdown.js";

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
        generatePersonMarkdown({ path: folderPath, files, title }),
        genLanguageMarkdown({ path: folderPath, files, title }),
      ]).then(([authors, languages]) =>
        Promise.resolve({
          text: getExerciseName(folderName),
          icon: "exercise",
          prefix: `${folderName}/`,
          collapsible: true,
          children: [
            "",
            {
              text: "作者",
              icon: "people",
              children: authors,
            },
            {
              text: "语言",
              icon: "code",
              children: languages,
            },
          ],
        })
      );
    });
  })
).then((sidebarList) => {
  writeFileSync(
    "leetcode/.vuepress/sidebar.ts",
    `\
import { sidebar } from 'vuepress-theme-hope';

export default sidebar(${JSON.stringify(["", ...sidebarList])});
`
  );
});

genExerciseList("leetcode", folderList);
void genProblemMarkdown("leetcode", folderList);
