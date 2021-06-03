import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Seat, SimplifiedSeat } from '../types';

import { RootState } from './store';
import createMatrix from '../functions/createMatrix';
import getMinAndMax from '../functions/getMinAndMax';

const initialState: State = {
  data: [],
  free: [],
  reserved: [],
};

export const fetchSeatsFromDatabase = createAsyncThunk('seats/fetchDataStatus', async () => {
  const response = await axios.get('http://localhost:3001/seats');
  return response.data;
});

export const seatsSlice = createSlice({
  name: 'seats',
  initialState,
  reducers: {
    reserveSeats: (state, action: PayloadAction<SimplifiedSeat[]>) => {
      const reserved = action.payload;
      if (!reserved.length) return;

      reserved.forEach(place => {
        state.data[place.x][place.y] = {
          ...(state.data[place.x][place.y] as Seat),
          reserved: true,
        };
      });
    },
  },
  extraReducers: {
    [String(fetchSeatsFromDatabase.fulfilled)]: (state, action: PayloadAction<Seat[]>) => {
      const allX = action.payload.map(seat => seat.cords.x);
      const allY = action.payload.map(seat => seat.cords.y);
      //get max and min to create appropriate matrix
      const x = getMinAndMax(allX);
      const y = getMinAndMax(allY);

      state.data = createMatrix(x.max + 1 - x.min, y.max + 1 - y.min);

      action.payload.forEach(seat => {
        //add seat to matrix
        state.data[seat.cords.x - x.min][seat.cords.y - y.min] = seat;

        //add seat to reserved or free
        state[seat.reserved ? 'reserved' : 'free'] = [...state[seat.reserved ? 'reserved' : 'free'], seat.id];
      });
    },
  },
});

export const seatsState = (state: RootState) => state.seats;

export const { reserveSeats } = seatsSlice.actions;

export default seatsSlice.reducer;

interface State {
  data: Seat[][];
  free: string[];
  reserved: string[];
}
