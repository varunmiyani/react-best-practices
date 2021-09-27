import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import userReducer from './userReducer';
import toDoListReducer from './toDoListReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user'], // write list of reducers we like to presist or store data even when user does hard refresh
};

const rootReducer = combineReducers({
	counter: counterReducer,
	user: userReducer,
	toDoList: toDoListReducer,
});

export default persistReducer(persistConfig, rootReducer);
