const getMinAndMax = (numbers: number[]) => {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return { min, max };
};

export default getMinAndMax;
