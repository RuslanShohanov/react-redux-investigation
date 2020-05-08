import React from 'react';

import { ToDoListProps } from './interfaces';
import { ToDoItem } from './todo-item';

import { Styled } from './styled';

export const ToDoList = (props: ToDoListProps) => {
    debugger;
    return (
        <Styled.ToDoList>
            {props.todos && props.todos.map((item) => (
                <ToDoItem
                    key={item.id}
                    isCompleted={item.isCompleted}
                    text={item.text}
                    onClick={() => props.toggleTodo(item.id)}
                />
            ))}
        </Styled.ToDoList>
    );
};
