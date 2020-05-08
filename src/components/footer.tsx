import React from 'react';

import { VisibilityFilter } from '../store/interfaces';
import { FilterLink } from '../containers';

export const Footer = () => {
    return (
        <div>
            <span>Show: </span>
            <FilterLink filter={VisibilityFilter.ShowAll}>All</FilterLink>
            <FilterLink filter={VisibilityFilter.ShowActive}>Active</FilterLink>
            <FilterLink filter={VisibilityFilter.ShowCompleted}>
                Completed
            </FilterLink>
        </div>
    );
}; 
