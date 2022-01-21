import {IAction} from "../store";
import {ICartItem, IOrder} from "../reducers/cart.reducers";

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const CREATE_ORDER = 'CREATE_ORDER';
export const CLEAR_CART_AND_ORDER = 'CLEAR_CART_AND_ORDER';

export const addItemToCart = (cartItem: ICartItem): IAction<any> => ({
	type: ADD_ITEM,
	payload: cartItem
});

export const removeItemFromCart = (cartItemId: string): IAction<any> => ({
	type: REMOVE_ITEM,
	payload: cartItemId
});

export const updateItemQuantity = (cartItemId: string, newQuantity: number): IAction<any> => ({
	type: UPDATE_QUANTITY,
	payload: {
		cartItemId: cartItemId,
		newQuantity: newQuantity
	}
});

export const createOrder = (cartItems: Array<ICartItem>, price: number): IAction<IOrder> => ({
	type: CREATE_ORDER,
	payload: {
		items: cartItems,
		totalPrice: price,
		status: 'PENDING'
	}
});

export const clearCart = (): IAction<any> => ({
	type: CLEAR_CART_AND_ORDER,
	payload: null
});
