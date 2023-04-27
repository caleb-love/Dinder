import { View, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTailwind } from 'tailwind-rn';
import { AntDesign, Entypo, Ionicons} from '@expo/vector-icons/';

const tw = useTailwind

const HomeScreen = () => {
    const navigation = useNavigation()
    const { user, logout } = useAuth()
    console.log(user);

    return (
        <SafeAreaView>

            <View style={tw('flex-row items-center justify-between px-5')} >
                <TouchableOpacity onPress={logout}>
                    <Image style={tw('h-10 w-10 rounded-full')}
                    source={{ uri: user.photoURL }}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={tw('h-14 w-14')} source={require("../images/logo.jpeg")} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Ionicons name='chatbubbles-sharp' size={30} color="#FF5864" />
                </TouchableOpacity>
            </View>

            <Text>I am the HomeScreen for Dinder!</Text>
            <Button title="Go to chat screen" onPress={() => navigation.navigate("Chat")} />
            <Button title="Logout" onPress={logout} />
        </SafeAreaView>
    )
}

export default HomeScreen 