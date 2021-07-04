import { Seat, SimplifiedSeat } from '../types';

const findSeatsNotNextTo = (seats: Seat[][], tickets: number): SimplifiedSeat[] => {
  const onlyAvailable = seats.map(row => row.map(spot => (spot.reserved ? '' : spot)));

  const chosenSeats = [];
  let omit = true;

  for (let i in onlyAvailable) {
    for (let j in onlyAvailable[i]) {
      if (chosenSeats.length === tickets) {
        return chosenSeats;
      }
      omit = !omit;
      if (onlyAvailable[i][j] !== '' && !omit) {
        const {
          id,
          cords: { x, y },
        } = onlyAvailable[i][j] as Seat;
        chosenSeats.push({ id, x, y });
      }
    }

    if (chosenSeats.length === tickets) {
      return chosenSeats;
    }
  }

  return chosenSeats;
};

export default findSeatsNotNextTo;
