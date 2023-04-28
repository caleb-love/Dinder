import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { View, Text, Button, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import useAuth from '../hooks/useAuth';
import { Ionicons } from '@expo/vector-icons/';

const tw = useTailwind

const HomeScreen = () => {
    const navigation = useNavigation()
    // const { user, logout } = useAuth()
    // console.log(user);

    return (
    
        <SafeAreaView >
            <View style={tw('flex-row items-center justify-between px-5')}>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Ionicons style={tw('h-1 w-10')} name='person-circle-sharp' size={30} color="#D7FF90"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Logout")}>
                    <Ionicons name='pizza-sharp' size={100} color="#FF909F" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                    <Ionicons style={tw('h-1 w-10')} name='chatbubbles-sharp' size={30} color="#90FFF0" />
                </TouchableOpacity>
            </View>

            <Text>I am the HomeScreen for Dinder!</Text>
            <Button title="Go to chat screen" onPress={() => navigation.navigate("Chat")} />
        </SafeAreaView>
    )
}

export default HomeScreen 