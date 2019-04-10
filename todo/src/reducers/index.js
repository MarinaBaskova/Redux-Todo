import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_COMPLETED } from '../actions';

const initialState = {
	todos: [ { id: '123', task: 'test', completed: false }, { id: '1234', task: 'test2', completed: false } ]
	// something: "test"
};

const reducer = (state = initialState, action) => {
	console.log('REDUCER', action, state);
	switch (action.type) {
		case ADD_TODO:
			return {
				// ...state,
				todos: [
					...state.todos,
					{
						id: Date.now(),
						task: action.payload,
						completed: false
					}
				]
			};
		case TOGGLE_TODO:
			return {
				todos: state.todos.map(function(todo) {
					// if (todo.id === action.payload) {
					// 	// {..todo}
					// 	let newTodo = {};
					// 	newTodo.id = todo.id;
					// 	newTodo.task = todo.task;
					// 	newTodo.completed = todo.completed;
					// 	// completed: !todo.completed
					// 	newTodo.completed = !todo.completed;
					// 	return newTodo;
					// } else {
					// 	return todo;
					// }

					return todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo;
				})
			};
		case DELETE_TODO:
			return {
				todos: state.todos.filter((todo) => {
					return todo.id !== action.payload;
				})
			};
		case CLEAR_COMPLETED:
			return {
				todos: state.todos.filter((todo) => {
					return todo.completed === false;
				})
			};
		default:
			return state;
	}
};
export default reducer;
