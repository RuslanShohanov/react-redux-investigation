import { combineReducers, AnyAction } from 'redux';
import { v4 } from "node-uuid";

import { VisibilityFilter, ToDoItem } from './interfaces';
import { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from './constants';

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
        case ADD_TODO:
            return [...state, { id: v4(), text: action.text, isCompleted: false }];
        case TOGGLE_TODO: {
            return state.map(todoItem => {
                if (todoItem.id === action.id) {
                    return { ...todoItem, isCompleted: !todoItem.isCompleted };
                }
                return todoItem;
            });
        }
        default:
            return state;
    }
};

export const todoApp = combineReducers({ visibilityFilter, todoList });
