import * as actionTypes from './actionTypes';

export const add = list => {
	return {
		type: actionTypes.ADD,
		list,
	};
};

export const remove = id => {
	return {
		type: actionTypes.REMOVE,
		id,
	};
};
