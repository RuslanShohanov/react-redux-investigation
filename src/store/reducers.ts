import { combineReducers, AnyAction } from 'redux';
import { v4 } from 'node-uuid';

import { VisibilityFilter, ToDoItem } from './interfaces';
import {
	ADD_TODO,
	REMOVE_TODO,
	SET_VISIBILITY_FILTER,
	TOGGLE_TODO,
} from './constants';

const visibilityFilter = (
	state: VisibilityFilter = VisibilityFilter.ShowAll,
	action: AnyAction
) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
};

const todoList = (state: ToDoItem[] = [], action: AnyAction) => {
	switch (action.type) {
		case ADD_TODO: {
			return [
				...state,
				{ id: v4(), text: action.text, isCompleted: false },
			];
		}
		case TOGGLE_TODO: {
			return state.map((todoItem) => {
				if (todoItem.id === action.id) {
					return { ...todoItem, isCompleted: !todoItem.isCompleted };
				}
				return todoItem;
			});
		}
		case REMOVE_TODO: {
			const itemToRemove = state.find((item) => item.id === action.id);

			return itemToRemove
				? state.filter((item) => item.id !== itemToRemove.id)
				: state;
		}
		default:
			return state;
	}
};

export const todoApp = combineReducers({ visibilityFilter, todoList });
