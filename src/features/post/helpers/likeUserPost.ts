import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const likeUserPost = createAsyncThunk("post/like ", async ( {postId ,rejectWithValue} : any) => {
  const token = JSON.parse(localStorage.getItem("Spaces_User") || "");
  console.log(postId, "postId");

  try {
    const { data } = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: { authorization: token.token },
      }
    );
    console.log(data,"liked data");
    
    return data;
  } catch (error:any) {
    console.log(error, "like error");
    rejectWithValue(error.message)
  }
});

export { likeUserPost };
