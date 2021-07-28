import { createContext, useContext } from 'react';

import GlobalStore from 'src/stores/global.store';

import { ProviderProps } from 'src/types';

const globalStore = new GlobalStore();

export const GlobalContext = createContext<GlobalStore>(null);

export const GlobalProvider = ({ children }: ProviderProps) => (
  <GlobalContext.Provider value={globalStore}>{children}</GlobalContext.Provider>
);

export const useGlobalStore = () => useContext(GlobalContext);
