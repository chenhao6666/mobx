import { observable, action, computed } from 'mobx';

class VM {
  @observable firstName = '';
  @observable lastName = '';
 
  @computed get fullName() {
    const { firstName, lastName } = this;
    if (!firstName && !lastName) {
      return 'Please input your name!'
    } else {
      return firstName + ' ' + lastName;
    }
  };
 
  @action.bound
  setValue(key, event) {
    this[key] = event.target.value;
  }
  @action.bound
  handleReset() {
    this.firstName = '';
    this.lastName = '';
  }
}

export default new VM();
