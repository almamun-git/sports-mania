import React from 'react';
import './ClubDetails.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import banner from '../../../Banner/stadium.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import male from '../../../photos/LeaugeDetails/male.png';
import female from '../../../photos/LeaugeDetails/female.png';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const ClubDetails = () => {
    const [team, setTeam] = useState({});
    const tID = useParams();
    const id = tID.teamID;
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data))
        .catch(error => console.log(error))
    }
    , [url])

    let strCountry, strGender, strSport, strTeamLogo, strAlternate, strDescriptionEN, strStadiumDescription;
    if(team.teams){
        strCountry = team.teams[0].strCountry;
        strGender = team.teams[0].strGender;
        strSport = team.teams[0].strSport;
        strTeamLogo = team.teams[0].strTeamLogo;
        strAlternate = team.teams[0].strAlternate;
        strDescriptionEN = team.teams[0].strDescriptionEN;
        strStadiumDescription = team.teams[0].strStadiumDescription;
    }
    let bannerImage;
    strGender === 'Male' ?  bannerImage = male : bannerImage = female;

    const backgroundImage = {
        width: "100%",
        height: "400px",
        backgroundImage: `url(${banner})`,
        backdropFilter: 'blur(4px)',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      };
    
    
    
    return (
        <div>
            <div style = {backgroundImage}></div>
            <div className = 'bannerLogo'>
                <img src={strTeamLogo} alt="" />
            </div>
            <div className = 'teamBodyPart'>
                <div className = 'container'>
                    <div className = 'row d-flex align-items-center justify-content-between banner'>
                        <div className = 'col-md-6 text'>
                            <h2>{strAlternate}</h2>
                            <h5><FontAwesomeIcon icon={faFlag}/> Country: {strCountry}</h5>
                            <h5><FontAwesomeIcon icon={faFutbol}/> Sports type: {strSport}</h5>
                            <h5><FontAwesomeIcon icon={faMars}/> Gender: {strGender}</h5>
                        </div>
                        <div className = 'col-md-6 image'>
                            <img src={bannerImage} alt="players" />
                        </div>
                    </div>
                    <p>{strDescriptionEN}</p>
                    <p>{strStadiumDescription}</p>
                    
                </div>
            </div>
            <div className = 'fontawsome'>
                <Link to="#"><FontAwesomeIcon href ="#" className = "icon" size = '3x' icon={faFacebook} /></Link>
                <Link to="#"><FontAwesomeIcon href ="#" className = "icon" size = '3x' icon={faTwitter} /></Link>
                <Link to="#"><FontAwesomeIcon href ="#" className = "icon" size = '3x' icon={faYoutube} /></Link>
            </div>
        </div>
    );
};

export default ClubDetails;