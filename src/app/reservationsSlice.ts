import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplifiedSeat } from "../types";

import { RootState } from "./store";

const initialState: Reservation[] = [];

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    makeReservation: (state, action: PayloadAction<SimplifiedSeat[]>) => {
      const id = String(state.length);
      state = [...state, { id, seats: action.payload }];
    },
  },
});

export const seatsState = (state: RootState) => state.seats;

export const { makeReservation } = reservationsSlice.actions;

export default reservationsSlice.reducer;

interface Reservation {
  id: string;
  seats: SimplifiedSeat[];
}
