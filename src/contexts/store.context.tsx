import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import {Product} from '../@types';
import api from '../services/axios';

interface StoreContextData {
  storeInfo: StoreInfoType;
  selectedCategorie: string;
  storeCategories: string[];
  itensCheckout: Product[];
  allItemsFromStore: Product[];
  istanceOfAllItems: Product[];
  getItemsFromStore: () => void;
  filterInstaceOfAllItemsBySection: () => void;
  addItem: (data: Product) => void;
}

interface StoreInfoType {
  storeName: string;
}

interface StoreProviderProps {
  children: ReactNode;
}

const StoreContext = createContext<StoreContextData>({} as StoreContextData);

export const StoreProvider = ({children}: StoreProviderProps) => {
  const [storeInfo, setStoreInfo] = useState({
    storeName: 'Demood',
  } as StoreInfoType);

  const [selectedCategorie, setSelectedCategorie] = useState('Categorias');
  const [storeCategories, setStoreCategories] = useState([]);
  const [itensCheckout, setItensCheckout] = useState([]);
  const [allItemsFromStore, setAllItemsFromStore] = useState([]);
  const [istanceOfAllItems, setIstanceOfAllItems] = useState([]);

  const getItemsFromStore = useCallback(async () => {
    console.log('Requisitando API do context.');
    try {
      api
        .get('/items/1')
        .then(response => {
          const itemsLists = response.data.data;
          if (itemsLists) {
            setAllItemsFromStore(itemsLists);
            setIstanceOfAllItems(itemsLists);
            const sections = [...new Set(itemsLists.map(item => item.section))];
            if (sections) {
              setStoreCategories(sections);
            }
          } else {
            console.log('Não Havia dados');
          }
        })
        .catch(err => {
          console.log('Falha na requisição GET/ITEMS/1');
        });
    } catch (error) {
      console.log('Erro ao logar todos itens da loja.');
    }

    return;
  }, []);

  const filterInstaceOfAllItemsBySection = useCallback(
    async selectedSection => {
      try {
        const result = allItemsFromStore.filter(
          item => item.section === selectedSection,
        );
        setIstanceOfAllItems(result);
      } catch (error) {
        console.log(
          'Sei foi possível realizar o filtro por categoria esclhido.',
        );
      }
    },
    [],
  );

  const addItem = useCallback(async (newItem: Product) => {
    try {
      let itensCheckoutCopy = [...itensCheckout];
      let alreadyExists = itensCheckoutCopy.find(
        itensCheckout => itensCheckout.id === newItem.id,
      );
      if (alreadyExists) {
        alreadyExists.qty = alreadyExists.qty + 1;
      } else {
        newItem.qty = 1;
        itensCheckoutCopy = [...itensCheckoutCopy, newItem];
      }
      setItensCheckout(itensCheckoutCopy);
    } catch (error) {
      console.log('Erro ao adicionar o item no carrinho');
    }
    return;
  }, []);

  return (
    <StoreContext.Provider
      value={{
        storeInfo,
        selectedCategorie,
        storeCategories,
        itensCheckout,
        allItemsFromStore,
        istanceOfAllItems,
        getItemsFromStore,
        filterInstaceOfAllItemsBySection,
        addItem,
      }}>
      {children}
    </StoreContext.Provider>
  );
};

export function useStore(): StoreContextData {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within an StoreProvider');
  }
  return context;
}
