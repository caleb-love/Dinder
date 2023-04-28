import { View, Text, Button, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTailwind } from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons/';

const tw = useTailwind

const HomeScreen = () => {
    const navigation = useNavigation()
    // const { user, logout } = useAuth()
    // console.log(user);

    return (
    
        <SafeAreaView >
            // Header
            <View style={tw('items-center relative')}>
                <TouchableOpacity style={tw('absolute left-5 top-5')} onPress={() => navigation.navigate("Login")}>
                    <Ionicons name='person-circle-sharp' size={30} color="#D7FF90"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Logout")}>
                    <Ionicons name='pizza-sharp' size={100} color="#FF909F" />
                </TouchableOpacity>

                <TouchableOpacity style={tw('absolute left-5 top-5')} onPress={() => navigation.navigate("Chat")}>
                    <Ionicons name='chatbubbles-sharp' size={30} color="#90FFF0" />
                </TouchableOpacity>
            </View>

            // Body
            <Text>I am the HomeScreen for Dinder!</Text>
            <Button title="Go to chat screen" onPress={() => navigation.navigate("Chat")} />
            {/* <Button title="Logout" onPress={logout} /> */}
        </SafeAreaView>
    )
}

export default HomeScreen 