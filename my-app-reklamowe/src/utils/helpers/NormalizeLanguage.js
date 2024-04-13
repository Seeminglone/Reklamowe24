export const normalizePolishToEnglish = (text) => {
    const polishToEnglishMap = {
      "ą": "a",
      "ć": "c",
      "ę": "e",
      "ł": "l",
      "ń": "n",
      "ó": "o",
      "ś": "s",
      "ź": "z",
      "ż": "z",
    };
  
    return text
      .split('')
      .map(char => polishToEnglishMap[char] || char)
      .join('');
  };