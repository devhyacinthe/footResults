import React from 'react';
import '../components/_card.css'

const Card = ({ fixtures }) => {
    return (
        <div className="card">
            <p id="event_status">
                {fixtures.event_status}
                <p id="heure">{fixtures.event_time}</p>
            </p>

            <div id="match"><img src={fixtures.home_team_logo} alt="" height="45px" /><span id="mat">{fixtures.event_home_team}</span></div>
            <div id="as"><span>{fixtures.event_final_result}</span></div>
            <div id="matcha"><span>{fixtures.event_away_team}</span><img src={fixtures.away_team_logo} alt="" height="45px" /></div>
            <div id="stade">{fixtures.event_stadium}</div>
            <div><img src={fixtures.league_logo} alt="" height="55px" /></div>



        </div>
    );
};

export default Card;