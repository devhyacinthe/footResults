import React from 'react';
import '../components/_card.css'

const Card = ({ fixtures }) => {
    return (
        <div className="card">
            <p className="event_status">{fixtures.event_status}</p>
            <p>
                <span>{fixtures.event_time}</span>
                <span></span>
            </p>
        </div>
    );
};

export default Card;