import React, {RefObject, useRef, useState} from 'react';
import './login.scss';
import {useHistory, useLocation, NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {IStore} from '../../../redux/store';
import {loginUser} from '../../../redux/actions/auth.action';

export const Login = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const {authReducer} = useSelector((store: IStore) => store);
	const email = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);

	const [inValidMessage, setInvalidMessage] = useState('');

	const defaultUserDetails = {
		email: 'xyz@gmail.com',
		password: 'xyzxyz',
	}

	const setLoginUser = () => {
		if (email.current && password.current) {
			if (email.current.value === defaultUserDetails.email
				&& password.current.value === defaultUserDetails.password) {
				dispatch(loginUser(email.current.value));
				history.push(authReducer.fromWhere)
			} else {
				setInvalidMessage('Invalid email and password combination');
			}
		}
	}

	return (
		<div className="login-page">
			<div className="in-centre">
				{authReducer.isLoggedIn && <div className="alert alert-info" role="alert">
					You are already logged in. Navigate to <NavLink to={'/home'}>home page</NavLink>
				</div>}
				{!authReducer.isLoggedIn && <div className="card">
					<div className="card-body">
						<div className="card-title">LOG IN</div>
						{!!inValidMessage && <div className="alert alert-danger" role="alert">
							{inValidMessage}
						</div>}
						<form>
							<div className="mb-3 row">
								<label htmlFor="inputPassword" className="col-sm-2 col-form-label">Email</label>
								<div className="col-sm-10">
									<input ref={email} placeholder='Email: xyz@gmail.com' type="email"
										   className="form-control" id="inputPassword"/>
								</div>
							</div>
							<div className="mb-3 row">
								<label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
								<div className="col-sm-10">
									<input ref={password} placeholder='Password: xyzxyz' type="password"
										   className="form-control" id="inputPassword"/>
								</div>
							</div>
							<div className="mb-3 row">
								<button onClick={setLoginUser} type="button" className="btn btn-block btn-primary">Log in</button>
							</div>
						</form>
					</div>
				</div>}
			</div>
		</div>
	);
};

export default Login;
