import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import male from '../src/image/male.svg';
import axios from 'axios';

class Bookings extends Component{

	constructor(props){
		super(props);
		this.state={
			doctors:[]
		};
	}

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(response => {
			console.log(response);
			this.setState({doctors: response.data});
		})
		.catch(error =>{
			console.log(error);
		})
	}

	render(){

		const {doctors}=this.state;

		return(
			<div>
				<div className="my-5 text-center">
			<NavLink to="/previous" class="btn btn-outline-danger text-center"><span className="resize">Previous Appointments</span></NavLink>
			<NavLink to="/appointment" class="btn btn-outline-danger text-center"><span className="resize">Scheduled Appointments</span></NavLink>
			<NavLink to="/reports" class="btn btn-outline-danger text-center"><span className="resize">Upload Documents</span></NavLink>
			<hr className="red"/>
		</div>
		<div className="my-5">
			<h1 className="text-center color-red">Doctor's Available</h1>
		</div>
		<div className="container-fluid mb-5">
			<div className="row">
				<div className="col-10 mx-auto">
					<div className="row gy-4">
					{doctors.length?
						doctors.map(doctor=>
						<div className="col-md-4 col-10 mx-auto">
						<div id={doctor.id} className="card c1">
							  <img src={male} className="card-img-top size text-center" alt="avtar"/>
							  <div className="card-body">
							  	<hr/>
							    <h5 className="card-title text-center color-red">Dr. {doctor.id}</h5>
							    <p className="card-text text-center">Days:Mon-Fri<br/>{doctor.title}</p>
							    <NavLink to="/doctor" class="btn btn-outline-danger text-center"><span className="resize">View Doctor</span></NavLink>
							    <NavLink to="/schedular" class="btn btn-outline-danger text-center"><span className="resize">View Schedule</span></NavLink>
							  </div>
						</div>
						</div>):null}
					</div>
				</div>
			</div>
		</div>
		</div>
		);
	}
}

export default Bookings;