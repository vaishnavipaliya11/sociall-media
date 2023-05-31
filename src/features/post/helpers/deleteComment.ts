import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteComment = createAsyncThunk(
  "post_comment_delete",
  async ({ id, commentId, token }: any) => {
    try {
      const { data } = await axios.post(
        `/api/comments/delete/${id}/${commentId}`,
        {},
        { headers: { authorization: token } }
      );
      return data
      console.log(data, "deleteComment");
    } catch (error) {
      console.log(error, "commment delete");
    }
  }
);
export { deleteComment };
