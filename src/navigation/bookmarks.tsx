import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookmarksPage from '../features/bookmarks';
import { BookmarksStackParamList } from './types';

const BookmarksStack = createStackNavigator<BookmarksStackParamList>();

const Bookmarks = () => (
  <BookmarksStack.Navigator initialRouteName="Bookmarks">
    <BookmarksStack.Screen
      name="Bookmarks"
      component={BookmarksPage}
      options={{
        headerTitle: 'Bookmarks',
      }}
    />
  </BookmarksStack.Navigator>
);

export default Bookmarks;
