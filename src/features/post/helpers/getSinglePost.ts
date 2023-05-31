import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getSinglePost = createAsyncThunk(
  "post/single-post",
  async ({ postId }: any) => {
    console.log("postId", postId);

    const { data } = await axios.get(`/api/posts/${postId}`);
    return data?.post;
  }
);

export { getSinglePost };
