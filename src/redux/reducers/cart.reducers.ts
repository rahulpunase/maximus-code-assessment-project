import {IProduct} from "./products.reducer";
import {IAction} from "../store";
import {ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY} from "../actions/cart.action";

export interface ICartItem extends IProduct {
	quantity: number;
}

export interface ICartReducer {
	cartItems: Array<ICartItem>;
}

const defaultState = {
	cartItems: []
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
			const itemToUpdate = state.cartItems.find(item => item.id === action.payload.cartItem.id);
			if (itemToUpdate) {
				itemToUpdate.quantity = action.payload.newQuantity;
			}
			return {...state};
		}
		default: {
			return state;
		}
	}
}
