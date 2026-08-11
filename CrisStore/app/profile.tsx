import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Feather, Ionicons } from "@expo/vector-icons";

import { useRouter } from "expo-router";
import useTheme from "@/hooks/useTheme";

export default function ProfileScreen() {
    // @ts-ignore
    const { colors } = useTheme();

    const router = useRouter();

    return (
        <SafeAreaView style={[
            styles.container,
            {
                backgroundColor: colors.background,
            }
        ]}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={[
                        styles.circleButton,
                        {
                            backgroundColor: colors.card,
                        }
                    ]}
                    onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={28} color={colors.text} />
                </TouchableOpacity>
                <Text style={[
                    styles.title,
                    {
                        color: colors.text,
                    }
                ]}
                >
                    Perfil
                </Text>
                <TouchableOpacity>
                    <Feather name="edit-2" size={28} color={colors.primary} />
                </TouchableOpacity>
            </View>

            {/* Avatar */}
            <View style={styles.avatarSection}>
                <View>
                    <Image source={require("../assets/images/shoes/avatar.png")} style={styles.avatar} />
                    <TouchableOpacity style={[
                        styles.cameraButton,
                        {
                            backgroundColor: colors.primary,
                        }
                    ]}
                    >
                        <Ionicons name="camera-outline" size={24} color={colors.primary} />
                    </TouchableOpacity>
                </View>

                <Text style={[
                    styles.name,
                    {
                        color: colors.text,
                    }
                ]}
                >
                    Herval Mata
                </Text>
            </View>

            {/* Full Name */}
            <View style={styles.field}>
                <Text style={[
                    styles.label,
                    {
                        color: colors.text,
                    }
                ]}
                >
                    Nome Completo
                </Text>
                <TextInput
                    value="Herval Mata"
                    placeholder="Nome Completo"
                    placeholderTextColor="#8F959E"
                    style={[
                        styles.input,
                        {
                            backgroundColor: colors.card,
                            color: colors.text,
                        }
                    ]}
                />
            </View>

            {/* Email */}
            <View style={styles.field}>
                <Text style={[
                    styles.label,
                    {
                        color: colors.text,
                    }
                ]}
                >
                    Email
                </Text>
                <TextInput
                    value="hervalmata@test.com"
                    placeholder="Email"
                    placeholderTextColor="#8F959E"
                    style={[
                        styles.input,
                        {
                            backgroundColor: colors.card,
                            color: colors.text,
                        }
                    ]}
                />
            </View>

            {/* Password */}
            <View style={styles.field}>
                <Text style={[
                    styles.label,
                    {
                        color: colors.text,
                    }
                ]}
                >
                    Senha
                </Text>
                <TextInput
                    value="********"
                    secureTextEntry
                    placeholder="Senha"
                    placeholderTextColor="#8F959E"
                    style={[
                        styles.input,
                        {
                            backgroundColor: colors.card,
                            color: colors.text,
                        }
                    ]}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    circleButton: {
        height: 56,
        width: 56,
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
        elevation: 3,
    },
    title: {
        fontSize: 34,
        fontWeight: "700",
    },
    avatarSection: {
        alignItems: "center",
        marginTop: 50,
    },
    avatar: {
        width: 170,
        height: 170,
        borderRadius: 85,
    },
    cameraButton: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 54,
        height: 54,
        borderRadius: 27,
        alignItems: "center",
        justifyContent: "center",
    },
    name: {
        fontSize: 42,
        fontWeight: "700",
        marginTop: 24,
    },
    field: {
        marginTop: 40,
    },
    label: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 18,
    },
    input: {
        height: 72,
        borderRadius: 24,
        paddingHorizontal: 24,
        fontSize: 20,
    },
})
