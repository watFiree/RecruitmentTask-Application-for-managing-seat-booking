import { Seat, SimplifiedSeat } from '../types';

const pickRandomSeats = (seats: Seat[][], tickets: number): SimplifiedSeat[] => {
  const freeSeats: SimplifiedSeat[] = [];
  const picked: SimplifiedSeat[] = [];

  seats.forEach(row => {
    row.forEach(seat =>
      seat?.reserved === false ? freeSeats.push({ id: seat.id, x: seat.cords.x, y: seat.cords.y }) : null
    );
  });

  for (let i = 0; i < tickets; i++) {
    const index = Math.floor(Math.random() * freeSeats.length);
    picked.push(freeSeats.splice(index, 1)[0]);
  }

  return picked;
};

export default pickRandomSeats;
