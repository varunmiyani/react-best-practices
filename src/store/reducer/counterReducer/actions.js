import * as actionTypes from './actionTypes';

export const add = user => {
	return {
		type: actionTypes.ADD,
		user,
	};
};

export const remove = () => {
	return {
		type: actionTypes.REMOVE,
	};
};
