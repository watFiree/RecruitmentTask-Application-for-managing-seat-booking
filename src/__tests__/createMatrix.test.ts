import createMatrix from '../functions/createMatrix';

test('should create a matrix with appropriate dimensions', () => {
  expect(createMatrix(0, 4)).toHaveLength(0);
  expect(createMatrix(4, 0)[0]).toHaveLength(0);
  expect(createMatrix(9, 10)).toHaveLength(9);
  expect(createMatrix(14, 5)[0]).toHaveLength(5);
});
