import { Ionicons } from "@expo/vector-icons";

import React, {useState} from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface Props {
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (value: string) => void;
    colors: any;
}

export default function PasswordInput({ label, placeholder, value, onChangeText, colors }: Props) {
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={[
                styles.label,
                {
                    color: colors.text,
                }
            ]}
        >
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
                    secureTextEntry={secureTextEntry}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TouchableOpacity
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                    activeOpacity={0.7}
                >
                    <Ionicons
                        name={secureTextEntry ? "eye-off-outline" : "eye-outline"}
                        size={28}
                        color={colors.subText}
                    />
                </TouchableOpacity>
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
        flexDirection: "row",
        alignItems: "center",
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
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
    }
})
