import React from 'react';
import { Navigate } from 'react-router';
import useAuth from '../../hooks/useAuth';


const PrivateRouteTwo = ({children}) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <div className='w-[100px] mx-auto my-52'><span className="loading loading-bars loading-xl"></span></div>
    }
    if (user) {
        return <Navigate  to='/'></Navigate>
    }
    return children;
};

export default PrivateRouteTwo;