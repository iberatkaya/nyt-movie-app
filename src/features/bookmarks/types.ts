import { StackNavigationProp } from '@react-navigation/stack';
import { BookmarksStackParamList } from '../../navigation/types';

export type BookmarkNavigationProp = StackNavigationProp<
  BookmarksStackParamList,
  'Bookmarks'
>;
