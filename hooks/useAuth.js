import React, { createContext, useContext } from 'react'
// import * as AuthSession from 'expo-auth-session'

const AuthContext = createContext({})

const config = {
    androidClientId: '898054924165-34jj9u5k0mlgh9ku2gk04btutqbj2ai5.apps.googleusercontent.com',
    iosClientId: '898054924165-iucbbr3m02n2mgidoetc4785i8kacfq2.apps.googleusercontent.com',
    scopes: ["profile", "email"],
    permissions: ["public_profile", "email", "gender", "location"],
}

export const AuthProvider = ({ children }) => {


    
    const signInWithGoogle = async () => {
        Google.logInAsync(config).then(async (logInResult) => {
            if (logInResult.type === 'success') {
                //login
            }
        })
    }

    return (
        <AuthContext.Provider
            value={{
                user: "null",
                signInWithGoogle,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}