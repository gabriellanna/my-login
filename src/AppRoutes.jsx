
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import LoginPage from './pages/LoginPage/index';
import HomePage from './pages/HomePage/index';

import { AuthContext } from ".contexts/auth";
import { useState } from "react";



const AppRoutes = () => {

    const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log("login auth", { email, password });
        setUser({ id: "123", email });
    };

    const logout = () => {
        console.log("logout");
    };


    return(
        <Router>
            <AuthContext.Provider value={{ authenticated: !!user, user, login, logout}}>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/" element={<HomePage />} />
                </Routes>
            </AuthContext.Provider>
        </Router>
    )
}

export default AppRoutes;