import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { v4 } from 'node-uuid';

import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { todoApp } from './store/reducers';

import './index.css';

const initialState = {
	todoList: [
		{ id: v4(), text: 'Todo item 1', isCompleted: false },
		{ id: v4(), text: 'Todo item 2', isCompleted: false },
		{ id: v4(), text: 'Todo item 3', isCompleted: false },
	],
};

const store = createStore(
	todoApp,
	//@ts-ignore
	initialState,
	//@ts-ignore
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
