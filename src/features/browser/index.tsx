import { View } from 'react-native';
import React, { useRef } from 'react';
import WebView from 'react-native-webview';
import { ActivityIndicator } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { BrowserRouteProp } from './types';
import styles from './styles';

const Browser = () => {
  const route = useRoute<BrowserRouteProp>();
  const ref = useRef<WebView | null>(null);

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: route.params.link }}
        ref={ref}
        mediaPlaybackRequiresUserAction
        containerStyle={styles.webviewContainer}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator size="large" style={styles.loadingIndicator} />
        )}
      />
    </View>
  );
};

export default Browser;
