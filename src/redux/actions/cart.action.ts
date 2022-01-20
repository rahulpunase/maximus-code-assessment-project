import {IAction} from "../store";
import {ICartItem} from "../reducers/cart.reducers";

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export const addItemToCart = (cartItem: ICartItem): IAction<any> => ({
	type: ADD_ITEM,
	payload: cartItem
});

export const removeItemFromCart = (cartItemId: string): IAction<any> => ({
	type: REMOVE_ITEM,
	payload: cartItemId
});

export const updateItemQuantity = (cartItem: ICartItem, newQuantity: number): IAction<any> => ({
	type: UPDATE_QUANTITY,
	payload: {
		cartItem: cartItem,
		newQuantity: newQuantity
	}
});
