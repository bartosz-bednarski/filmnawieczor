export const encodePolishChars = (url) => {
  const polishCharsMap = {
    ą: "%C4%85",
    ć: "%C4%87",
    ę: "%C4%99",
    ł: "%C5%82",
    ń: "%C5%84",
    ó: "%C3%B3",
    ś: "%C5%9B",
    ź: "%C5%BA",
    ż: "%C5%BC",
    Ą: "%C4%84",
    Ć: "%C4%86",
    Ę: "%C4%98",
    Ł: "%C5%81",
    Ń: "%C5%83",
    Ó: "%C3%93",
    Ś: "%C5%9A",
    Ź: "%C5%B9",
    Ż: "%C5%BB",
  };

  // Zamiana polskich znaków w URL
  return url
    .split("")
    .map((char) => polishCharsMap[char] || char)
    .join("");
};
