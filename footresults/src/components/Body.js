import React from 'react';
import { useEffect, useState } from 'react'
import Card from './Card';

const Body = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=96bd1e902874e597a4a89122dcd0e84607eccdd5307c107a37601d74b2839d33")
            .then(res => res.json())
            .then(res => setData(res.result));
    }, [])
    return (
        <div className="body">
            {
                data.map((fixtures, index) => {
                    return <Card key={index} fixtures={fixtures} />
                })
            }
        </div>
    );
};

export default Body;