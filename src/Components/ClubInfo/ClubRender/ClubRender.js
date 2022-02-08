import React from 'react';
import './ClubRender.css';
import ClubHeader from '../ClubHeader/ClubHeader';
import { useState } from 'react';
import { useEffect } from 'react';
import CLubCard from '../ClubCard/CLubCard';

const ClubRender = () => {
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams.slice(0,9)))
    },[]);
    console.log(teams);
    return (
        <div>
            <ClubHeader></ClubHeader>
            <div className = 'teamSection'>
                <div className="container">
                    {
                        teams.map((team) => <CLubCard team = {team}></CLubCard>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default ClubRender;