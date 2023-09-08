import React, { useContext } from 'react';
import './TeamLists.css';
import TeamList from '../TeamList/TeamList';
import { UserContext } from '../../App';

const TeamLists = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const teamList = JSON.parse(localStorage.getItem("teamLists"));

    const myTeam = teamList?.filter(team => team?.teamMember.includes(loggedInUser?.userName));

    return (
        <div className='teamListArea'>
            {
                myTeam?.map((team, index) => <TeamList index={index} key={team?.id} team={team} />)
            }
        </div>
    );
};

export default TeamLists;