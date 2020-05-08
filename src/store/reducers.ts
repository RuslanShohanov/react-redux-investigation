import { combineReducers, AnyAction } from 'redux';

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
            return [...state, { text: action.text, isCompleted: false }];
        case TOGGLE_TODO:
            return state.map((item, index) => {
                if (index === action.index) {
                    return { ...item, isCompleted: !item.isCompleted };
                }
                return item;
            });
        default:
            return state;
    }
};

export const todoApp = combineReducers({ visibilityFilter, todoList });
