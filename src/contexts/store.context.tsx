import * as React from 'react';
import {STORE_NAME} from '../identity/index';

//cria contexto e chama de data
export const StoreContext = React.createContext({});
//provider tem 2 propriedades, um estado e uma funcao (itenscheckout e adicionar item)
const StoreProvider = ({children}) => {
  const storeInfo = {
    storeName: STORE_NAME,
  };

  const [selectedCategorie, setSelectedCategorie] =
    React.useState('Categorias');

  return (
    <StoreContext.Provider
      value={{
        storeInfo,
        selectedCategorie,
        setSelectedCategorie,
      }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

/*
import {createContext} from 'react';

const DataContext = createContext({ });

export default DataContext;



*/
