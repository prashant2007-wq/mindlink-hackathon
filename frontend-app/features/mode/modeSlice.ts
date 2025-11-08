import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleMode, setMode } = modeSlice.actions;
export default modeSlice.reducer;
