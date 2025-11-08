import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import bookingReducer from "@/features/booking/bookingSlice";
import counselorReducer from "@/features/counselor/counselorSlice";
import modalReducer from "@/features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    booking: bookingReducer,
    counselor: counselorReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
