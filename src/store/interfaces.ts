export enum VisibilityFilter {
    ShowAll = 'show-all',
    ShowCompleted = 'show-completed',
    ShowActive = 'show-active',
}

export interface ToDoItem {
    id: string;
    text: string;
    isCompleted: boolean;
}

export interface AppState {
    visibilityFilter: VisibilityFilter;
    todoList: ToDoItem[];
}

