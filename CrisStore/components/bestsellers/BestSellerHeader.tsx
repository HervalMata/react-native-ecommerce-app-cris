import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Feather, Ionicons } from "@expo/vector-icons";

import { useRouter } from "expo-router";

export default function BestSellerHeader() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.replace("/")}>
                <Ionicons name="chevron-back" size={30} color="#1D1E20" />
            </TouchableOpacity>
            <Text style={styles.title}>Mais Vendidos</Text>
            <View style={styles.right}>
                <TouchableOpacity>
                    <Feather name="sliders" size={28} color="#1D1E20" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="search" size={30} color="#1D1E20" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        paddingHorizontal: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    backButton: {
        height: 66,
        width: 66,
        borderRadius: 33,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        color: "#1D1E20",
    },
    right: {
        flexDirection: "row",
        gap: 20,
    }
})
