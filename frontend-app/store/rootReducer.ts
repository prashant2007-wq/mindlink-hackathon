import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import modeReducer from "@/features/mode/modeSlice";
import bookingReducer from "@/features/booking/bookingSlice";
import counselorReducer from "@/features/counselor/counselorSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  mode: modeReducer,
  booking: bookingReducer,
  counselor: counselorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
