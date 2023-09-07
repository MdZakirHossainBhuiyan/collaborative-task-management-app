import React from 'react';
import '../TeamLists/TeamLists.css';

const TeamList = ({team}) => {
    const {id, teamName, description} = team;

    return (
        <div className='teamCard'>
            <div className='cardNumber'>
                <h5>{id}</h5>
            </div>
            <div className='cardTitle'>
                <h4>{teamName}</h4>
            </div>
            <div className='cardDescription'>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TeamList;