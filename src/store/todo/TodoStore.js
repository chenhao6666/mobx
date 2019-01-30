// 这里引入的是 mobx
import {observable} from 'mobx';

class TodoStore {
  @observable todos = [{
    title: "todo标题",
    done: false,
  }];
}

const todoStore = new TodoStore();
export default todoStore;
