import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getPostComment = createAsyncThunk(
  "post_comment",
  async ({ postId }: any) => {
    try {
      const { data } = await axios.get(`/api/comments/${postId}`);
      console.log(data, "comment");
      return data.comments;
    } catch (error) {
      console.log(error, "comment err");
    }
  }
);
export {getPostComment}