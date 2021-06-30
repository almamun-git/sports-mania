import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './LeagueCards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';


const LeagueCards = (props) => {
    let history = useHistory();

    const {strLeague, strSport, img, idLeague} = props.league;

    function handleExploreBtn(leagueDetails){
        history.push(`/league/${leagueDetails}`)
    }

    return (
            <Card className = "card">
                <div className = 'cardImg'>
                    <Card.Img variant="top" src={img} />
                </div>
                
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <p><small>Type: {strSport}</small></p>
                    <Button onClick = {()=> handleExploreBtn(idLeague)}>Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
    );
};

export default LeagueCards;