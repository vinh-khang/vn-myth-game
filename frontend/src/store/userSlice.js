import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: { isLoggin: false },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { updateUserInfo } = userSlice.actions;

export const selectUserInfo = (state) => state.user.userInfo;

export default userSlice.reducer;
