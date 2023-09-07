import React, { useContext } from 'react';
import './Index.css';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Index = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <Header />
        </div>
    );
};

export default Index;