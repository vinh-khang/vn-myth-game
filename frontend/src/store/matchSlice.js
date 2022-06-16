import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  matchInfo: { roomID: "0", socket: {} },
};

export const matchSlice = createSlice({
  name: "match",
  initialState,
  reducers: {
    updateMatchInfo: (state, action) => {
      state.matchInfo = action.payload;
      console.log(action.payload);
    },
  },
});

export const { updateMatchInfo } = matchSlice.actions;

export const selectMatchInfo = (state) => {
  return state.match.matchInfo;
};

export default matchSlice.reducer;
