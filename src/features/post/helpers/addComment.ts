import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addComment = createAsyncThunk(
  "post_make_comment",
  async ({ postId, commentData, token }: any) => {
    try {
      const { data } = await axios.post(
        `/api/comments/add/${postId}`,
        { commentData },
        { headers: { authorization: token } }
      );
      console.log(data?.posts, "comment add");
      return data?.posts;
    } catch (error) {
      console.log(error, "add comment err");
    }
  }
);
export { addComment };
