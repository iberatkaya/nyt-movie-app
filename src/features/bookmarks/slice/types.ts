import { Movie } from '../../../types';

export type BookmarksReducer = {
  bookmarks: Movie[];
  status: 'idle' | 'loading' | 'success' | 'failed';
};
