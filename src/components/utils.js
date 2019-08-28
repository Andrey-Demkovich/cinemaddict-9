// Алгоритм тасования Фишера-Йетса в варианте Дурштенфельда (Кнута)
export const shuffle = (arr) => {
  // Using Durstenfeld shuffle algorithm
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

// Случайное целое
export const getRandomInteger = (min, max) =>
  Math.floor(min + Math.random() * (max + 1 - min));

// Cлучайное булиево знычение
export const getRandomBoolean = () => Boolean(getRandomInteger(0, 1));
