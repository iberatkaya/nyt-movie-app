import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Movie } from '../../types';
import { BookmarkNavigationProp } from './types';
import MovieCard from '../search/components/movieCard';
import { useAppSelector } from '../../redux';
import styles from './styles';

const Bookmarks = () => {
  const bookmarks = useAppSelector((state) => state.bookmarks.bookmarks);
  const navigation = useNavigation<BookmarkNavigationProp>();

  return (
    <View style={styles.container}>
      <FlatList<Movie>
        data={bookmarks}
        style={styles.list}
        renderItem={({ item }) => {
          return (
            <MovieCard
              movie={item}
              onPress={() => {
                navigation.navigate('Browser', {
                  link: item.link,
                });
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Bookmarks;
