import React from 'react';
import '../TeamLists/TeamLists.css';
import { useNavigate } from 'react-router-dom';

const TeamList = ({team, index}) => {
    const {teamTitle, description} = team;
    let navigate = useNavigate();

    const handleClick = () => {
        navigate(`/team/${team?.id}`, {replace: true})
    }

    return (
        <div onClick={handleClick} className='teamCard'>
            <div className='cardNumber'>
                <h5>{index+1}</h5>
            </div>
            <div className='cardTitle'>
                <h4>{teamTitle}</h4>
            </div>
            <div className='cardDescription'>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TeamList;