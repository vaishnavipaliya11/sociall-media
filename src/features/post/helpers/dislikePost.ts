import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const dislikePost = createAsyncThunk(
  "post_dislike",
  async ({ token, postId }: any) => {
    console.log(token,postId ,"dislike");
    
    try {
      const { data } = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      console.log("dislike", data);
      
      return data
    } catch (error) {
      console.log(error);
    }
  }
);
export { dislikePost };
