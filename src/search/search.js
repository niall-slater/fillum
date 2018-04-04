import React from 'react';
import './search.css';

import {Results} from '../results/results';

export class Search extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			results: []
		}
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}
	
	handleSubmit(e) {
		//This stops the page refreshing if they submit the form.
		e.preventDefault();
	}
	
	handleKeyUp() {
		//Search code goes here
		var searchBarContents = document.getElementById('searchBar').value;
		var queryString = 's=' + searchBarContents;
		
		const apiKey = '7849b321';
		const apiUrl = 'http://www.omdbapi.com/?apikey=' + apiKey + '&';
		
		fetch(apiUrl + queryString + "&plot=short")
			.then(response => {
				if (response.status !== 200) {
					console.log('Error: ' + response.status);
					return;
				}
			
				response.json().then(data => {
					this.setState({ results: data });
				});
			})
			.catch(err => {
				console.log('Error fetching results', err);
			});
	}
	
	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit} className="searchForm">
					<input onKeyUp={this.handleKeyUp} className="searchBar" type="text" placeholder="Start typing a movie title" id="searchBar" />
				</form>
				<Results results={this.state.results} />
			</div>
		);
	}
}