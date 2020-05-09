import { ToDoItem, VisibilityFilter } from "../store/interfaces";
import { PropsWithChildren } from "react";

export interface ToDoItemProps {
	isCompleted: boolean;
	text: string;
	onClick: () => void;
}

export interface ToDoListProps {
	todos: ToDoItem[];
	toggleTodo: (id: string) => void;
}

export interface LinkProps {
	isActive: boolean;
	onClick: () => void;
}

export type FilterLinkProps = PropsWithChildren<{ filter: VisibilityFilter }>;
