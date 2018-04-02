import React from 'react';
import './header.css';

export class Header extends React.Component {
	render() {
		return(
			<header className="App-header">
				<h1 className="App-title"><span role="img" aria-label="Video Camera Emoji">🎥</span> Fillum</h1>
				<p className="App-intro">Made with React</p>
			</header>
		);
	}
}