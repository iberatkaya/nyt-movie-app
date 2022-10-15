import React from 'react';
import { Provider } from 'react-redux';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import Root from './navigation';
import { store } from './redux';

const App = () => {
  const theme: Partial<Theme['colors']> = {
    primary: '#000',
    text: '#000',
    background: '#fff',
  };

  return (
    <Provider store={store}>
      <PaperProvider
        theme={{
          ...PaperDefaultTheme,
          colors: {
            ...PaperDefaultTheme.colors,
            ...theme,
          },
        }}>
        <NavigationContainer
          theme={{
            colors: {
              ...DefaultTheme.colors,
              ...theme,
            },
            dark: DefaultTheme.dark,
          }}>
          <Root />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
