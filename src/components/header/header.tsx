import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import {useSelector} from "react-redux";
import {IStore} from "../../redux/store";

const HeaderComponent = () => {
	const store = useSelector((store: IStore) => store);
	const getCartCount = store.cartReducer.cartItems.map(item => item.quantity).reduce((qua, acc) => qua + acc, 0);
	return (
		<div className='header-component'>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid header-holder">
					<a className="navbar-brand" href="#">Cart Project</a>
					<div className="actions">
						<NavLink to={'/cart'} type="button" className="btn btn-primary position-relative">
							Cart
							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{getCartCount}<span className="visually-hidden">Cart</span></span>
						</NavLink>
						<div className="spacer"/>
						<NavLink to={'/login'} type="button" className="btn btn-primary">Login</NavLink>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default HeaderComponent;
