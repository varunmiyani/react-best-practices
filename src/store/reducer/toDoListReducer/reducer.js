import * as actionTypes from './actionTypes';

const initialState = {
	list: [],
};

const toDoListReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD:
			return {
				...state,
				list: [...state.list, ...action.list],
			};
		case actionTypes.REMOVE:
			return {
				...state,
				list: state.list.filter(l => l.id !== action.id),
			};
		default:
			return state;
	}
};

export default toDoListReducer;
