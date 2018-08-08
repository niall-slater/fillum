import React from 'react';
import './App.css';

import {Header} from './header/header';
import {Search} from './search/search';

class App extends React.Component {
	render() {
		return (
			<div className="App" id="reactStrapOverride">
				<Header />
				<Search />
			</div>
		);
	}
}

export default App;
