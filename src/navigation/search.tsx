import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchPage from '../features/search';
import { SearchStackParamList } from './types';
import Browser from '../features/browser';

const SearchStack = createStackNavigator<SearchStackParamList>();

const Search = () => (
  <SearchStack.Navigator initialRouteName="Search">
    <SearchStack.Screen
      name="Search"
      component={SearchPage}
      options={{
        headerTitle: 'NYT Movie Review',
      }}
    />
    <SearchStack.Screen name="Browser" component={Browser} />
  </SearchStack.Navigator>
);

export default Search;
