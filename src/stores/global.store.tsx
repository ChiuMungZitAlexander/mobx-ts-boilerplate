import { makeAutoObservable, action, runInAction } from 'mobx';

import { logIn as _logIn } from 'src/services/login.service';

export default class GlobalStore {
  isLoggedIn = false;

  constructor() {
    makeAutoObservable(this, {
      logIn: action.bound,
    });
  }

  logIn({ name }: { name: string }): void {
    runInAction(async () => {
      const res = await _logIn({ name });

      if (res) {
        this.isLoggedIn = true;
      }
    });
  }
}
