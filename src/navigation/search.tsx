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
        headerStyle: {
          elevation: 1,
          shadowColor: '#333',
          shadowOffset: {
            height: 4,
            width: 0,
          },
          shadowOpacity: 0.1,
          shadowRadius: 2,
        },
      }}
    />
    <SearchStack.Screen
      name="Browser"
      component={Browser}
      options={{
        headerStyle: {
          elevation: 1,
          shadowColor: '#333',
          shadowOffset: {
            height: 4,
            width: 0,
          },
          shadowOpacity: 0.1,
          shadowRadius: 2,
        },
      }}
    />
  </SearchStack.Navigator>
);

export default Search;
