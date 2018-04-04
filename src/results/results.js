import React from 'react';
import './results.css';

import {Card, CardImg, CardBody, CardTitle, CardSubtitle, Row} from 'reactstrap'

export class Results extends React.Component {
	
	componentDidMount() {
		var newResults = this.props.results;
		this.setState({results: newResults});
	}
	
	render() {
		var title = "Title";
		var year = "Year";
		var poster = "Poster";
        
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
                    <Card className="Card" key={i}>
                        <CardImg className="CardImg" top width="100%" src={poster} alt="Card image cap" />
                        <CardBody className="CardBody">
                            <CardTitle className="CardTitle">{title}</CardTitle>
                            <CardSubtitle className="CardSubtitle">{year}</CardSubtitle>
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