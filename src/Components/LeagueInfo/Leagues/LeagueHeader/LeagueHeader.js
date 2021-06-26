import React from 'react';
import './LeagueHeader.css';
import banner from '../../../../Banner/stadium.jpg'

const LeagueHeader = () => {
    
    return (
        <div fluid className = 'header' style = {{backgroundImage: `url(${banner})`}}>
            <div className = 'header-content d-flex justify-content-center'>
                <h1><strong>Sports Mania</strong></h1>
            </div>
        </div>
    );
};

export default LeagueHeader;