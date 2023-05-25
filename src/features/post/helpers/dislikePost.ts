import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const dislikePost = createAsyncThunk(
  "post_dislike",
  async ({ token, postId }: any) => {
    try {
      const { data } = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      return data
    } catch (error) {
      console.log(error);
    }
  }
);
export { dislikePost };
