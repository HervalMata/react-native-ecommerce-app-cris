import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import useTheme from "@/hooks/useTheme";
import React from "react";

export default function DetailsHeader() {
    const router = useRouter();
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity
                style={[
                    styles.iconContainer,
                    {
                        backgroundColor: colors.card,
                    }
                ]}
                onPress={() => router.replace("/")}>
                <Feather name="chevron-left" size={28} color={colors.text} />
            </TouchableOpacity>
            {/* Title */}
            <Text style={[
                styles.title,
                {
                    color: colors.text,
                }
            ]}>
                Tênis Masculino
            </Text>
            {/* Cart Button */}
            <TouchableOpacity style={[
                styles.iconContainer,
                {
                    backgroundColor: colors.card,
                }
            ]}
                 onPress={() => router.replace("/")}>
                <Feather name="shopping-bag" size={24} color={colors.text} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        marginTop: 20,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 10,
        elevation: 4,
    },
    iconContainer:{
        width: 58,
        height: 58,
        borderRadius: 29,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "700",
        color: "#1D1E20",
    }
})
