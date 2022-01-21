import React, {useEffect, useState} from 'react';
import './checkout.scss';
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../redux/store";
import {Utils} from "../../utils/util";
import Product from "../../components/product/product";
import CartItem from "../../components/cart-item/cart-item";
import {clearCart} from "../../redux/actions/cart.action";
import {useHistory} from 'react-router-dom';

const Checkout = () => {
	const store = useSelector((store: IStore) => store);
	const dispatch = useDispatch();
	const history = useHistory();
	const [afterConfirm, setAfterConfirm] = useState(false);
	const {authReducer, cartReducer} = store;
	let timer: any = null;

	const confirmOrder = () => {
		setAfterConfirm(true);
		dispatch(clearCart());
		setTimeout(() => {
			history.push('/home');
		}, 2000);
	}

	useEffect(() => {
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className='checkout-page container'>
			<div className="row">
				<div className="col-md-12">
					<h2 className="heading">Checkout <i>({Utils.calculateItemQty(cartReducer.cartItems)} Items)</i></h2>
					{!authReducer.isLoggedIn && <div className="alert alert-danger" role="alert">
						You are not logged in.
					</div>}
					{(authReducer.isLoggedIn && !afterConfirm) &&
					<React.Fragment>
						<div className="card">
							<div className="card-body">
								<div className="card-title"><b>Review Your Order</b></div>
								<ul className="list-group">
									{cartReducer.order.items.map(item => (
										<li className="list-group-item">
											<div className="order-item">
												<CartItem {...item} showAction={false}/>
											</div>
										</li>
									))}
									<li className='list-group-item last'>
										<div className="total-summary">
											Order Total: <i
											className="fa fa-rupee-sign"/> {cartReducer.order.totalPrice}
										</div>
										<div className="confirm-order">
											<button onClick={confirmOrder} className="btn btn-success">Confirm Order
											</button>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</React.Fragment>}
					{(authReducer.isLoggedIn && afterConfirm) && <React.Fragment>
						<div className="alert alert-success" role="alert">
							Your order is successfully completed.
						</div>
					</React.Fragment>}
				</div>
			</div>
		</div>
	);
};

export default Checkout;
