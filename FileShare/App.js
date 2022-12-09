import * as React from 'react';

import {View} from 'react-native';

import Root from './Root';
import AuthProvider from './AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <Root/>
    </AuthProvider>
  );
};
export default App;
