import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
	return (
		<div className='header-component'>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid header-holder">
					<a className="navbar-brand" href="#">Cart Project</a>
					<div className="actions">
						<NavLink to={''} type="button" className="btn btn-primary position-relative">
							Cart
							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">99+<span className="visually-hidden">Cart</span></span>
						</NavLink>
						<NavLink to={''} type="button" className="btn btn-primary">Login</NavLink>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default HeaderComponent;
