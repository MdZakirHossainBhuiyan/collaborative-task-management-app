import React, { useContext } from 'react';
import './Index.css';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import TeamLists from '../TeamLists/TeamLists';

const Index = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <Header />
            <div className='createTeamArea'>
                <h1>Collaborative Task Management App</h1>
                <button onClick={}>Create Team</button>
            </div>
            <TeamLists />
        </div>
    );
};

export default Index;