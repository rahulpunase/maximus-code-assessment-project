import {IProduct} from "./products.reducer";
import {IAction} from "../store";
import {ADD_ITEM, CLEAR_CART_AND_ORDER, CREATE_ORDER, REMOVE_ITEM, UPDATE_QUANTITY} from "../actions/cart.action";

export interface ICartItem extends IProduct {
	quantity: number;
}

export interface IOrder {
	items: Array<ICartItem>,
	totalPrice: number,
	status: string
}

export interface ICartReducer {
	cartItems: Array<ICartItem>;
	order: IOrder,
	orders: Array<IOrder>
}

const defaultState = {
	cartItems: [],
	order: {
		items: [],
		totalPrice: 0,
		status: 'PENDING'
	},
	orders: []
}

export const CartReducer = (state: ICartReducer = defaultState, action: IAction<any>) => {
	switch (action.type) {
		case ADD_ITEM: {
			state.cartItems.push(action.payload);
			return {...state};
		}
		case REMOVE_ITEM: {
			const itemToRemoveIndex = state.cartItems.findIndex(item => item.id === action.payload);
			state.cartItems.splice(itemToRemoveIndex, 1);
			return {...state};
		}
		case UPDATE_QUANTITY: {
			const itemToUpdate = state.cartItems.find(item => item.id === action.payload.cartItemId);
			if (itemToUpdate) {
				itemToUpdate.quantity = action.payload.newQuantity;
			}
			return {...state};
		}
		case CREATE_ORDER: {
			return {
				...state,
				order: action.payload
			}
		}
		case CLEAR_CART_AND_ORDER: {
			const order = state.order;
			order.status = 'COMPLETE';
			state.orders.push(order);
			return {
				...state,
				cartItems: [],
				order: {
					items: [],
					totalPrice: 0,
					status: 'PENDING'
				}
			}
		}
		default: {
			return state;
		}
	}
}
