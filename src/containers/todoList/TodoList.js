import React, { Component } from 'react';
import {observer} from 'mobx-react';
import TodoListStore from '../../store/todo-list';

@observer
class TodoList extends Component {
	componentDidMount() {
	}

	render() {
		return (
			<div>
				<h3>{TodoListStore.author}</h3>
				<ul>
					{TodoListStore.unfinishedTodos.map((todo, index) => (
						<li
							key={`list-${index}`}
							onClick={() => {
								TodoListStore.isShow(index);
							}}
						>
							{todo.title}
						</li>
					))}
				</ul>
				<div>
					<input
						type="button"
						onClick={() => {
							TodoListStore.changeTodoTitle({
								index: 0,
								title: '修改后的todo标题',
								done: !TodoListStore.todos[0].done
							});
						}}
						value="点击我"
					/>
				</div>
			</div>
		);
	}
}

export default TodoList;