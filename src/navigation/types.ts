import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  SearchStack: NavigatorScreenParams<SearchStackParamList>;
  BookmarksStack: NavigatorScreenParams<BookmarksStackParamList>;
};

export type SearchStackParamList = {
  Search: undefined;
  Browser: {
    link: string;
  };
};

export type BookmarksStackParamList = {
  Bookmarks: undefined;
};
