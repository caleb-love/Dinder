import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import useAuth from '../hooks/useAuth'

const LoginScreen = () => {
    const { signInWithGoogle } = useAuth()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login to the Dinder</Text>
            <Button title='login' onPress={signInWithGoogle} />

            {/* <Button
                title="Sign in with Google"
                disabled={!request}
                onPress={() => {
                    promptAsync();
                }}
            /> */}
        </View>
    )
}

export default LoginScreen