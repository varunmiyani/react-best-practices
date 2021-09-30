import * as actionTypes from './actionTypes';

const initialState = {
	count: 0,
};

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD:
			return {
				...state,
				count: state.count + 1,
			};
		case actionTypes.REMOVE:
			return {
				...state,
				count: state.count - 1,
			};
		default:
			return state;
	}
};

export default counterReducer;
