import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createUserPost = createAsyncThunk(
  "post/user_post",
  async ({ post, token }: any) => {
    console.log(post, token, "post, token ");

    try {
        const {data} = await axios({
            method: "POST",
            url: "/api/posts",
            data: { postData: post },
            headers: { authorization: token },
          });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export { createUserPost };
