import pickRandomSeats from '../functions/pickRandomSeats';

test('picks random seats properly', () => {
  const seats = [
    [
      { id: 's01', cords: { x: 0, y: 1 }, reserved: false },
      { id: 's02', cords: { x: 0, y: 2 }, reserved: true },
      { id: 's03', cords: { x: 0, y: 3 }, reserved: false },
    ],
    [
      { id: 's11', cords: { x: 1, y: 1 }, reserved: true },
      { id: 's12', cords: { x: 1, y: 2 }, reserved: false },
      { id: 's13', cords: { x: 1, y: 3 }, reserved: false },
    ],
  ];

  const tickets = 3;

  expect(pickRandomSeats(seats, 0)).toHaveLength(0);
  expect(pickRandomSeats(seats, tickets)).toHaveLength(tickets);
  expect(pickRandomSeats(seats, tickets)[0]).toHaveProperty('id');
  expect(pickRandomSeats(seats, tickets)[0]).toHaveProperty('x');
  expect(pickRandomSeats(seats, tickets)[0]).toHaveProperty('y');
});
