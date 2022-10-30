import React from 'react';
import {StoreProvider} from './src/contexts/store.context';
import {UserProvider} from './src/contexts/user.context';
import Routes from './src/navigation/routes';

const App = () => {
  return (
    <>
      <UserProvider>
        <StoreProvider>
          <Routes />
        </StoreProvider>
      </UserProvider>
    </>
  );
};

export default App;
