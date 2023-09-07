import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateOutlet = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return loggedInUser?.email ? <Outlet /> : <Navigate to="/" />
};

export default PrivateOutlet;