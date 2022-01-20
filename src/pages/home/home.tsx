import React from 'react';
import './home.scss';
import {useSelector} from "react-redux";
import {IStore} from "../../redux/store";
import Product from "../../components/product/product";

const Home = () => {
	const store = useSelector((store: IStore) => store);

	return (
		<div className='home-page'>
			<div className="container">
				<div className="product-list">
					{store.productsReducer.products.map(product => (
						<Product key={product.id} {...product}/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
