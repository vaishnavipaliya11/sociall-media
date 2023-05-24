import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./helpers/loginUser";

export type initialStateType = {
  social_media_token: string | number;
  authUserData: any;
  loading: boolean;
};
export const initialState: initialStateType = {
  social_media_token: "",
  authUserData: "",
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, {payload}) => {
        console.log(payload,"payload");
        state.social_media_token=payload?.encodedToken
        state.authUserData=payload?.foundUser
        state.loading = false;
      })
      .addCase(userLogin.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default authSlice.reducer;
