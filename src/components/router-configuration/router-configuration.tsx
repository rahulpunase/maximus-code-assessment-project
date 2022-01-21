import React from 'react';
import {Switch, Route, Redirect,useLocation} from 'react-router-dom';
import Home from '../../pages/home/home';
import Login from '../../pages/authentication/login/login';
import HeaderComponent from '../header/header';
import Cart from '../../pages/cart/cart';
import Checkout from "../../pages/checkout/checkout";

const RouterConfiguration = () => {
	const location = useLocation();
	const isOnLoginPage = location.pathname === '/login';
	return (
		<React.Fragment>
			{!isOnLoginPage && <HeaderComponent />}
			<Switch>
				<Route exact={true} path={'/'}>
					<Redirect to={'home'}/>
				</Route>
				<Route path={'/home'}>
					<Home/>
				</Route>
				<Route path={'/cart'}>
					<Cart/>
				</Route>
				<Route path={'/login'}>
					<Login/>
				</Route>
				<Route path={'/checkout'}>
					<Checkout/>
				</Route>
			</Switch>
		</React.Fragment>
	);
};

export default RouterConfiguration;
