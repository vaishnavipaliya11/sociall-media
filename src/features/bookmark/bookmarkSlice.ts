import { createSlice } from "@reduxjs/toolkit";
import { bookMarkPost } from "./helpers/bookMarkPost";
import { toast } from "react-hot-toast";
import { removeBookMarkedPost } from "./helpers/removeBookMarkPost";
import { getAllBookmarks } from "./helpers/getAllBookMarks";

export const initialState = {
  allBookMarks: [],
  loading: false,
  bookmarkLoading:false,
  bookmarks: [],
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(bookMarkPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(bookMarkPost.fulfilled, (state, { payload }) => {
        console.log(payload, "payload");
        state.allBookMarks = payload;
        state.loading = false;
      })
      .addCase(bookMarkPost.rejected, (state) => {
        state.loading = false;
      });
      builder
      .addCase(removeBookMarkedPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeBookMarkedPost.fulfilled, (state, { payload }) => {
        console.log(payload, "payload");
        state.allBookMarks = payload;
        state.loading = false;
      })
      .addCase(removeBookMarkedPost.rejected, (state) => {
        state.loading = false;
      });
      builder
      .addCase(getAllBookmarks.pending, (state) => {
        state.bookmarkLoading = true;
      })
      .addCase(getAllBookmarks.fulfilled, (state, { payload }) => {
        state.allBookMarks = payload;
        state.bookmarkLoading = false;
      })
      .addCase(getAllBookmarks.rejected, (state) => {
        state.bookmarkLoading = false;
      });
  },
});

// export const bookmarkSlice = createSlice({
//   name: "bookmark",
//   initialState,
//   reducers: {},

//   extraReducers(builder) {
//     builder
//       .addCase(bookMarkPost.pending, (state) => {
//         state.loading = false;
//       })
//       .addCase(bookMarkPost.fulfilled, (state, { payload }) => {
//         state.allBookMarks = payload.posts;

//         state.loading = false;
//         toast.success("Post liked!!");
//       })
//       .addCase(bookMarkPost.rejected, (state) => {
//         state.loading = false;
//       });
//     builder
//       .addCase(removeBookMarkedPost.pending, (state) => {
//         state.loading = false;
//       })
//       .addCase(removeBookMarkedPost.fulfilled, (state, { payload }) => {
//         //   state.allPosts = payload.posts;

//         state.loading = false;
//         toast.success("Post disliked!!");
//       })
//       .addCase(removeBookMarkedPost.rejected, (state) => {
//         state.loading = false;
//       });
//   },
// });

export default bookmarkSlice.reducer;
