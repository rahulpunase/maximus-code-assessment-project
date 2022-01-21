import {ICartItem} from "../redux/reducers/cart.reducers";

export const Utils = {
	getDiscountedPrice: (cartItems: Array<ICartItem>): string => {
		return cartItems.map(cartItem => {
			return (cartItem.price - (cartItem.price * cartItem.discount)/ 100) * cartItem.quantity;
		}).reduce((price, acc) => price + acc, 0).toFixed(2);
	},
	calculateItemQty: (cartItems: Array<ICartItem>): number => {
		return cartItems.map(item => item.quantity).reduce((qua, acc) => qua + acc, 0);
	},
	getBundlePriceDiscount: (cartItem: ICartItem): string => {
		return ((cartItem.price - (cartItem.price * cartItem.discount)/ 100) * cartItem.quantity).toFixed(2);
	},

	getItemPriceDiscount: (cartItem: ICartItem): string => {
		return ((cartItem.price - (cartItem.price * cartItem.discount)/ 100)).toFixed(2);
	},

	getCartCount: (cartItems: Array<ICartItem>): number => {
		return cartItems.map(item => item.quantity).reduce((qua, acc) => qua + acc, 0);
	},
}
