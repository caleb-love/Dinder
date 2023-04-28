const RESTAURANTS = [
    {
        id: 1,
        name: "McDonalds"
    },
    {
        id: 2,
        name: "Burger King"
    },
    {
        id: 3,
        name: "Subway"
    },
]

import {
    View,
    SafeAreaView,
    Platform,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import tw from "tailwind-rn";


const HomeScreen = () => {
    // const { logout, user } = useAuth();
    const navigation = useNavigation();

    return (
        <SafeAreaView
            style={{
                paddingTop: Platform.OS === "android" ? 50 : 0,
                flex: 1,
            }}
        >
            <View
                style={{
                    alignItems: "center",
                    marginHorizontal: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <TouchableOpacity onLongPress={logout}>
                    <Ionicons style={{ height: 50, width: 50, borderRadius: 50 }} name='person-circle-sharp' size={30} color="#D7FF90" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Logout")}>
                    <Ionicons name="pizza-outline" size={100} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                    <Ionicons size={30} name="chatbubbles-sharp" color="#90FFF0" />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, margin: -6 }}>

                <View
                    style={[
                        { bottom: Platform.OS === "android" ? 35 : 10 },
                        tw("absolute flex-row items-center justify-evenly right-0 left-0"),
                    ]}
                >
                    <AntDesign name="heart" size={30} color="green" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen