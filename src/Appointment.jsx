import React, {Component} from 'react';
import axios from 'axios';

class Appointment extends Component{

	constructor(props){
		super(props);
		this.state={
			curr:[]
		};
	}

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(response => {
			console.log(response);
			this.setState({curr: response.data});
		})
		.catch(error =>{
			console.log(error);
		})
	}

	render(){

	const {curr}=this.state;

	return(
	<div>
		<div className="my-5">
			<h1 className="text-center color-red">Upcoming Appointments</h1>
		</div>
		<div className="con container-fluid">
			<div className="row">
				<div className="col-7 mx-auto">
					<div className="row">
						<ul class="list-group">
						{curr.length?
						curr.map(c=>c.id <= 5?(
						  <li class="list-group-item text-center">
						  		<span className="number">{c.id}</span>
								<span className="name">Dr.{c.id}</span>
								<span className="date">12/10/2020</span>
								<span className="time">12:00pm</span>
						  </li>):null):null}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
	}
}
export default Appointment;