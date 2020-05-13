import styled from 'styled-components';

const Item = styled.div<{ isCompleted: boolean }>`
	display: inline-block;
	width: fit-content;
	text-decoration: ${(props) =>
		props.isCompleted ? 'line-through' : 'none'};
	cursor: pointer;
`;

const ListItem = styled.li`
	user-select: none;
`;

const RemoveButton = styled.button`
	border: none;
	background-color: #fff;
	color: red;
	margin-left: 10px;
	cursor: pointer;
`;

const ToDoList = styled.ul``;

const FilterButton = styled.button`
	margin-left: 5px;
`;

export const Styled = { FilterButton, Item, ListItem, RemoveButton, ToDoList };
