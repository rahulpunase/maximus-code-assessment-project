import {IAction} from "../store";

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FROM_WHERE = 'FROM_WHERE';

export const loginUser = (userEmail: string): IAction<any> => ({
	type: LOGIN_USER,
	payload: userEmail
});

export const logUserOut = (): IAction<any> => ({
	type: LOGOUT_USER,
	payload: null
});

export const setFromWhere = (path: string): IAction<any> => ({
	type: FROM_WHERE,
	payload: path
});
