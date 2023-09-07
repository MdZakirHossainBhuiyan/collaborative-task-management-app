import React, { useContext } from 'react';
import './Index.css';
import { UserContext } from '../../App';

const Index = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <div>
            Hi {loggedInUser?.userName}
        </div>
    );
};

export default Index;