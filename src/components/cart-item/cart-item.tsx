import React, {useEffect, useState} from 'react';
import './cart-item.scss';
import {ICartItem} from "../../redux/reducers/cart.reducers";
import {removeItemFromCart, updateItemQuantity} from "../../redux/actions/cart.action";
import {useDispatch, useSelector} from "react-redux";
import {Utils} from "../../utils/util";

export interface ICartItemComponent extends ICartItem {
	showAction: boolean
}

const CartItem = (props: ICartItemComponent) => {
	const dispatch = useDispatch();
	const [qty, setQty] = useState(props.quantity);
	const [showSaveButton, setShowSaveButton] = useState(false);

	const setRemoveItemFromCart = (id: string) => {
		dispatch(removeItemFromCart(id));
	}

	const subQty = () => {
		if (qty > 1) {
			setQty(qty - 1);
		}
	}

	const addQty = () => {
		setQty(qty + 1);
	}

	const updateQty = (event: React.FormEvent<HTMLInputElement>) => {
		const val = Number(event.currentTarget.value);
		if (val > 0) {
			setQty(val);
		}
	}

	const onSaveItem = () => {
		dispatch(updateItemQuantity(props.id, qty));
		setShowSaveButton(false);
	}

	useEffect(() => {
		setShowSaveButton(props.quantity != qty);
	}, [qty]);
	return (
		<div className="cart-item-component">
			<div className="cart-item">
				<div className="img">
					<img src={`http://placehold.it/238x238&text=${props.name}`}
					     className="card-img-top" alt="..."/>
				</div>
				<div className="details">
					<div className="all-details">
						<div className="name">{props.name}</div>
						<div className="price">
							<span className='actual'><i className='fa fa-rupee-sign'/>{props.price.toFixed(2)}</span>
							<span className='discounted'><i
								className='fa fa-rupee-sign'/>{Utils.getItemPriceDiscount(props)}</span>
						</div>
					</div>
					<div className="other-info">
						<span>Applicable discount of {props.discount}%</span>
					</div>
					{ !props.showAction && <div className="read-only-qty">Quantity: {props.quantity}, Bundle Total: <b><i className='fa fa-rupee-sign'/>{Utils.getBundlePriceDiscount(props)}</b></div>}
					{ props.showAction && <div className="actions">
						<div className="select">
							<div className="input-group">
								<input onChange={(ev) => updateQty(ev)} value={qty} type="number"
								       className="form-control" placeholder="Quantity"/>
								<div className="input-group-append">
									<button onClick={subQty} className="btn btn-sm btn-outline-danger" type="button">
										<i className="fa fa-minus"/>
									</button>
									<button onClick={addQty} className="btn btn-sm btn-outline-success" type="button">
										<i className="fa fa-plus"/>
									</button>
									{showSaveButton && <button onClick={onSaveItem} className="btn btn-sm btn-success">Save</button>}
								</div>
							</div>
						</div>
						<div className="remove-button">
							<button onClick={() => setRemoveItemFromCart(props.id)}
							        className="btn btn-sm btn-danger"><i
								className='fa fa-minus-circle'/>Remove item from cart
							</button>
						</div>
					</div>}
				</div>
			</div>
		</div>
	);
};

export default CartItem;
