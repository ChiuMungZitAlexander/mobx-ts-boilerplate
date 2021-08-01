import { createContext, useContext } from 'react';

import GlobalStore from 'src/stores/global.store';

import { ProviderProps } from 'src/types';

type GlobalStoreProps = {
  isLoggedIn: boolean;
  logIn: () => void;
};

const globalStore = new GlobalStore();

export const GlobalContext = createContext<GlobalStore>({} as GlobalStoreProps);

export const GlobalProvider = ({ children }: ProviderProps): JSX.Element => (
  <GlobalContext.Provider value={globalStore}>{children}</GlobalContext.Provider>
);

export const useGlobalStore = (): GlobalStore => useContext(GlobalContext);
