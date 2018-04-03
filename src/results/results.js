import React from 'react';
import './results.css';

import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col} from 'reactstrap'

export class Results extends React.Component {
	
	componentDidMount() {
		var newResults = this.props.results;
		this.setState({results: newResults});
	}
	
	render() {
		var title = "Title";
		var year = "Year";
		var poster = "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180";
        
        var cards = [];
		
		if (this.props.results.Search !== undefined) {
            
            var searchResults = this.props.results.Search;
            
            for (var i = 0; i < searchResults.length; i++) {
                var foundItem = searchResults[i];
                
                title = foundItem.Title;
                year = foundItem.Year;
                poster = foundItem.Poster;
                
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