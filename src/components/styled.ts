import styled from 'styled-components';

const ToDoItem = styled.li<{ isCompleted: boolean }>`
    text-decoration: ${(props) =>
        props.isCompleted ? 'line-through' : 'none'};
    cursor: pointer;
`;

const ToDoList = styled.ul``;

const AddButton = styled.button``;

export const Styled = { AddButton, ToDoItem, ToDoList };
