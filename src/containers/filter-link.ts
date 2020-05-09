import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { setVisibilityFilter } from '../store/actions';
import { Link } from '../components/link';
import { AppState } from '../store/interfaces';
import { FilterLinkProps } from '../components/interfaces';

const mapStateToProps = (
    state: AppState,
    ownProps: FilterLinkProps
) => ({
    isActive: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (
    dispatch: Dispatch<AnyAction>,
    ownProps: FilterLinkProps
) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
