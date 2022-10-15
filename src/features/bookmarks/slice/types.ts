import { Movie, Status } from '../../../types';

export type BookmarksReducer = {
  bookmarks: Movie[];
  fetchingBookmarksStatus: Status;
  settingBookmarkStatus: Status;
};
