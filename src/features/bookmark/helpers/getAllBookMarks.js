import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllBookmarks = createAsyncThunk("/user/getBookmarks", async () => {
  const token = JSON.parse(localStorage.getItem("Spaces_User") || "");

  try {
    const { data } = await axios.get("/api/users/bookmark/", {
      headers: { authorization: token.token },
    });
    return data.bookmarks;
   
  } catch (error) {}
});

export { getAllBookmarks };
