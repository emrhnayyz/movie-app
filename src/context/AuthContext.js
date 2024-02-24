import React from 'react'

const { createContext } = require("react");

const AuthContex = createContext();



const AuthContextProvider = ({ children }) => {
    return (
        <AuthContex.Provider value={null}>
            {children}
        </AuthContex.Provider>
    )
}

export default AuthContextProvider