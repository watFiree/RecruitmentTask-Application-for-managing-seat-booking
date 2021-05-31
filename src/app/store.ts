import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import seatsReducer from "./seatsSlice";

export const store = configureStore({
  reducer: {
    seats: seatsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
