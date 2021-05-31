import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "./store";
import createMatrix from "../functions/createMatrix";

const initialState: State = {
  data: [],
  free: [],
  reserved: [],
};

export const fetchSeatsFromDatabase = createAsyncThunk(
  "seats/fetchDataStatus",
  async () => {
    const response = await axios.get("http://localhost:3001/seats");
    return response.data;
  }
);

export const seatsSlice = createSlice({
  name: "seats",
  initialState,
  reducers: {},
  extraReducers: {
    [String(fetchSeatsFromDatabase.fulfilled)]: (state, action) => {
      const allX = action.payload.map((seat: Seat) => seat.cords.x);
      const allY = action.payload.map((seat: Seat) => seat.cords.y);
      const minX = Math.min(...allX);
      const maxX = Math.max(...allX);
      const minY = Math.min(...allY);
      const maxY = Math.max(...allY);
      const matrix = createMatrix(maxX + 1 - minX, maxY + 1 - minY);
      action.payload.forEach((seat: Seat) => {
        matrix[seat.cords.x - minX][seat.cords.y - minY] = seat;
        if (seat.reserved) {
          state.reserved.push(seat.id);
        } else {
          state.free.push(seat.id);
        }
      });
      state.data = matrix;
    },
  },
});

export const seatsState = (state: RootState) => state.seats;

// export const { fetchSeatsFromDatabase } = seatsSlice.caseReducers;

export default seatsSlice.reducer;

interface State {
  data: Seat[][];
  free: string[];
  reserved: string[];
}

interface Seat {
  id: string;
  cords: {
    y: number;
    x: number;
  };
  reserved: boolean;
}
