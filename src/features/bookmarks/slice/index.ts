import { createSlice } from '@reduxjs/toolkit';
import { getBookmarksRequest } from './thunk';
import { BookmarksReducer } from './types';

const initialState: BookmarksReducer = {
  bookmarks: [],
  status: 'idle',
};

const bookmarks = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBookmarksRequest.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getBookmarksRequest.fulfilled, (state, action) => {
      state.status = 'success';
      state.bookmarks = action.payload;
    });
  },
});

export const {} = bookmarks.actions;

export default bookmarks.reducer;
