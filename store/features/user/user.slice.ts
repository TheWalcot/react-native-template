import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./user.interface";

const initialState: UserState = {
  auth: {
    token: "",
    isAuthenticated: false,
  },
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = userSlice.actions;
export default userSlice.reducer;
