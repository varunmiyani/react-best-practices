import * as actionTypes from './actionTypes';

const initialState = {
	isLogin: false,
	user: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			return {
				...state,
				isLogin: true,
				user: action.user,
			};
		case actionTypes.LOGOUT:
			return {
				...initialState,
			};
		default:
			return state;
	}
};

export default userReducer;
