import React, { useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { createContext } from 'react';
import app from '../components/FireBase/FireBase.config';

/* using AuthContext to provide data every component*/ 
export const AuthContext = createContext()


/*set auth and get app from firebase*/ 
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState({})

    /*set loader to get the user*/ 
    const [loading, setLoading] = useState(true)

    /*set GoogleAuthProvider to signInWithGooglePopUp*/ 
    const googleProvider = new GoogleAuthProvider();


    /*user registration form*/ 
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    /*user signin after registration*/ 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    /*if user want to logOut from page*/ 
    const logOut = () => {
        return signOut(auth);
    }


    /*use signInWithGoogle if user want*/ 
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }


    /*using useEffect to get user*/
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser);
            setLoading(false)
            console.log('current user', currenUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        register,
        signIn,
        logOut,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;