import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';

import { ToDoItem, VisibilityFilter, AppState } from '../store/interfaces';
import { toggleTodo } from '../store/actions';
import { ToDoList } from '../components/todo-list';

const getVisibleTodos = (todos: ToDoItem[], filter: VisibilityFilter) => {
    switch (filter) {
        case VisibilityFilter.ShowAll:
            return todos;
        case VisibilityFilter.ShowCompleted:
            return todos.filter((t) => t.isCompleted);
        case VisibilityFilter.ShowActive:
            return todos.filter((t) => !t.isCompleted);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

const mapStateToProps = (state: AppState) => ({
    todos: getVisibleTodos(state.todoList, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});

export const VisibleToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoList);
