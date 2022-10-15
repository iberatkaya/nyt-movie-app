import { MMKV } from 'react-native-mmkv';
import { Movie } from '../../types';

const storage = new MMKV();

export const saveBookmark = (movie: Movie) => {
  const jsonBookmarks = storage.getString('bookmarks');
  const bookmarks: Movie[] = jsonBookmarks ? JSON.parse(jsonBookmarks) : [];

  bookmarks.push(movie);

  storage.set('bookmarks', JSON.stringify(bookmarks));
};

export const getBookmarks = () => {
  const jsonBookmarks = storage.getString('bookmarks');
  const bookmarks: Movie[] = jsonBookmarks ? JSON.parse(jsonBookmarks) : [];
  return bookmarks;
};
