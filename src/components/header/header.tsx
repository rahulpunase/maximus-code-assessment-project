import React from 'react';
import './header.scss';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../redux/store";
import {logUserOut, setFromWhere} from '../../redux/actions/auth.action';

const HeaderComponent = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();
	const { authReducer, cartReducer } = useSelector((store: IStore) => store);
	const getCartCount = cartReducer.cartItems.map(item => item.quantity).reduce((qua, acc) => qua + acc, 0);

	const logOut = () => {
		dispatch(logUserOut());
	}

	const navigateToLogin = () => {
		dispatch(setFromWhere(location.pathname));
		history.push('/login');
	}
	return (
		<div className='header-component'>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid header-holder">
					<NavLink to={'/home'} className="navbar-brand" href="#">Cart Project</NavLink>
					<div className="actions">
						<NavLink to={'/cart'} type="button" className="btn btn-primary position-relative">
							Cart
							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{getCartCount}</span>
						</NavLink>
						<div className="spacer"/>
						{!authReducer.isLoggedIn && <button onClick={navigateToLogin} type="button" className="btn btn-primary">Login</button>}
						{authReducer.isLoggedIn && <button title={authReducer.userEmail} type="button" className="btn btn-primary">My Account</button>}
						<div className="spacer"/>
						{authReducer.isLoggedIn && <button onClick={logOut} type="button" className="btn btn-danger">Log out</button>}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default HeaderComponent;
