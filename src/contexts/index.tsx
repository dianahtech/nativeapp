import * as React from 'react';

//cria contexto e chama de data
export const DataContext = React.createContext({});
//provider tem 2 propriedades, um estado e uma funcao (itenscheckout e adicionar item)
const Provider = ({children}) => {
  const [itensCheckout, setItensCheckout] = React.useState([]);

  return (
    <DataContext.Provider
      value={{
        itensCheckout,
        adicionarItem: novoItem => {
          let itensCheckoutCopy = [...itensCheckout];

          /* Verifica se tem o item.id na bag */
          let alreadyExists = itensCheckoutCopy.find(
            itensCheckout => itensCheckout.id === novoItem.id,
          );

          if (alreadyExists) {
            alreadyExists.quantidade = alreadyExists.quantidade + 1;
          } else {
            novoItem.quantidade = 1;
            itensCheckoutCopy = [...itensCheckoutCopy, novoItem];
          }
          setItensCheckout(itensCheckoutCopy);
        },
        sendOrder: () => {
          setItensCheckout('');
        },
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default Provider;
