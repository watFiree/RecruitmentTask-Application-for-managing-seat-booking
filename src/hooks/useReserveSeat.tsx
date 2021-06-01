import { useState } from "react";
import { SimplifiedSeat } from "../types";

const useReserveSeat = (numberOfSeats: number, nextToEachOther: boolean) => {
  const [ticketsLeft, setTicketsLeft] = useState(numberOfSeats);
  const [seatsChoosen, setSeatsChoosen] = useState<SimplifiedSeat[]>([]);

  const handleSeatClick = (data: SimplifiedSeat) => {
    if (seatsChoosen.map((seat) => seat.id).includes(data.id)) {
      setSeatsChoosen((prev) => prev.filter((place) => place.id !== data.id));
      setTicketsLeft((prev) => prev + 1);
    } else if (ticketsLeft > 0) {
      setSeatsChoosen((prev) => [...prev, data]);
      setTicketsLeft((prev) => prev - 1);
    } else {
      setSeatsChoosen([data]);
      setTicketsLeft(numberOfSeats - 1);
    }
  };

  return [seatsChoosen, handleSeatClick] as const;
};

export default useReserveSeat;
