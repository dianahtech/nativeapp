import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback, 
} from 'react';
import {Product} from '../@types';
import api from '../services/axios';

interface StoreContextData {
  itemsBySection:any;
  storeInfo: StoreInfoType;
  selectedCategorie: string;
  storeCategories: string[];
  itensCheckout: Product[];
  allItemsFromStore: Product[];
  istanceOfAllItems: Product[];
  getItemsFromStore: () => void;
  filterInstanceOfAllItemsBySection: (data: FilterItemsBySectionDTO) => void;
  addItem: (data: Product) => void;
}

interface FilterItemsBySectionDTO {
  selectedSection: string;
}


interface StoreInfoType {
  storeName: string;
}

interface ItensCheckoutType extends Product {
  qty: number;
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
  const [itensCheckout, setItensCheckout] = useState<ItensCheckoutType[]>([]);
  const [allItemsFromStore, setAllItemsFromStore] = useState<Product[]>([]);
  const [istanceOfAllItems, setIstanceOfAllItems] = useState<Product[]>([]);
  const [itemsBySection, setItemsBySection] = useState([]);

  const getItemsFromStore = useCallback(async () => {
    console.log('Requisitando API do context.');   
    console.log(`Valor do itenscheckout${JSON.stringify(itensCheckout)}`);   
    try {
      api
        .get('/api/items/1')
        .then(response => {
          const itemsLists = response.data.data;
          if (itemsLists) {
            setAllItemsFromStore(itemsLists);
            setIstanceOfAllItems(itemsLists);
            const sections =  [...new Set(itemsLists.map(item => item.section))];
            if (sections) {
              console.log(`Este é o valor do sections:${sections}`)
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
    }finally{
      console.log(`Entrou no finally`)
      if(storeCategories && allItemsFromStore){
        console.log(`Este é o valor do STORE CATEGORIES:${storeCategories}`)    

        const itemsOrdenedBysection: Array<{    
          name?: string;
          id?: string;
          data?: readonly {
            name?: string;
            id?: string;
            value?: number;
            durl?: string;
          }[];
        }> = [];   

        storeCategories.map(async (section)=>{   
          const existItemsForSection = allItemsFromStore.filter((item) => item.section === section)            
          if (existItemsForSection){
            itemsOrdenedBysection.push({
              name:section,
              id:`${section}1`,
              data:allItemsFromStore
            })
          }
        })
        setItemsBySection(itemsOrdenedBysection)
      }
    }
    return;
  }, []);

  const filterInstanceOfAllItemsBySection = useCallback(
    async ({selectedSection}:FilterItemsBySectionDTO) => {
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
      let itensCheckoutCopy = itensCheckout      
      let alreadyExists = itensCheckoutCopy.find(
        itensCheckout => itensCheckout.id === newItem.id,
      );
      if (alreadyExists) {        
        alreadyExists.qty = alreadyExists.qty + 1;
        itensCheckoutCopy = [...itensCheckout, alreadyExists];
        return setItensCheckout(itensCheckoutCopy);
      } else {
        newItem.qty = 1;
        itensCheckoutCopy.push(newItem)
        return setItensCheckout(itensCheckoutCopy);
      } 
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
        filterInstanceOfAllItemsBySection,
        addItem,
        itemsBySection
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
