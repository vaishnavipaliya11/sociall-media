import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const likeUserPost = createAsyncThunk(" ", async ({ postId }: any) => {
  const token = JSON.parse(localStorage.getItem("Spaces_User") || "");
  console.log(token.token, "token");

  try {
    const { data } = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: { authorization: token.token },
      }
    );
    return data
  } catch (error) {
    console.log(error, "like error");
  }
});

export { likeUserPost };
