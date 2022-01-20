import React from 'react';
import './login.scss';

const Login = () => {
	return (
		<div className="login-page">
			<div className="in-centre">
				<div className="card">
					<div className="card-body">
						<div className="card-title">LOG IN</div>
						<div className="mb-3 row">
							<label htmlFor="inputPassword" className="col-sm-2 col-form-label">Email</label>
							<div className="col-sm-10">
								<input type="email" className="form-control" id="inputPassword"/>
							</div>
						</div>
						<div className="mb-3 row">
							<label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
							<div className="col-sm-10">
								<input type="password" className="form-control" id="inputPassword"/>
							</div>
						</div>
						<div className="mb-3 row">
							<button type="submit" className="btn btn-primary">Log in</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
