import React from 'react';
import './cart.scss';
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../redux/store";
import {NavLink, useLocation} from 'react-router-dom';
import {Utils} from "../../utils/util";
import {useHistory} from 'react-router-dom';
import {setFromWhere} from "../../redux/actions/auth.action";
import CartItem from "../../components/cart-item/cart-item";
import {createOrder} from "../../redux/actions/cart.action";

const Cart = () => {
	const store = useSelector((store: IStore) => store);
	const dispatch = useDispatch();
	const history = useHistory();

	const cartItems = store.cartReducer.cartItems;

	const getCartCount = Utils.calculateItemQty(store.cartReducer.cartItems);

	const getDiscountedPrice = Utils.getDiscountedPrice(cartItems);

	const navigateToCheckout = () => {
		dispatch(createOrder(cartItems, Number(getDiscountedPrice)));
		if (store.authReducer.isLoggedIn) {
			history.push("/checkout");
		} else {
			dispatch(setFromWhere('/checkout'));
			history.push('/login');
		}
	}

	return (
		<div className='cart-page container'>
			<div className="row">
				<div className="cart-item-holder col-md-8">
					<h2 className="heading">Cart Items</h2>
					{!cartItems.length && <div className="no-items-in-cart alert alert-warning">
						You have no Items in cart. Please navigate to <NavLink to={'/home'}>home</NavLink> to add
						items.
					</div>}
					<ul className="list-group">
						{
							cartItems.map(item => (
								<li key={item.id} className="list-group-item">
									<CartItem {...item} showAction={true}/>
								</li>
							))
						}
					</ul>
				</div>
				<div className="cart-summary col-md-3">
					<h2 className="heading">Cart summary</h2>
					<ul className="list-group">
						<li className="list-group-item">
							<div className="left">Total Items:</div>
							<div className="right">{getCartCount}</div>
						</li>
						<li className="list-group-item">
							<div className="left">Discounted Price:</div>
							<div className="right"><i
								className='fa fa-rupee-sign'/>{getDiscountedPrice}</div>
						</li>
						<li className="list-group-item">
							<div className="left">Total Quantity:</div>
							<div className="right">{cartItems.length}</div>
						</li>
						<li className="list-group-item">
							{!!cartItems.length &&
							<button onClick={() => navigateToCheckout()} className="btn btn-primary">Checkout</button>}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Cart;
