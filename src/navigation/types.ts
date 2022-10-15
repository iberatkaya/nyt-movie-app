import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  SearchStack: NavigatorScreenParams<SearchStackParamList>;
  BookmarksStack: NavigatorScreenParams<BookmarksStackParamList>;
};

type Browser = {
  link: string;
};

export type SearchStackParamList = {
  Search: undefined;
  Browser: Browser;
};

export type BookmarksStackParamList = {
  Bookmarks: undefined;
  Browser: Browser;
};
