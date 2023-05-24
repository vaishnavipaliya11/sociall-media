import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUserPost = createAsyncThunk(
  "post/delete_post",
  async ({ token, postId }: any) => {
    try {
      const { data } = await axios({
        method: "DELETE",
        url: `/api/posts/${postId}`,

        headers: { authorization: token },
      });
      console.log(data, "delete");
      return data
    } catch (error) {
      console.log(error);
    }
  }
);

export { deleteUserPost };
