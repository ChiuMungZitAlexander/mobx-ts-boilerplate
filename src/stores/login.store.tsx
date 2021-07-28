import { makeObservable, observable } from 'mobx';

export default class LoginStore {
  isCaptchaNeeded = false;

  constructor() {
    makeObservable(this, {
      isCaptchaNeeded: observable,
    });
  }

  setCaptchaNeeded(newCaptchaNeeded: boolean) {
    this.isCaptchaNeeded = newCaptchaNeeded;
  }
}
