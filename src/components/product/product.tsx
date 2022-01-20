import React, {useState} from 'react';
import './product.scss';
import {IProduct} from "../../redux/reducers/products.reducer";

const Product = (props: IProduct) => {
	const [defaultQuantity, setDefaultQuantity] = useState('1');
	return (
		<div className='product-component'>
			<div className="card">
				<img src={`http://placehold.it/238x238&text=${props.name}`} className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<p className="card-text">${props.price} <span>({props.discount}% off)</span></p>
						<div className="action">
							<div className="q-holder">
								<input onChange={(event) => setDefaultQuantity(event.target.value)} min={1} defaultValue={defaultQuantity} type="number" className="form-control"/>
							</div>
							<div className="add-to-cart">
								<button disabled={defaultQuantity === '0'} type="button" className="btn btn-primary">Add to Cart</button>
							</div>
						</div>
					</div>
			</div>
		</div>
	);
};

export default Product;
