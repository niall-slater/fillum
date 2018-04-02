import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { Button, Jumbotron, Navbar } from 'reactstrap';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<div class="container-fluid">
					<Button>button</Button>
					<Jumbotron>jumbotron</Jumbotron>
					<Navbar>This is a navbar</Navbar>
				</div>
			</div>
			
		);
	}
}

export default App;
