import React from 'react';
import './cart.scss';
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../redux/store";
import {removeItemFromCart} from "../../redux/actions/cart.action";
import {NavLink} from 'react-router-dom';
import {ICartItem} from "../../redux/reducers/cart.reducers";
import {Utils} from "../../utils/util";

const Cart = () => {
	const store = useSelector((store: IStore) => store);
	const dispatch = useDispatch();
	const cartItems = store.cartReducer.cartItems;
	const quantityAvailable = Array.from(Array(10).keys());
	const setRemoveItemFromCart = (id: string) => {
		dispatch(removeItemFromCart(id));
	}
	const calculateDiscountedPrice = (item: ICartItem) => {
		return (item.price - (item.price * item.discount) / 100).toFixed(2);
	}

	const getCartCount = store.cartReducer.cartItems.map(item => item.quantity).reduce((qua, acc) => qua + acc, 0);
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
									<div className="cart-item">
										<div className="img">
											<img src={`http://placehold.it/238x238&text=${item.name}`}
											     className="card-img-top" alt="..."/>
										</div>
										<div className="details">
											<div className="all-details">
												<div className="name">{item.name}</div>
												<div className="price">
													<span className='actual'><i className='fa fa-rupee-sign'/>{item.price.toFixed(2)}</span>
													<span className='discounted'><i className='fa fa-rupee-sign'/>{calculateDiscountedPrice(item)}</span>
												</div>
											</div>
											<div className="other-info">
												<span>Applicable discount of {item.discount}%</span>
											</div>
											<div className="actions">
												<div className="select">
													<select className='form-control' name="" id="">
														{quantityAvailable.map(qN => (
															<option key={qN} defaultValue={item.quantity}
															        value={qN}>Qty: {qN}</option>
														))}
													</select>
												</div>
												<div className="remove-button">
													<button onClick={() => setRemoveItemFromCart(item.id)}
													        className="btn btn-sm btn-danger"><i
														className='fa fa-minus-circle'/>Remove item from cart
													</button>
												</div>
											</div>
										</div>
									</div>
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
									<div className="right"><i className='fa fa-rupee-sign'/>{Utils.getDiscountedPrice(cartItems)}</div>
								</li>
								<li className="list-group-item">
									<div className="left">Total Quantity:</div>
									<div className="right">{cartItems.length}</div>
								</li>
								<li className="list-group-item">
									<button className="btn btn-primary">Checkout</button>
								</li>
							</ul>
						</div>
			</div>
		</div>
	);
};

export default Cart;
