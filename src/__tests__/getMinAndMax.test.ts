import getMinAndMax from '../functions/getMinAndMax';

test('return correct min and max value', () => {
  const numbers = [1, 99];
  expect(getMinAndMax(numbers)).toHaveProperty('min', 1);
  expect(getMinAndMax(numbers)).toHaveProperty('max', 99);
});
