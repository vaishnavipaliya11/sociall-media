import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const likeUserPost = createAsyncThunk(" ", async ({ token, postId }: any) => {
  try {
    const { data } = await axios.post(`/api/posts/like/${postId}`, {
      headers: { authorization: token },
    });
    console.log(data, "like-post");
  } catch (error) {
    console.log(error);
  }
});

export { likeUserPost };
