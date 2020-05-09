import { PropsWithChildren } from 'react';

import { ToDoItem, VisibilityFilter } from '../store/interfaces';

export interface ToDoItemProps {
	id: string;
	isCompleted: boolean;
	text: string;
	onClick: () => void;
}

export interface ToDoListProps {
	todos: ToDoItem[];
	toggleTodo: (id: string) => void;
	removeTodo: (id: string) => void;
}

export interface LinkProps {
	isActive: boolean;
	onClick: () => void;
}

export type FilterLinkProps = PropsWithChildren<{ filter: VisibilityFilter }>;
