import * as React from 'react';
import { Provider } from 'react-redux';
import SpotCheckScreen from './Spotcheck';
import { store } from 'gokulkrishna-react-native-sdk';

export default function App() {
  return (
    <Provider store={store}>
      <SpotCheckScreen />
    </Provider>
  );
}
