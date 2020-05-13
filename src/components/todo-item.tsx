import React from "react";

import { ToDoItemProps } from "./interfaces";

import { Styled } from "./styled";

export const ToDoItem = (props: ToDoItemProps) => {
	return (
		<Styled.Item onClick={props.onClick} isCompleted={props.isCompleted}>
			{props.text}
		</Styled.Item>
	);
};
