import React from 'react';
import Body from '../components/Body';
import Header from '../components/Header';
import ListLeague from '../components/ListLeague';
import '../pages/_home.css'

const Home = () => {
    return (
        <div className="body">
            <Header />
            <ListLeague />
            <Body />

        </div>
    );
};

export default Home;