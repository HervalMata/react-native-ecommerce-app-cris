import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface Props {
    colors: any;
    title: string;
    subtitle: string;
}

export default function AuthHeader({ colors, title, subtitle }: Props) {
    const router = useRouter();

    return (
        <>
            <TouchableOpacity
                style={[
                    styles.backButton,
                    {
                        backgroundColor: colors.card,
                    }
                ]}
                onPress={() => router.replace("/")}>
                <Ionicons name="chevron-back" size={28} color={colors.text} />
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <Text style={[
                    styles.subtitle,
                    {
                        color: colors.subText
                    }
                ]}>{subtitle}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    backButton: {
        height: 58,
        width: 58,
        borderRadius: 29,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginLeft: 24,
    },
    header: {
        width: 370,
        marginTop: 25,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: "700",
    },
    subtitle: {
        marginTop: 10,
        fontSize: 18,
        textAlign: "center",
    },
})
