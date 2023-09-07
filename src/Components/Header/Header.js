import React, { useContext } from 'react';
import './Header.css';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let navigate = useNavigate();

    const handleRoute = (route) => {
        if(route === "profile"){
            navigate("/profile", { replace: true});
        }

        if(route === "home"){
            navigate("/index", { replace: true});
        }
        
        if(route === "logout"){
            setLoggedInUser(null);
            navigate("/", {replace: true});
        }
    }

    return (
        <div className='headerArea'>
            <div className='headerLeft'>
                Hi {loggedInUser?.userName}
            </div>
            <div className='headerRight'>
                <button onClick={() => handleRoute("home")}>Home</button>
                <button onClick={() => handleRoute("profile")}>Profile</button>
                <button onClick={() => handleRoute("logout")}>Logout</button>
            </div>
        </div>
    );
};

export default Header;