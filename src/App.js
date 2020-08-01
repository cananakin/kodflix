import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import './App.css';
import Technologies from './Technologies';
import Detail from './Details/Detail'


function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/not-found" component={NotFound} />
					<Route exact path="/" component={Technologies} />
					<Route exact path="/:technology_id" component={Detail} />
				</Switch>
				
			</div>
		</Router>
	);
}

const NotFound = () => (
	<div>
		<h1>Sorry!! Page Not Found</h1>
		<Link to="/">Home Page</Link>
	</div>
)

export default App;
