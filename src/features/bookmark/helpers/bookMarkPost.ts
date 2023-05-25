import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const bookMarkPost = createAsyncThunk("bookmark/add", async ({ postId, token }: any) => {
  try {
    const { data } = await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      { headers: { authorization: token } }
    );
    return data.bookmarks
  } catch (error) {
    console.log("bookmark error", error);
  }
});

export { bookMarkPost };
