import React, { useEffect, useState } from 'react';
import LeagueHeader from '../LeagueHeader/LeagueHeader';
import LeagueCards from '../LeagueCards/LeagueCards';
import './LeaguesRender.css'
import { images } from '../../images/images';


const LeaguesRender = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(()=>{
        fetch("https://www.thesportsdb.com/api/v1/json/2/all_leagues.php")
        .then(res => res.json())
        .then(data => setLeagues(data.leagues.slice(0,9)))
    },[]);
    for (let i = 0; i < leagues.length; i++){
        leagues[i].img = images[i];
    }
    console.log(leagues);
    return (
        <div>
            <LeagueHeader></LeagueHeader>
                <div className = "cards">
                    <div className = "container">
                        {
                            leagues.map(league => <LeagueCards league = {league}></LeagueCards>)
                        }
                    </div>
                </div>
                
        </div>
    );
};

export default LeaguesRender;
