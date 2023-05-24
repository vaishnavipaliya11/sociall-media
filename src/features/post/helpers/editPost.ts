import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const editUserPost = createAsyncThunk(
  "post/edit",
  async ({ post, token, id }: any) => {
    try {
      const { data } = await axios.post(
        `/api/posts/edit/${id}`,
        {
          postData: post,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export { editUserPost };
