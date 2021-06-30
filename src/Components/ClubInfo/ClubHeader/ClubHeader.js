import React from 'react';
import './ClubHeader.css';
import banner from '../../../Banner/stadium.jpg'

const ClubHeader = () => {
    return (
        <div className = 'ClubHeader' style = {{backgroundImage: `url(${banner})`}}>
            <div className = 'header-content d-flex justify-content-center'>
                <h1><strong>Team Tracker</strong></h1>
            </div>
        </div>
    );
};

export default ClubHeader;