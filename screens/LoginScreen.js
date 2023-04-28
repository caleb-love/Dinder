import {View, Text, ImageBackground, TouchableOpacity } from "react-native"
import React, { useLayoutEffect } from "react"
import useAuth from "../hooks/useAuth"
import tw from "tailwind-rn"

const LoginScreen = () => {
    const { signinWithGoogle, loading } = useAuth();

    return (
        <View style={tw("flex-1")}>
            <ImageBackground
                resizeMode="cover"
                style={tw("flex-1")}
                source={require('../images/bcg.png')}
            >
                <TouchableOpacity
                    onPress={signinWithGoogle}
                    style={{
                        marginHorizontal: "25%",
                        position: "absolute",
                        bottom: "25%",
                        borderRadius: 15,
                        padding: "4%",
                        backgroundColor: "white",
                    }}
                >
                    <Text style={tw("text-center font-semibold")}>
                        {loading ? "Loading..." : "Sign to sort out dinner!"}
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default LoginScreen