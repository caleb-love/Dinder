import React, { createContext, useContext } from 'react'
import * as AuthSession from 'expo-auth-session'

const AuthContext = createContext({})


export const AuthProvider = ({ children }) => {

const signInWithGoogle = async () => {
await Google.logInAsync()
}

    return (
        <AuthContext.Provider
            value={{
                user: "caleb",
            }}
        >
            {children}</AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}