export const generateRandomNumbers = (
  min: number,
  max: number,
  count: number
): number[] => {
  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomNumbers: number[] = [];

  for (let i = 0; i < count; i++) {
    randomNumbers.push(getRandomNumber(min, max));
  }

  return randomNumbers;
};
