import React from 'react';
import './TeamLists.css';
import TeamList from '../TeamList/TeamList';

const TeamLists = () => {
    const teamList = JSON.parse(localStorage.getItem("teamLists"));

    return (
        <div className='teamListArea'>
            {
                teamList?.map((team, index) => <TeamList index={index} key={team?.id} team={team} />)
            }
        </div>
    );
};

export default TeamLists;