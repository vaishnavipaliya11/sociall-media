import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const editUserComment = createAsyncThunk(
  "post_edit_comment",
  async ({ id, commentId, token, commentData }: any) => {
    try {
      const { data } = await axios.post(
        `/api/comments/edit/${id}/${commentId}`,
        { commentData: { text: commentData } },
        { headers: { authorization: token } }
      );
      console.log(data, "editt");
    } catch (error) {
      console.log(error,"editt");
    }
  }
);
export { editUserComment };
