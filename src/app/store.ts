import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import seatsReducer from "./seatsSlice";
import reservationsReducer from "./reservationsSlice";

export const store = configureStore({
  reducer: {
    seats: seatsReducer,
    reservations: reservationsReducer,
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
