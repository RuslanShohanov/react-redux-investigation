import React from 'react';

import { Submit, VisibleToDoList } from './containers';
import { Footer } from './components/footer';

export const App = () => {
	return (
		<>
			<Submit />
			<VisibleToDoList />
			<Footer />
		</>
	);
};
