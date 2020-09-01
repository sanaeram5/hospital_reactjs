import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faPhone} from '@fortawesome/free-solid-svg-icons';
import login from '../src/image/login.svg';
import register from '../src/image/register.svg';

const LoginDoctor=()=>{
	return(
	<div>
		<div className="container">
			<div className="forms-container">
				<div className="signin-signup">
					<form action="" class="sign-in-form">
						<h2 className="title">Doctor Login</h2>
						<div className="input-field">
							<FontAwesomeIcon className="i" icon={faUser} size="lg" />
							<input type="text" placeholder="Full Name" />
						</div>
						<div className="input-field">
							<FontAwesomeIcon className="i" icon={faLock} size="lg" />
							<input type="password" placeholder="Password" />
						</div>
							<input type="submit" value="Login" class="btn btn-outline-danger" />
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

export default LoginDoctor;