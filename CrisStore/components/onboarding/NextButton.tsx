import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
    title: string;
    onPress: () => void;
    colors: any;
}

export default function NextButton({ title, onPress, colors }: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={[
                styles.button,
                {
                    backgroundColor: colors.primary,
                }
            ]}
            onPress={onPress}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 170,
        height: 62,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    },
    text: {
        fontSize: 22,
        fontWeight: "600",
        color: "#FFFFFF",
    }
})
