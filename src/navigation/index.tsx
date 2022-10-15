import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchStack from './search';
import { RootStackParamList } from './types';
import Bookmarks from './bookmarks';
import { useAppDispatch } from '../redux';
import { getBookmarksRequest } from '../features/bookmarks/slice/thunk';

const TabsStack = createBottomTabNavigator<RootStackParamList>();

const Tabs = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBookmarksRequest()).then(console.log);
  }, [dispatch]);

  return (
    <TabsStack.Navigator
      initialRouteName="SearchStack"
      screenOptions={{
        headerShown: false,
      }}>
      <TabsStack.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => (
            <Icon name="search" size={24} color={focused ? '#000' : '#999'} />
          ),
        }}
      />
      <TabsStack.Screen
        name="BookmarksStack"
        component={Bookmarks}
        options={{
          title: 'Bookmarks',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="bookmarks"
              size={24}
              color={focused ? '#000' : '#999'}
            />
          ),
        }}
      />
    </TabsStack.Navigator>
  );
};

export default Tabs;
