import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faPhone} from '@fortawesome/free-solid-svg-icons';
import register from '../src/image/register.svg';
import axios from 'axios';

class RegisterPatient extends Component{

	constructor(props){
		super(props);
		this.state={
			fname:'',
			pass:'',
			phone:''
		};
	}

	changeHandler = e =>{
		this.setState({[e.target.name]:e.target.value})
	}

	submitHandler = e =>{
		e.preventDefualt();
		axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
		.then(response => {
			console.log(response);
		})
		.catch(error =>{
			console.log(error);
		})
	}

	render(){

		const{fname,pass,phone}=this.state;

		return(
			<div>
				<div className="container">
			<div className="forms-container">
				<div className="signin-signup">
					<form onSubmit={this.submitHandler} className="sign-in-form">
						<h2 className="title">Patient Registration</h2>
						<div className="input-field">
							<FontAwesomeIcon className="i" icon={faUser} size="lg" />
							<input type="text" placeholder="Full Name" name="fname" value={fname} onChange={this.changeHandler} />
						</div>
						<div className="input-field">
							<FontAwesomeIcon className="i" icon={faLock} size="lg" />
							<input type="password" placeholder="Password" name="pass" value={pass} onChange={this.changeHandler} />
						</div>
						<div className="input-field">
							<FontAwesomeIcon className="i" icon={faLock} size="lg" />
							<input type="password" placeholder="Re-enter Password" name="rpass" />
						</div>
						<div className="input-field">
							<FontAwesomeIcon className="i" icon={faPhone} size="lg" />
							<input type="number" placeholder="Phone Number" name="phone" value={phone} onChange={this.changeHandler} />
						</div>
							<input type="submit" value="Register" className="btn btn-outline-danger" />
					</form>
				</div>
			</div>
			<div className="panels-container">
				<div className="panel left-panel">
					<img src={register} className="image" alt="register"/>
				</div>
			</div>
		</div>
			</div>
		);
	}
}

export default RegisterPatient;