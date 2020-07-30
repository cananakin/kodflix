import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Technologies from './Technologies'


function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/" component={Technologies} />
				<Route exact path="/:details" component={Details} />
			</div>
		</Router>
	);
}

function Details() {
	return (
		<div>
			<h1>Details</h1>
			<Link to="/">Home Page</Link>
		</div>
	)
}

export default App;
