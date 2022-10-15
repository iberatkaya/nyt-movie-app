import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookmarksPage from '../features/bookmarks';
import { BookmarksStackParamList } from './types';
import Browser from '../features/browser';

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
    <BookmarksStack.Screen name="Browser" component={Browser} />
  </BookmarksStack.Navigator>
);

export default Bookmarks;
