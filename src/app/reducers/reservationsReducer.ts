const initialState: Reservation[] = [];

const reservationsReducer = (state = initialState, action: any) => {};

export default reservationsReducer;

interface Reservation {
  id: string;
  place: string;
  x: number;
  t: number;
}
