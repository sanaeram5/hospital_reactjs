import React from 'react';
import Home from './Home';
import Bookings from './Bookings';
import BookMe from './BookMe';
import RegisterPatient from './RegisterPatient';
import LoginPatient from './LoginPatient';
import RegisterDoctor from './RegisterDoctor';
import LoginDoctor from './LoginDoctor';
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Switch, Route, Redirect} from 'react-router-dom';

const App=()=>{
	return(
	<div>
	<Navbar/>
	<Switch>
	<Route exact path="/" component={Home} />
	<Route exact path="/bookings" component={Bookings} />
	<Route exact path="/bookme" component={BookMe} />
	<Route exact path="/registerpatient" component={RegisterPatient} />
	<Route exact path="/loginpatient" component={LoginPatient} />
	<Route exact path="/registerdoctor" component={RegisterDoctor} />
	<Route exact path="/logindoctor" component={LoginDoctor} />
	<Redirect to="/" />
	</Switch>
	</div>
	);
};

export default App;