import React from 'react';
import { Link } from 'react-router-dom';
import '../components/_listLeague.css'

const ListLeague = () => {



    return (
        <div className="listContainer">
            <ul className="list">
                <Link className="p1" to="/PremierLeague">Premier League</Link>
                <Link className="p2" to="/Liga">Liga</Link>
                <Link className="p4" to="/Ligue1">Ligue 1</Link>
                <Link className="p5" to="/Bundesliga">Bundesliga</Link>
                <Link className="p6" to="/SerieA">SerieA</Link>
                <Link className="p7" to="/Eredivisie">Eredivisie</Link>
                <Link className="p8" to="/LigaPortugalBwin">Liga Portugal Bwin</Link>
            </ul>
        </div>
    );
};

export default ListLeague;