import { Button, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useLayoutEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'
import { useTailwind } from 'tailwind-rn';
const tw = useTailwind

const LoginScreen = () => {
    const { signInWithGoogle, loading } = useAuth()
    // const navigation = useNavigation()

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerShown: false
    //     })
    // })

    return (
        <View style={tw('flex-1')}>
            <ImageBackground
                resizeMode="cover"
                style={tw('flex-1')}
                source={{ url: "https://i.pinimg.com/originals/13/6f/fc/136ffc1c10a56e0735eaa34455a5cafe.png" }}
            >
                <TouchableOpacity style={[
                    tw("absolute bottom-40 w-52 bg-white p-4 rounded-2xl"),
                    { marginHorizontal: '25%' }]}
                >
                    <Text style={tw('font-semibold text-center')} onPress={signInWithGoogle}>Sign In & Start Eating</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default LoginScreen