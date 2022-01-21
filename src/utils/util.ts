import {ICartItem} from "../redux/reducers/cart.reducers";

export const Utils = {
	getDiscountedPrice: (cartItems: Array<ICartItem>): string => {
		return cartItems.map(cartItem => {
			return (cartItem.price - (cartItem.price * cartItem.discount)/ 100) * cartItem.quantity;
		}).reduce((price, acc) => price + acc, 0).toFixed(2);
	}
}
