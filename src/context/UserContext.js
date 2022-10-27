import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
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

    /*set gitHubProvider to*/
    const gitProvider = new GithubAuthProvider();

    /*user registration form*/
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    /*user signin after registration*/
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    /*if user want to logOut from page*/
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    /*use signInWithGoogle if user want*/
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    /*use signInWithGit if user want*/ 
    const signInWithGit = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider)
    }


    /*using useEffect to get user*/
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser);
            setLoading(false)
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
        signInWithGoogle,
        updateUserProfile,
        signInWithGit
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;