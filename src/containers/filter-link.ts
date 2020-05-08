import { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { setVisibilityFilter } from '../store/actions';
import { Link } from '../components/link';
import { AppState, VisibilityFilter } from '../store/interfaces';

const mapStateToProps = (
    state: AppState,
    ownProps: PropsWithChildren<{ filter: VisibilityFilter }>
) => ({
    isActive: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (
    dispatch: Dispatch<AnyAction>,
    ownProps: PropsWithChildren<{ filter: VisibilityFilter }>
) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
