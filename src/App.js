import React from 'react';
import './App.css';

import reactJs from './images/react-icon.svg'
import html5 from './images/html5-icon.svg'
import css3 from './images/css-icon.svg'
import nodeJs from './images/nodejs-icon.svg'
import mongoDB from './images/mongodb-icon.svg'
import heroku from './images/heroku-icon.svg'

function App() {
	return (
		<div className="App">
			<br/> <br/> <br/>
			<div className="container">
				<div className="item">
					<img src={reactJs} alt="ReactJS"/>
				</div>
				<div className="item">
					<img src={html5} alt="Html5"/>
				</div>
				<div className="item">
					<img src={css3} alt="CSS3"/>
				</div>
			</div>
			<div className="container">
				<div className="item">
					<img src={nodeJs} alt="NodeJs"/>
				</div>
				<div className="item">
					<img src={mongoDB} alt="MongoDB"/>
				</div>
				<div className="item">
					<img src={heroku} alt="Heroku"/>
				</div>
			</div>
        </div>
	);
}

export default App;
