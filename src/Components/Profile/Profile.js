import React, { useContext, useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';

import sampleProfile from "../../Images/sample-profile.jpg";
import { UserContext } from '../../App';

const Profile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className='profilePage'>
            <Header />
            <div className='profileContentBody'>
                <div className='imageSide'>
                    <img src={loggedInUser?.image} alt="sample profile pic" />
                </div>
                <div className='informationSide'>
                    <h3>{loggedInUser?.userName}</h3>
                    <p>{loggedInUser?.bio}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;