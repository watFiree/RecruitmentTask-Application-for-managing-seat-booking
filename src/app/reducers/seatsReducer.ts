const initialState: Seat[] = [];

const seatsReducer = (state = initialState, action: any) => {};

export default seatsReducer;

interface Seat {
  id: string;
  cords: {
    y: number;
    x: number;
  };
  reserved: boolean;
}
