import { createSlice } from '@reduxjs/toolkit';
import { getBookmarksRequest, addBookmark, removeBookmark } from './thunk';
import { BookmarksReducer } from './types';

const initialState: BookmarksReducer = {
  bookmarks: [],
  fetchingBookmarksStatus: 'idle',
  settingBookmarkStatus: 'idle',
};

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBookmarksRequest.pending, (state) => {
      state.fetchingBookmarksStatus = 'loading';
    });
    builder.addCase(getBookmarksRequest.fulfilled, (state, action) => {
      state.fetchingBookmarksStatus = 'success';
      state.bookmarks = action.payload;
    });
    builder.addCase(addBookmark.pending, (state) => {
      state.settingBookmarkStatus = 'loading';
    });
    builder.addCase(addBookmark.fulfilled, (state, action) => {
      state.settingBookmarkStatus = 'success';
      state.bookmarks = action.payload;
    });
    builder.addCase(removeBookmark.pending, (state) => {
      state.settingBookmarkStatus = 'loading';
    });
    builder.addCase(removeBookmark.fulfilled, (state, action) => {
      state.settingBookmarkStatus = 'success';
      state.bookmarks = action.payload;
    });
  },
});

export const {} = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
