
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import LoginPage from './pages/LoginPage/index';
import HomePage from './pages/HomePage/index';

import { AuthProvider, AuthContext } from "./contexts/auth";
import { useState, useContext } from "react";



const AppRoutes = () => {
    const Private = ({ children }) =>{
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className="loading">Carregando...</div>;
        }

        if (!authenticated) {
            return <Navigate to="/login" />;
        }

        return children;
    };
    
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/" element={<Private><HomePage /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;
