import { useState, useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import { seatsState } from '../app/seatsSlice';
import { SimplifiedSeat } from '../types';

import findSeatsAlongside from '../functions/findSeatsAlongside';
import pickRandomSeats from '../functions/pickRandomSeats';

const useReserveSeat = (numberOfSeats: number, nextToEachOther: boolean) => {
  const [ticketsLeft, setTicketsLeft] = useState(0);
  const [seatsChoosen, setSeatsChoosen] = useState<SimplifiedSeat[]>([]);
  const { data } = useAppSelector(seatsState);

  useEffect(() => {
    if (nextToEachOther) {
      const chosenAlongside = findSeatsAlongside(data, numberOfSeats);
      setTicketsLeft(numberOfSeats - chosenAlongside.length);
      return setSeatsChoosen(chosenAlongside);
    }
    return setSeatsChoosen(pickRandomSeats(data, numberOfSeats));
  }, [numberOfSeats, nextToEachOther, setSeatsChoosen, data]);

  const handleSeatClick = (data: SimplifiedSeat) => {
    if (seatsChoosen.map(seat => seat.id).includes(data.id)) {
      setSeatsChoosen(prev => prev.filter(place => place.id !== data.id));
      setTicketsLeft(prev => prev + 1);
    } else if (ticketsLeft > 0) {
      setSeatsChoosen(prev => [...prev, data]);
      setTicketsLeft(prev => prev - 1);
    } else {
      setSeatsChoosen([data]);
      setTicketsLeft(numberOfSeats - 1);
    }
  };

  return [seatsChoosen, handleSeatClick] as const;
};

export default useReserveSeat;
