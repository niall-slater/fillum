import React from 'react';
import './results.css';

import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row} from 'reactstrap'

export class Results extends React.Component {
	
	componentDidMount() {
		var newResults = this.props.results;
		this.setState({results: newResults});
	}
	
	render() {
		var title = "Title";
		var year = "Year";
		var poster = '../img/404.png';
        
        var cards = [];
		
		if (this.props.results.Search !== undefined) {
            
            var searchResults = this.props.results.Search;
            
            for (var i = 0; i < searchResults.length; i++) {
                var foundItem = searchResults[i];
                
                title = foundItem.Title;
                year = foundItem.Year;
                poster = foundItem.Poster;
                
                if (poster.includes('N/A')) {
                    poster = require("../img/404.png");
                }
                
                var cardObject = (
                    <Card className="Card">
                        <CardImg top width="100%" src={poster} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{title}</CardTitle>
                            <CardSubtitle>{year}</CardSubtitle>
                            <CardText>Description</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                );
                
                cards.push(cardObject);
            }
		}
		
		return(
			<div className="results">
                <Row>
                    {cards}
                </Row>
			</div>
		);
	}
}