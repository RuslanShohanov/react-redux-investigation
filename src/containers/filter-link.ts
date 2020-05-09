import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { setVisibilityFilter } from '../store/actions';
import { Link } from '../components/link';
import { AppState } from '../store/interfaces';
import { FilterLinkProps } from '../components/interfaces';

const mapStateToProps = (state: AppState, props: FilterLinkProps) => ({
	isActive: props.filter === state.visibilityFilter,
});

const mapDispatchToProps = (
	dispatch: Dispatch<AnyAction>,
	props: FilterLinkProps
) => ({
	onClick: () => dispatch(setVisibilityFilter(props.filter)),
});

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
