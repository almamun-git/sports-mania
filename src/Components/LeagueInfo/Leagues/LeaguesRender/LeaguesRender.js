import React, { useEffect, useState } from 'react';
import LeagueHeader from '../LeagueHeader/LeagueHeader';
import LeagueCards from '../LeagueCards/LeagueCards';
import { Container } from 'react-bootstrap';
import './LeaguesRender.css'

const LeaguesRender = () => {
    const [leagues, setLeagues] = useState([]);
    console.log(leagues);
    useEffect(()=>{
        fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
        .then(res => res.json())
        .then(data => setLeagues(data.leagues.slice(0,9)))
    },[])
    return (
        <div>
            <LeagueHeader></LeagueHeader>
                <Container>
                    {
                        leagues.map(league => <LeagueCards league = {league}></LeagueCards>)
                    }
                </Container>
        </div>
    );
};

export default LeaguesRender;