export const capitalize = (word: string): string =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

export const strictCapitalize = (word: string): string =>
  `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;

export const capitalizeSentence = (sentence: string): string =>
  capitalize(sentence)
    .split(" ")
    .map((word) =>
      [
        "in",
        "on",
        "of",
        "with",
        "by",
        "for",
        "at",
        "about",
        "off",
        "to",
      ].includes(word)
        ? word
        : strictCapitalize(word)
    )
    .join(" ");
