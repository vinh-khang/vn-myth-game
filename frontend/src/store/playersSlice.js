import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playersList: [],
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayers: (state, action) => {
      state.playersList = action.payload;
    },
  },
});

export const { addPlayers } = playersSlice.actions;

export const selectPlayers = (state) => {
  return state.players.playersList;
};

export default playersSlice.reducer;
