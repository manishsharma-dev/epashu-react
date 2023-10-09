import { createSlice } from "@reduxjs/toolkit";

const INITIAL_USER = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_USER,
  reducers: {
    setAuthUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
