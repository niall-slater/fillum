import React from 'react';
import './results.css';

import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'

export class Results extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			results: []
		}
		
	}
	
	componentDidMount() {
		var newResults = this.props.results;
		this.setState({results: newResults});
	}
	
	//this.state.results returns an empty array - the search callback isn't working yet
	
	render() {
		return(
			<div className="results">
				<Card>
					<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
					<CardBody>
						<CardTitle>Title</CardTitle>
						<CardSubtitle>Card subtitle</CardSubtitle>
						<CardText>Text text text text text text text text text.</CardText>
						<Button>Button</Button>
					</CardBody>
				</Card>
			</div>
		);
	}
}