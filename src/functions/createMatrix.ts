const createMatrix = (rows: number, columns: number) => {
  let array = new Array(rows);
  for (let i = 0; i < rows; i++) {
    array[i] = new Array(columns).fill('');
  }
  return array || [];
};

export default createMatrix;
