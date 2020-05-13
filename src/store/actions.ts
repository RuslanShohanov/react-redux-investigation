import {
	ADD_TODO,
	REMOVE_TODO,
	SET_VISIBILITY_FILTER,
	TOGGLE_TODO,
} from './constants';
import { VisibilityFilter } from './interfaces';

export const addTodo = (text: string) => {
	return { type: ADD_TODO, text };
};

export const toggleTodo = (id: string) => {
	return { type: TOGGLE_TODO, id };
};

export const removeTodo = (id: string) => {
	return { type: REMOVE_TODO, id };
};

export const setVisibilityFilter = (filter: VisibilityFilter) => {
	return { type: SET_VISIBILITY_FILTER, filter };
};
