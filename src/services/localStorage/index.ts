import { MMKV } from 'react-native-mmkv';
import { Movie } from '../../types';

const storage = new MMKV();

export const clearStorage = () => storage.clearAll();

/** Save a movie as a bookmark to local storage */
export const saveLocalBookmark = (movie: Movie) => {
  const jsonBookmarks = storage.getString('bookmarks');
  const bookmarks: Movie[] = jsonBookmarks ? JSON.parse(jsonBookmarks) : [];

  if (bookmarks.find((i) => i.title === movie.title)) {
    throw new Error('Movie is already bookmarked!');
  }

  bookmarks.push(movie);

  storage.set('bookmarks', JSON.stringify(bookmarks));

  return bookmarks;
};

/** Get all bookmarks from local storage */
export const getLocalBookmarks = () => {
  const jsonBookmarks = storage.getString('bookmarks');
  const bookmarks: Movie[] = jsonBookmarks ? JSON.parse(jsonBookmarks) : [];
  return bookmarks;
};

/** Remove a movie from the local storage bookmarks */
export const removeLocalBookmark = (movie: Movie) => {
  const jsonBookmarks = storage.getString('bookmarks');
  const bookmarks: Movie[] = jsonBookmarks ? JSON.parse(jsonBookmarks) : [];

  const movieIndex = bookmarks.findIndex((i) => i.title === movie.title);

  if (movieIndex === -1) {
    throw new Error("Can't find movie!");
  }

  bookmarks.splice(movieIndex, 1);

  storage.set('bookmarks', JSON.stringify(bookmarks));

  return bookmarks;
};
