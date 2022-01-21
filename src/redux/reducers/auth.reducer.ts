import {IAction} from "../store";
import {FROM_WHERE, LOGIN_USER, LOGOUT_USER} from "../actions/auth.action";
export interface IAuthReducer {
	userEmail: string,
	isLoggedIn: boolean,
	fromWhere: string
}

const defaultState = {
	userEmail: '',
	isLoggedIn: false,
	fromWhere: '/home'
}

export const AuthReducer = (state: IAuthReducer = defaultState, action: IAction<any>): IAuthReducer => {
	switch (action.type) {
		case LOGIN_USER: {
			return {
				...state,
				...{
					userEmail: action.payload,
					isLoggedIn: true,
				},
			}
		}
		case LOGOUT_USER: {
			console.log(action)
			return {
				...state,
				...{
					userEmail: '',
					isLoggedIn: false,
				},
			}
		}
		case FROM_WHERE: {
			return {
				...state,
				...{
					fromWhere: action.payload,
				},
			}
		}
		default: {
			return state;
		}
	}
}
