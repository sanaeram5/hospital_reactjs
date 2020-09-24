import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import login from '../src/image/login.svg';

const LoginPatient=()=>{
	return(
	<div>
		<div className="container">
			<div className="forms-container">
				<div className="signin-signup">
					<form action="" class="sign-in-form">
						<h2 className="title">Patient Login</h2>
						<div className="input-field">
							<FontAwesomeIcon className="i" icon={faUser} size="lg" />
							<input type="text" placeholder="Full Name" />
						</div>
						<div className="input-field">
							<FontAwesomeIcon className="i" icon={faLock} size="lg" />
							<input type="password" placeholder="Password" />
						</div>
						<input type="submit" value="Login" className="btn btn-outline-danger" />
					</form>
				</div>
			</div>
			<div className="panels-container">
				<div className="panel left-panel">
					<img src={login} className="image" alt="register"/>
				</div>
			</div>
		</div>
	</div>
	);
};

export default LoginPatient;