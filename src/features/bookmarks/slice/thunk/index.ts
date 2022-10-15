import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getLocalBookmarks,
  removeLocalBookmark,
  saveLocalBookmark,
} from '../../../../services/localStorage';
import { Movie } from '../../../../types';

export const getBookmarksRequest = createAsyncThunk(
  'bookmarks/getBookmarksRequest',
  async () => {
    const bookmarks = getLocalBookmarks();
    return bookmarks;
  },
);

export const addBookmark = createAsyncThunk(
  'bookmarks/addBookmark',
  async (movie: Movie) => {
    const bookmarks = saveLocalBookmark(movie);
    return bookmarks;
  },
);

export const removeBookmark = createAsyncThunk(
  'bookmarks/removeBookmark',
  async (movie: Movie) => {
    const bookmarks = removeLocalBookmark(movie);
    return bookmarks;
  },
);
