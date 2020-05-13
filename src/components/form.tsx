import React from 'react';
import { DispatchProp } from 'react-redux';
import { AnyAction } from 'redux';

import { addTodo } from '../store/actions';

export const SubmitToDo = (props: DispatchProp<AnyAction>) => {
    const inputRef = React.createRef<HTMLInputElement>();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!inputRef.current) {
            return;
        }

        if (!inputRef.current.value.trim()) {
            return;
        }

        props.dispatch(addTodo(inputRef.current.value));
        inputRef.current.value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} />
            <button type="submit">Add Todo</button>
        </form>
    );
};
