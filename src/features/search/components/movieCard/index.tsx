import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Props } from './types';
import styles from './styles';

const MovieCard = ({ movie, onPress }: Props) => {
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
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Icon name="bookmark-border" size={24} />
      </View>
    </Pressable>
  );
};

export default MovieCard;
