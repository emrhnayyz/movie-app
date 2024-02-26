import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { auth } from '../auth/firebase';
import { toastErrorNotify, toastSuccessNotify } from '../helpers/ToastNotify';


const { createContext } = require("react");

export const AuthContex = createContext();



const AuthContextProvider = ({ children }) => {

    const createUser = async (email, password) => {

        try {

            let userCredidental = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            toastSuccessNotify("Registered Succesfully")
            console.log(userCredidental);
            
        } catch (error) {
            console.log(error);
            toastErrorNotify(error.message)
        }
        
        

    }

    const values = {createUser}
    return (
        <AuthContex.Provider value={values}>
            {children}
        </AuthContex.Provider>
    )
}

export default AuthContextProvider