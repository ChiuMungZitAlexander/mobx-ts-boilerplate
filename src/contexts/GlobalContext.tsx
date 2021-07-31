import { createContext, useContext } from 'react';

import GlobalStore from 'src/stores/global.store';

import { ProviderProps } from 'src/types';

const globalStore = new GlobalStore();

export const GlobalContext = createContext<GlobalStore>({
  isLoggedIn: false,
  setIsLoggedIn: (newIsLoggedIn) => newIsLoggedIn,
});

export const GlobalProvider = ({ children }: ProviderProps): JSX.Element => (
  <GlobalContext.Provider value={globalStore}>{children}</GlobalContext.Provider>
);

export const useGlobalStore = (): GlobalStore => useContext(GlobalContext);
