import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import { createContext, useState } from "react";
import PrivateOutlet from "./Components/PrivateOutlet/PrivateOutlet";
import Index from "./Components/Index/Index";
import Profile from "./Components/Profile/Profile";
import TeamDetails from "./Components/TeamDetails/TeamDetails";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route path="/*" element={<PrivateOutlet />} >
            <Route path="index" element={<Index />} />
            <Route path="profile" element={<Profile />} />
            <Route path="team/:id" element={<TeamDetails />} />
          </Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
