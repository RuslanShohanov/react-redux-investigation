import { ToDoItem, VisibilityFilter } from '../store/interfaces';

export interface ToDoItemProps {
    isCompleted: boolean;
    text: string;
    onClick: () => void;
}

export interface ToDoListProps {
    items: ToDoItem[];
    toggleItem: (id: number) => void;
}

export interface FilterLinkProps {
    filter: VisibilityFilter;
    isActive: boolean;
    onClick: () => void;
}
