import { useRouter } from "expo-router";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import AuthHeader from "../../components/auth/AuthHeader";
import AuthInput from "../../components/auth/AuthInput";
import PrimaryButton from "../../components/auth/PrimaryButton";
import PasswordInput from "../../components/auth/PasswordInput";
import SocialButton from "../../components/auth/SocialButton";

import useTheme from "@/hooks/useTheme";

export default function LoginScreen() {
    const router = useRouter();
    // @ts-ignore
    const { colors } = useTheme();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);

        // TODO: Login API

        setTimeout(() => {
            setLoading(false);
            router.replace("/(tabs)/home");
        }, 1500);
    };

    const handleGoogleLogin = () => {
        console.log("Google Login");
    }

    return (
        <SafeAreaView
            style={[
                styles.container,
                {backgroundColor: colors.background}
            ]}
        >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    contentContainerStyle={styles.scroll}
                >
                    <AuthHeader
                        title="Bemvindo de novo"
                        subtitle={
                            "Preencha seus dados ou continue com uma rede social"
                        }
                        colors={colors}
                    />

                    <View style={styles.form}>
                        <AuthInput
                            label="Email"
                            placeholder="Seu Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            colors={colors}
                        />

                        <PasswordInput
                            label="Senha"
                            placeholder="Sua Senha"
                            value={password}
                            onChangeText={setPassword}
                            colors={colors}
                        />

                        <TouchableOpacity
                            style={styles.forgotContainer}
                            onPress={() => router.push("/(auth)/forgot-password")}
                        >
                            <Text
                                style={[
                                    styles.forgot,
                                    { color: colors.subText }
                                ]}
                            >
                                Recuperar A Senha
                            </Text>
                        </TouchableOpacity>

                        <PrimaryButton
                            title="Entrar"
                            loading={loading}
                            onPress={handleLogin}
                            colors={colors}
                        />

                        <View style={styles.orContainer}>
                            <View
                                style={[
                                    styles.line,
                                    {
                                        backgroundColor: "#D9D9D9",
                                    }
                                ]}
                            />

                            <Text
                                style={[
                                    styles.or,
                                    { color: colors.subText }
                                ]}
                            >
                                Ou Continue com
                            </Text>

                            <View
                                style={[
                                    styles.line,
                                    {
                                        backgroundColor: "#D9D9D9",
                                    }
                                ]}
                            />

                            <SocialButton
                                title="Entrar com Google"
                                image={require("../../assets/icons/google.png")}
                                onPress={handleGoogleLogin}
                                colors={colors}
                            />

                            <View style={styles.bottom}>
                                <Text style={[
                                    styles.bottomText,
                                    {
                                        color: colors.subText ,
                                    }
                                ]}
                                >
                                    Novo Usuário
                                </Text>

                                <TouchableOpacity
                                    onPress={() => router.push("//(auth)/register")}
                                >
                                    <Text style={[
                                        styles.signup,
                                        { color: colors.primary }
                                    ]}
                                    >
                                        Criar Conta
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        paddingBottom: 40,
    },
    form: {
        marginTop: 20,
        paddingHorizontal: 24,
    },
    forgotContainer: {
        alignItems: "flex-end",
        marginTop: 18,
    },
    forgot: {
        fontSize: 16,
        fontWeight: "500",
    },
    orContainer: {
        alignItems: "center",
        flexDirection: "column",
        marginTop: 35,
    },
    line: {
        flex: 1,
        height: 1,
    },
    or: {
        marginHorizontal: 12,
        fontSize: 15,
    },
    bottom: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    bottomText: {
        fontSize: 16,
    },
    signup: {
        marginLeft: 6,
        fontSize: 16,
        fontWeight: "700",
    },
    content: {
        flexGrow: 1,
        paddingBottom: 40,
    }
})
