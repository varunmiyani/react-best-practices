import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';
// import { combineReducers } from 'redux';
import * as actionTypes from 'store/actionTypes';

const initialState = {
	isLogin: false,
	user: null,
};

const reducer = (state = initialState, action) => {
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

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user'], // write list of reducers we like to presist or store data even when user does hard refresh
};

// const rootReducer = combineReducers({
// 	user: userReducer,
// 	toDoList: dataReducer,
// });

export default persistReducer(persistConfig, reducer);
