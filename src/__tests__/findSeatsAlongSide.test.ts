import findSeatsAlongside from '../functions/findSeatsAlongside';

test('finds seats next to each other', () => {
  const jsdomAlert = window.alert; // remember the jsdom alert
  window.alert = () => {};
  const seats = [
    [
      { id: 's01', cords: { x: 0, y: 1 }, reserved: false },
      { id: 's02', cords: { x: 0, y: 2 }, reserved: false },
      { id: 's03', cords: { x: 0, y: 3 }, reserved: true },
    ],
    [
      { id: 's11', cords: { x: 1, y: 1 }, reserved: false },
      { id: 's12', cords: { x: 1, y: 2 }, reserved: true },
      { id: 's13', cords: { x: 1, y: 3 }, reserved: false },
    ],
    [
      { id: 's21', cords: { x: 2, y: 1 }, reserved: false },
      { id: 's22', cords: { x: 2, y: 2 }, reserved: false },
      { id: 's23', cords: { x: 2, y: 3 }, reserved: false },
    ],
  ];

  const tickets = 3;
  expect(findSeatsAlongside(seats, tickets)).toHaveLength(3);
  expect(findSeatsAlongside([], tickets)).toHaveLength(0);
  expect(findSeatsAlongside(seats, tickets)[0]).toHaveProperty('id');
  expect(findSeatsAlongside(seats, tickets)[0]).toHaveProperty('x');
  expect(findSeatsAlongside(seats, tickets)[0]).toHaveProperty('y');
  window.alert = jsdomAlert;
});
