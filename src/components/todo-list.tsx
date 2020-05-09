import React from 'react';

import { ToDoListProps } from './interfaces';
import { ToDoItem } from './todo-item';

import { Styled } from './styled';

export const ToDoList = (props: ToDoListProps) => {
	return (
		<Styled.ToDoList>
			{props.todos &&
				props.todos.map((item) => (
					<Styled.ListItem key={item.id}>
						<ToDoItem
							id={item.id}
							isCompleted={item.isCompleted}
							text={item.text}
							onClick={() => props.toggleTodo(item.id)}
						/>
						<Styled.RemoveButton
							onClick={() => props.removeTodo(item.id)}
						>
							x
						</Styled.RemoveButton>
					</Styled.ListItem>
				))}
		</Styled.ToDoList>
	);
};
