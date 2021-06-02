import { Seat, SimplifiedSeat } from '../types';

const findSeatsAlongside = (seats: Seat[][], tickets: number): SimplifiedSeat[] => {
  if (!seats.length) return [];
  const onlyAvailable = seats.map(row => row.map(spot => (spot.reserved ? '' : spot)));

  const picked: SimplifiedSeat[] = [];
  const longest: SimplifiedSeat[] = [];

  // find next to each other in one row
  for (let i in onlyAvailable) {
    // clean after each row
    if (picked.length === tickets) {
      return picked;
    } else {
      picked.length = 0;
    }

    for (const j in onlyAvailable[i]) {
      // if all tickets chosen return
      if (picked.length === tickets) {
        console.log('picked');
        return picked;
      }
      if (onlyAvailable[i][j] !== '') {
        // add seat if available
        const { id, cords } = onlyAvailable[i][j] as Seat;
        picked.push({ id, x: cords.x, y: cords.y });
      } else if (picked.length > longest.length) {
        //if current seats are longest update variable
        longest.length = 0;
        longest.push(...picked);
        picked.length = 0;
      } else {
        // clean picked if seat is not available
        picked.length = 0;
      }
    }
  }

  alert(`Największa ilość miejsc koło siebie wynosi ${longest.length}. Proszę o wybranie reszty ręcznie.`);
  return longest;
};

export default findSeatsAlongside;
