import React from 'react';

import { ToDo, VisibleToDoList } from './containers';
import { Footer } from './components/footer';

export const App = () => {
    return (
        <>
            <ToDo />
            //@ts-ignore
            <VisibleToDoList />
            <Footer />
        </>
    );
};
