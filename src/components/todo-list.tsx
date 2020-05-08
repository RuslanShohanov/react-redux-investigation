import React from 'react';

import { ToDoListProps } from './interfaces';
import { ToDoItem } from './todo-item';

import { Styled } from './styled';

export const ToDoList = (props: ToDoListProps) => {
    return (
        <Styled.ToDoList>
            {props.items && props.items.map((item) => (
                <ToDoItem
                    key={item.id}
                    isCompleted={item.isCompleted}
                    text={item.text}
                    onClick={() => props.toggleItem(item.id)}
                />
            ))}
        </Styled.ToDoList>
    );
};
