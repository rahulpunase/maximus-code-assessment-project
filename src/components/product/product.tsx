import React, {useEffect, useState} from 'react';
import './product.scss';
import {IProduct} from "../../redux/reducers/products.reducer";
import {ICartItem} from "../../redux/reducers/cart.reducers";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart, removeItemFromCart} from "../../redux/actions/cart.action";
import {IStore} from "../../redux/store";

const Product = (props: IProduct) => {
	const [defaultQuantity, setDefaultQuantity] = useState('1');
	const [isItemAlreadyInCart, setIsItemAlreadyInCart] = useState<boolean>();
	const store = useSelector((store: IStore) => store);
	const cartItemArray = store.cartReducer.cartItems;

	const dispatch = useDispatch();
	const setAddItemToCart = (item: IProduct) => {
		const cartItem: ICartItem = {
			...item,
			...{ quantity: Number(defaultQuantity) }
		}
		dispatch(addItemToCart(cartItem));
	}

	const setRemoveItemFromCart = (item: IProduct) => {
		dispatch(removeItemFromCart(item.id));
	}

	const calculateDiscountedPrice = () => {
		return (props.price - (props.price * props.discount) / 100).toFixed(2);
	}


	useEffect(() => {
		const item = cartItemArray.find(item => props.id === item.id);
		setIsItemAlreadyInCart(!!item);
	}, [cartItemArray.length]);

	return (
		<div className='product-component'>
			<div className="card">
				<img src={`http://placehold.it/238x238&text=${props.name}`} className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<p className="card-text"><span className='price'><i className='fa fa-rupee-sign'/>{calculateDiscountedPrice()}</span> <span className='actual-price'><i className='fa fa-rupee-sign'/>{props.price}</span> <span className='discount'>({props.discount}% off)</span></p>
						<div className="action">
							{!isItemAlreadyInCart && <div className="q-holder">
								<input onChange={(event) => setDefaultQuantity(event.target.value)} min={1} defaultValue={defaultQuantity} type="number" className="form-control"/>
							</div>}
							<div className="add-to-cart">
								{isItemAlreadyInCart ? <button onClick={() => setRemoveItemFromCart(props)} disabled={defaultQuantity === '0'} type="button" className="btn btn-danger">Remove Item</button>
									: <button onClick={() => setAddItemToCart(props)} disabled={defaultQuantity === '0'} type="button" className="btn btn-primary">Add to Cart</button>}
							</div>
						</div>
					</div>
			</div>
		</div>
	);
};

export default Product;
