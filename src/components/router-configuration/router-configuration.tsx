import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect,useLocation} from 'react-router-dom';
import Home from "../../pages/home/home";
import Login from "../../pages/authentication/login/login";
import HeaderComponent from "../header/header";
import Cart from "../../pages/cart/cart";

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
			</Switch>
		</React.Fragment>
	);
};

export default RouterConfiguration;
