import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { auth } from '../auth/firebase';


const { createContext } = require("react");

export const AuthContex = createContext();



const AuthContextProvider = ({ children }) => {

    const createUser = async (email, password) => {

        try {

            let userCredidental = await createUserWithEmailAndPassword(
                auth,
                email,
                password)
    
            console.log(userCredidental);
            
        } catch (error) {
            console.log(error);
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