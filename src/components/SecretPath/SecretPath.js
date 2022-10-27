import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const SecretPath = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <svg width="500px" height="500px" viewBox="0 0 500 500">
            <rect x="0" y="0" width="100" height="100" fill="#feac5e">
                <animate attributeName="x" from="0" to="500" dur="2s" repeatCount="indefinite" />
            </rect>
        </svg>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default SecretPath;