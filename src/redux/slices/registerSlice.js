import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser } = registerSlice.actions;

export default registerSlice.reducer;
