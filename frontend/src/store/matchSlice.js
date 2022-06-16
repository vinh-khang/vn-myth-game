import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  matchInfo: { roomID: 0 },
};

export const matchSlice = createSlice({
  name: "match",
  initialState,
  reducers: {
    updateMatchInfo: (state, action) => {
      state.match = action.payload;
    },
  },
});

export const { updateMatchInfo } = matchSlice.actions;

export const selectMatchInfo = (state) => state.user.matchInfo;

export default matchSlice.reducer;
