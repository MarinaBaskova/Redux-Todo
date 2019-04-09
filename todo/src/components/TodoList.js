import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../actions';

class TodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			newTodo: ''
		};
	}

	handleChanges = (e) => {
		this.setState({ newTodo: e.target.value });
	};
	addNewTodo = (e) => {
		e.preventDefault();

		this.props.addTodo(this.state.newTodo);
		this.setState({ newTodo: '' });
	};

	render() {
		return (
			<div>
				{this.props.todosOnProps.map((todo) => (
					<div key={todo.id}>
						<h4
							onClick={() => this.props.toggleTodo(todo.id)}
							style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
						>
							{todo.task}
						</h4>
						<button onClick={() => this.props.deleteTodo(todo.id)}>Delete</button>
					</div>
				))}
				<form onSubmit={this.addNewTodo}>
					{/* form.onSubmit(e); addNewTodo(e)  let a = myFunc let b = a ; b() */}
					<input
						type="text"
						name="newTodo"
						value={this.state.newTodo}
						onChange={this.handleChanges}
						placeholder="Add new todo"
						required
					/>
					<button>Add ToDo</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todosOnProps: state.todos
	};
};

export default connect(mapStateToProps, { addTodo, deleteTodo, toggleTodo })(TodoList);
