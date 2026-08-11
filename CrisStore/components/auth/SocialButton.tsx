import React from "react";
import {ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity} from "react-native";

interface Props {
    title: string;
    image: any;
    onPress: () => void;
    colors: any;
}

export default function SocialButton({ title, image, onPress, colors }: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.85}
            onPress={onPress}
            style={[
                styles.button,
                {
                    backgroundColor: colors.card,
                }
            ]}
        >
            <Image source={image} resizeMode="contain" style={styles.icon} />
            <Text style={[
                styles.text,
                {
                    color: colors.text,
                }
            ]}>
                    {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        height: 65,
        borderRadius: 35,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.08,
        shadowRadius: 15,
        elevation: 6,
    },
    icon: {
        width: 28,
        height: 28,
        marginRight: 12,
    },
    text: {
        fontSize: 18,
        fontWeight: "600",
    }
})
