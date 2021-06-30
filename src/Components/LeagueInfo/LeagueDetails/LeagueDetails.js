import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './LeagueDetails.css'
import banner from '../../../Banner/stadium.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faHistory, faMars } from '@fortawesome/free-solid-svg-icons';
import male from '../../../photos/LeaugeDetails/male.png';
import female from '../../../photos/LeaugeDetails/female.png';

const LeagueDetails = (props) => {
    const [league, setLeague] = useState({});
    const leID = useParams();
    const id = leID.leagueID;
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;

    

    useEffect(()=>
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data))
        .catch(error => console.log(error))
    ,[url])
    // console.log(league.leagues);
    let dateFirstEvent, strCountry, strSport, strGender, strLogo, strLeague;
    if(league.leagues){
        strLeague  = league.leagues[0].strLeague;
        dateFirstEvent  = league.leagues[0].dateFirstEvent;
        strCountry  = league.leagues[0].strCountry;
        strSport  = league.leagues[0].strSport;
        strGender  = league.leagues[0].strGender;
        strLogo  = league.leagues[0].strLogo;
    }

    let bannerImage;
    
    strGender === 'Male' ?  bannerImage = male : bannerImage = female;
    
    
    
    var backgroundImage = {
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
                <img src={strLogo} alt="" />
            </div>
            <div className = 'bodyPart'>
                <div className = 'container'>
                    <div className = 'row d-flex align-items-center justify-content-between banner'>
                        <div className = 'col-md-6 text'>
                            <h2>{strLeague}</h2>
                            <h5><FontAwesomeIcon icon={faHistory} /> Founded: {dateFirstEvent}</h5>
                            <h5><FontAwesomeIcon icon={faFlag}/> Country: {strCountry}</h5>
                            <h5><FontAwesomeIcon icon={faFutbol}/> Sports type: {strSport}</h5>
                            <h5><FontAwesomeIcon icon={faMars}/> Gender: {strGender}</h5>
                        </div>
                        <div className = 'col-md-6 image'>
                            <img src={bannerImage} alt="players" />
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cupiditate unde similique, sed dolores exercitationem suscipit enim temporibus eaque ab facere voluptatem libero laborum dolorum culpa eveniet nobis id laboriosam cum repellendus repudiandae? Sint saepe facere, ducimus porro modi ipsa veritatis laborum deserunt. Labore voluptates repellat minus. Earum odit qui fugit excepturi architecto ad et voluptatum magni! Accusamus maiores molestias dolores esse unde iste quasi sit consequatur velit veniam. Impedit repellat quisquam sunt fugiat iusto tempora ipsam non iste voluptates aspernatur accusamus autem illum, libero aliquam totam ex dolor nemo perferendis incidunt eaque est vero quas eligendi recusandae. Reprehenderit, aspernatur.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nemo debitis accusamus distinctio perspiciatis ea aliquam repudiandae quas consequuntur et, qui, a est quos excepturi. Quas error voluptatibus quos. Libero ea quasi beatae. Libero atque, omnis optio veritatis corrupti aut. Nemo dolorem voluptas ratione tempora harum architecto neque, dignissimos aperiam beatae quia culpa quas sed esse voluptates. Exercitationem est deleniti doloremque beatae quod assumenda! Quibusdam non nihil minima veniam, modi reprehenderit vitae repellat quam sint laboriosam sit blanditiis dignissimos necessitatibus aspernatur, pariatur delectus unde, nesciunt ipsam quia. Nam quaerat error maxime, sapiente sunt, nesciunt, fuga aperiam officiis enim soluta autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sapiente repellat modi soluta deleniti dignissimos explicabo adipisci eum consectetur inventore doloremque, odit similique fugit amet dolor obcaecati. Dignissimos molestias recusandae voluptas facere! Fuga ex fugiat error inventore nam odit itaque totam aliquid quo autem dolores dolorem perferendis, dignissimos aut placeat veritatis, ea sequi obcaecati quasi aliquam animi vel. Soluta quas autem obcaecati rem corrupti consequatur. Totam vitae itaque rem accusantium, obcaecati alias, iste unde eaque temporibus sequi voluptatum ullam dolor facere consequuntur minus voluptate animi asperiores maiores voluptatem quae omnis minima harum! Quidem alias cum ipsa eos officiis ab praesentium?</p>
                    <div className = 'fontawsome'>
                        {/* <FontAwesomeIcon icon={f09a}/>
                        <FontAwesomeIcon icon={f09a}/>
                        <FontAwesomeIcon icon={f09a}/>
                        <i class="fab fa-facebook"></i> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetails;