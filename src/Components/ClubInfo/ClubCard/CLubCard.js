import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';



const CLubCard = (props) => {
    const {strAlternate, strTeamLogo, strSport, idTeam} = props.team;
    let history = useHistory();

    function handleTeamExploreBtn(id){
        history.push(`/team/${id}`)
    }

    return (
        <div>
            <Card className = "card">
                <div className = 'cardImg'>
                    <Card.Img variant="top" src={strTeamLogo} />
                </div>
                
                <Card.Body>
                    <Card.Title>{strAlternate}</Card.Title>
                    <p><small>Type: {strSport}</small></p>
                    <Button onClick = {()=> handleTeamExploreBtn(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CLubCard;