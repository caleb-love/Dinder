import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const ChatScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);
    return (
        <SafeAreaView
            style={{
                paddingTop: Platform.OS === "android" ? 50 : 0,
            }}
        >
            <Header title="Chat" />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>I wish I was chatting with Jess xx</Text>
            </View>
            {/* <Chatlist /> */}
        </SafeAreaView>
    );
};

export default ChatScreen;