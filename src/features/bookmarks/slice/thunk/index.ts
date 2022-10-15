import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBookmarks } from '../../../../services/localStorage';

export const getBookmarksRequest = createAsyncThunk(
  'bookmarks/fetchByIdStatus',
  async () => {
    const bookmarks = getBookmarks();
    return bookmarks;
  },
);
