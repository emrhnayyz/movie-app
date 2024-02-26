import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../auth/firebase';
import { toastErrorNotify, toastSuccessNotify } from '../helpers/ToastNotify';
import { useNavigate } from 'react-router-dom';


const { createContext } = require("react");

export const AuthContex = createContext();



const AuthContextProvider = ({ children }) => {

    let navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState()

    const createUser = async (email, password) => {

        try {

            let userCredidental = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            toastSuccessNotify("Registered Succesfully")
            navigate("/")
            console.log(userCredidental);

        } catch (error) {
            console.log(error);
            toastErrorNotify(error.message)
        }



    }

    const signIn = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            toastSuccessNotify("Logged in Successfully")
            navigate("/")
        } catch (error) {
            toastErrorNotify(error.message)
        }
    }


    const logOut = () => {
        signOut(auth)
        toastSuccessNotify("Logged out successfully!")
    }

    const userObserver = (auth, user) => {
        if (user) {
            const { email, displayName, photoURL, } = user
            setCurrentUser(email,displayName,photoURL)
        } else {
            setCurrentUser(false)
        }
    }

    const values = { createUser, signIn, logOut,userObserver }
    return (
        <AuthContex.Provider value={values}>
            {children}
        </AuthContex.Provider>
    )
}

export default AuthContextProvider