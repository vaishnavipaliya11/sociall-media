import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "./helpers/getAllPost";
import { createUserPost } from "./helpers/createUserPost";
import { initialPostType } from "./helpers/postPayloadTypes";
import toast from "react-hot-toast";
import { editUserPost } from "./helpers/editPost";
import { likeUserPost } from "./helpers/likeUserPost";
import { dislikePost } from "./helpers/dislikePost";

export const initialState: initialPostType = {
  allPosts: [],
  loading: true,
  userPost: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, { payload }) => {
        state.allPosts = payload?.posts;

        state.loading = false;
      })
      .addCase(getAllPosts.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(createUserPost.pending, (state) => {
        state.loading = false;
      })
      .addCase(createUserPost.fulfilled, (state, { payload }) => {
        state.allPosts = payload?.posts;
        state.loading = false;
        toast.success("Post created!!");
      })
      .addCase(createUserPost.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(editUserPost.pending, (state) => {
        state.loading = false;
      })
      .addCase(editUserPost.fulfilled, (state, { payload }) => {
        console.log(payload, "edit-payload");
        state.allPosts = payload.posts;

        state.loading = false;
        toast.success("Post edited!!");
      })
      .addCase(editUserPost.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(likeUserPost.pending, (state) => {
        state.loading = false;
      })
      .addCase(likeUserPost.fulfilled, (state, { payload }) => {
        state.allPosts = payload.posts;

        state.loading = false;
        toast.success("Post liked!!");
      })
      .addCase(likeUserPost.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(dislikePost.pending, (state) => {
        state.loading = false;
      })
      .addCase(dislikePost.fulfilled, (state, { payload }) => {
        state.allPosts = payload.posts;

        state.loading = false;
        toast.success("Post disliked!!");
      })
      .addCase(dislikePost.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default postSlice.reducer;
