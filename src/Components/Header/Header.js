import React, { useContext } from 'react';
import './Header.css';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className='headerArea'>
            <div className='headerLeft'>
                Hi {loggedInUser?.userName}
            </div>
            <div className='headerRight'>
                <button>Profile</button>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default Header;