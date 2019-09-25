// Action types

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

//Action creator . named export
export const addTodo = (text) => {
	console.log(text);
	return {
		//action
		type: ADD_TODO,
		payload: text
	};
};

export const deleteTodo = (id) => {
	console.log('action', id);
	return {
		type: DELETE_TODO,
		payload: id
	};
};

export const toggleTodo = (id) => {
	return {
		type: TOGGLE_TODO,
		payload: id
	};
};

export const clearCompleted = () => {
	return {
		type: CLEAR_COMPLETED
	};
};
