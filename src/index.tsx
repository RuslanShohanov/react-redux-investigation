import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import * as serviceWorker from './serviceWorker';
import { todoApp } from './store/reducers';

import './index.css';
import { App } from './App';

const initialState = {
    todoList: [{ id: 0, text: '123123123', isCompleted: false }],
};

const store = createStore(
    todoApp,
    //@ts-ignore
    initialState,
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

debugger;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
