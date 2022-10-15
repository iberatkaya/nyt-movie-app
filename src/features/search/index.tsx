import { FlatList, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useSearchForMovieQuery, useGetCriticsPicksQuery } from '../../api';
import { Movie } from '../../types';
import styles from './styles';
import MovieCard from './components/movieCard';
import { SearchNavigationProp } from './types';

const Search = () => {
  const navigation = useNavigation<SearchNavigationProp>();
  const [searchVal, setSearchVal] = useState('');
  const [sumbittedVal, setSumbittedVal] = useState('');

  const { isFetching, data } = useSearchForMovieQuery(sumbittedVal);
  const { data: picksData, isFetching: isFetchingPicks } =
    useGetCriticsPicksQuery('critics');

  return (
    <SafeAreaView>
      <Searchbar
        placeholder="Search"
        value={searchVal}
        onChangeText={setSearchVal}
        onEndEditing={() => {
          setSumbittedVal(searchVal);
        }}
        style={styles.searchbar}
      />
      {isFetching || isFetchingPicks ? (
        <ActivityIndicator size="large" style={styles.loadingIndicator} />
      ) : (
        <FlatList<Movie>
          data={data || picksData}
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
      )}
    </SafeAreaView>
  );
};

export default Search;
