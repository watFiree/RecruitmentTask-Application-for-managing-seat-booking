export interface Seat {
  id: string;
  cords: {
    y: number;
    x: number;
  };
  reserved: boolean;
}

export interface SimplifiedSeat {
  id: string;
  x: number;
  y: number;
}

export type SeatsColors = 'orange' | 'darkgray' | 'white';

export interface SeatProps {
  id: string | undefined;
  x: number;
  y: number;
  reserved: boolean;
  backgroundColor: SeatsColors;
  handleClick: (data: SimplifiedSeat) => void;
}
