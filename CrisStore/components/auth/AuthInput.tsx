import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (value: string) => void;
    keyboardType?: | "default" | "email-address" | "numeric" | "phone-pad";
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    colors: any;
}

export default function AuthInput(
    {
        label,
        placeholder,
        value,
        onChangeText,
        keyboardType = "default",
        autoCapitalize = "none",
        colors
    }: Props) {
    return (
        <View style={styles.container}>
            <Text style={[
                styles.label,
                {
                    color: colors.text
                }
            ]}>
                {label}
            </Text>
            <View style={[
                styles.inputContainer,
                {
                    backgroundColor: colors.card,
                    borderColor: colors.background === "#FFFFFF" ? "#E5E7EB" : "#3A3A3A",
                }
            ]}>
                <TextInput
                    style={[
                        styles.input,
                        {
                            color: colors.text
                        }
                    ]}
                    placeholder={placeholder}
                    placeholderTextColor={colors.subText}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 28,
    },
    label: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 14,
    },
    inputContainer: {
        height: 64,
        borderRadius: 32,
        justifyContent: "center",
        paddingHorizontal: 22,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },
    input: {
        fontSize: 18,
        fontWeight: "500",
    }
})
