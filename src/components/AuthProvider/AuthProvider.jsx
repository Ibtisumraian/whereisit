import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(true);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()


    const userSignUpWithEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignInWithEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userSignInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            if (currentUser?.email) {
                const userData = { email: currentUser.email }
                axios.post('https://lost-and-found-server-mu.vercel.app/jwt', userData, {
                    withCredentials: true
                })
                .then(res=>
                    console.log("token after jwt",res.data)   
                )
                .catch(error=>{
                    console.log(error);
                    
                })
            }
        })
        return () => {
            unsubscribe()
        }
    },[])
    const info = {
        user,
        loading,
        userSignUpWithEmailPass,
        userSignInWithEmailPass,
        userSignInWithGoogle
    }
    return (
        <AuthContext value={info}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;