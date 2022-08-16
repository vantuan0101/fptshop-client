import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    first_name: null,
    last_name: null,
    email: null,
    phone: null,
    type_user: null,
    avatar : null
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser : (state, action) => {
      state.user = null;
    }
  },
});

export const { addUser ,removeUser } = userSlice.actions;

export default userSlice.reducer;
