import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from './constants';
import { VisibilityFilter } from './interfaces';

export const addTodo = (text: string) => {
    return { type: ADD_TODO, text };
};

export const toggleTodo = (index: number) => {
    return { type: TOGGLE_TODO, index };
};

export const setVisibilityFilter = (filter: VisibilityFilter) => {
    return { type: SET_VISIBILITY_FILTER, filter };
};
