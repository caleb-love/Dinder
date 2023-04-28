import { View, Text, Button, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { Component, useLayoutEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useTailwind } from 'tailwind-rn';
const tw = useTailwind

const LoginScreen = () => {
    const { signInWithGoogle, loading } = useAuth()

    return (
        <View style={tw('flex-1 h-100 w-100 bg-purple-400')}>
            <ImageBackground
                resizeMode="cover"
                style={tw('flex-1')}
                source={require("../images/bcg.png")}
            >
                <TouchableOpacity style={[
                    tw("absolute  w-52 bg-white p-4 rounded-2xl"),
                    { marginHorizontal: '25%' }]}
                >
                    <Text style={tw('font-semibold text-center')} onPress={signInWithGoogle}>Sign In & Start Eating</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default LoginScreen