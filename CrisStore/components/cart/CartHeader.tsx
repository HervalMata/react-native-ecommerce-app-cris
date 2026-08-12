import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CartHeader() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.replace("/")}>
                <Ionicons name="chevron-back" size={30} color="#1D1E20" />
            </TouchableOpacity>
            <Text style={styles.title}>
                Meu Carrinho
            </Text>
            <View style={{ width: 60 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        marginTop: 20,
        marginBottom: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    backButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
        color: "#1D1E20",
    }
})
