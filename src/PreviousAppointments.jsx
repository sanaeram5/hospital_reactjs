import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class PreviousAppointments extends Component{

	constructor(props){
		super(props);
		this.state={
			prev:[]
		};
	}

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(response => {
			console.log(response);
			this.setState({prev: response.data});
		})
		.catch(error =>{
			console.log(error);
		})
	}

	render(){

	const {prev}=this.state;

	return(
	<div>
		<div className="my-5">
			<h1 className="text-center color-red">Previous Appointments</h1>
		</div>
		<div className="content">
		{prev.length?
		prev.map(p=>p.id <= 10?(
		  <div className="alert">
		    <span>{p.id}</span>
		    <span>Dr {p.id}-Cardiologist</span>
		    <span><NavLink to="/prescription" class="btn btn-outline-danger text-center">View Prescription</NavLink></span>
		  </div>):null):null}
		</div>
	</div>
	);
	}	
}
export default PreviousAppointments;