import React from 'react';
import Provider from './src/contexts';
import StoreProvider from './src/contexts/store.context';
import {UserProvider} from './src/contexts/user.context';

import Routes from './src/navigation/routes';

const App = () => {
  return (
    <StoreProvider>
      <UserProvider>
        <Provider>
          <Routes />
        </Provider>
      </UserProvider>
    </StoreProvider>
  );
};

export default App;
