import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Props } from './types';
import styles from './styles';
import { useAppDispatch, useAppSelector } from '../../../../redux';
import { addBookmark, removeBookmark } from '../../../bookmarks/slice/thunk';

const MovieCard = ({ movie, onPress }: Props) => {
  const bookmarks = useAppSelector((state) => state.bookmarks.bookmarks);
  const settingBookmarkStatus = useAppSelector(
    (state) => state.bookmarks.settingBookmarkStatus,
  );
  const dispatch = useAppDispatch();

  const isBookmarked = bookmarks.find((i) => i.title === movie.title);

  return (
    <Pressable onPress={onPress} style={styles.container}>
      {!!movie.image && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: movie.image.src }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
      )}
      <Text style={styles.headline}>{movie.headline}</Text>
      <Text style={styles.summary}>{movie.summary}</Text>
      <View style={styles.bookmarkRow}>
        <Icon
          name={isBookmarked ? 'bookmark' : 'bookmark-border'}
          size={24}
          onPress={() => {
            if (settingBookmarkStatus === 'loading') {
              return;
            }
            if (isBookmarked) {
              dispatch(removeBookmark(movie));
            } else {
              dispatch(addBookmark(movie));
            }
          }}
        />
      </View>
    </Pressable>
  );
};

export default MovieCard;
