import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRouts = ({ children, loading }) => {
    const { user } = useContext(AuthContext);
    if (loading) {
        return <div className="btn loading">Loading...</div>
    }
    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRouts;