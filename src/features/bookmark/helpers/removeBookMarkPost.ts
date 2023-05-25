import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeBookMarkedPost = createAsyncThunk(
  "bookmark/remove",
  async ({ postId, token }: any) => {
    try {
      const { data } = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        { headers: { authorization: token } }
      );

      console.log(data,"remove");
      return data.bookmarks 
      
    } catch (error) {
      console.log("remove bookmark error", error);
    }
  }
);

export {removeBookMarkedPost}