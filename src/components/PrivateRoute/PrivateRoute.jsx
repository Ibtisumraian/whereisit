import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const { user, loading } = useAuth()

    if (loading) {
        return <div className='w-[100px] mx-auto my-52'><span className="loading loading-bars loading-xl"></span></div>
    }
    if (!user) {
        return <Navigate state={location?.pathname} to='/Signin'></Navigate>
    }
    return children;
};

export default PrivateRoute;