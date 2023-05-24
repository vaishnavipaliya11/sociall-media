import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk(
    "auth/login",
    async ({ username, password }:any) => {
      try {
        const { status, data } = await axios.post("/api/auth/login", { username, password });
        if (status === 200) {
          localStorage.setItem(
            "Spaces_User",
            JSON.stringify({ token: data.encodedToken, userData: data.foundUser })
          );
        }
        return data;
      } catch (err) {
        console.log(err);
        
      }
    }
  );
  
