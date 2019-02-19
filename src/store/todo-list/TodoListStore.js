import { observable, action, computed } from 'mobx';

class TodoListStore {
	@observable
	todos = [
		{
			title: 'todo标题',
			done: false
		},
		{
			title: '已经完成 todo 的标题',
			done: true
		}
	];
	@observable
	author = 'hands'

	@action
	changeTodoTitle({ index, title, done }) {
		this.todos[index].title = title;
		this.todos[index].done = done;
	}

	@action
	changeAuthor({ name }) {
		this.author = name;
	}


	@action
	isShow(index) {
		this.todos[index].done = false;
	}

	@computed
	get unfinishedTodos() {
		return this.todos.filter((todo) => todo.done);
	}
}

export default new TodoListStore();
