import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllPosts = createAsyncThunk("post/all", async () => {
  try {
    const { data } = await axios.get("/api/posts");
    return data
  } catch (error) {}
});
export { getAllPosts };
