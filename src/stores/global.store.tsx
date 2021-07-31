// @ts-check
import { makeAutoObservable, action, runInAction } from 'mobx';

export default class GlobalStore {
  isLoggedIn = false;

  constructor() {
    makeAutoObservable(this, {
      setIsLoggedIn: action.bound,
    });
  }

  setIsLoggedIn(newIsLoggedIn: boolean): void {
    runInAction(() => {
      this.isLoggedIn = newIsLoggedIn;
    });
  }
}
