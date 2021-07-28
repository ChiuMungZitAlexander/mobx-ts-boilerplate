import { makeAutoObservable, action, runInAction } from 'mobx';

export default class GlobalStore {
  isLoggedIn = false;

  constructor() {
    makeAutoObservable(this, {
      setIsLoggedIn: action.bound,
    });
  }

  async setIsLoggedIn(newIsLoggedIn: boolean) {
    runInAction(() => {
      this.isLoggedIn = newIsLoggedIn;
    });
  }
}
