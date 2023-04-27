import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()
    const { logout } = useAuth()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>I am the HomeScreen for Dinder!</Text>
            <Button title="Go to chat screen" onPress={() => navigation.navigate("Chat")} />

            <Button title="Logout" onPress={logout} />
        </View>
    )
}

export default HomeScreen