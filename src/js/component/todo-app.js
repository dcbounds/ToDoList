import React from "react";

import TodoForm from "./todoform.js";
import Todo from "./todo.js";

export default class TodoList extends React.Component {
	state = {
		todos: []
	};

	addTodo = todo => {
		this.setState({
			todos: [todo, ...this.state.todos]
		});
	};

	toggleComplete = id => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						id: todo.id,
						text: todo.text,
						complete: !todo.complete
					};
				} else {
					return todo;
				}
			})
		});
	};

	render() {
		return (
			<div>
				<TodoForm onSubmit={this.addTodo} />
				{this.state.todos.map(todo => (
					<Todo
						key={todo.id}
						toggleComplete={() => this.toggleComplete(todo.id)}
						todo={todo}
					/>
				))}
			</div>
		);
	}
}
