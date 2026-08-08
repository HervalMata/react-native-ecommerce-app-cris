import { useRouter } from "expo-router";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

// @ts-ignore
import AuthHeader from "../../components/auth/AuthHeader";
// @ts-ignore
import AuthInput from "../../components/auth/AuthInput";
// @ts-ignore
import PrimaryButton from "../../components/auth/PrimaryButton";
// @ts-ignore
import PasswordInput from "../../components/auth/PasswordInput";
// @ts-ignore
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
                        color={colors}
                    />

                    <View style={styles.form}>
                        <AuthInput
                            label="Email"
                            placeholder="Seu E#mail"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            color={colors}
                        />

                        <PasswordInput
                            label="Senha"
                            placeholder="Sua Senha"
                            value={password}
                            onChangeText={setPassword}
                            color={colors}
                        />

                        <TouchableOpacity
                            style={styles.forgotContainer}
                            onPress={() => router.push("/(auth)/forgot-password")}
                        >
                            <Text
                                style={[
                                    styles.forgot,
                                    { color: colors.subtext }
                                ]}
                            >
                                Recuperar A Senha
                            </Text>
                        </TouchableOpacity>

                        <PrimaryButton
                            title="Entrar"
                            loading={loading}
                            onPress={handleLogin}
                            color={colors}
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
                                    { color: colors.subtext }
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
                                color={colors}
                            />

                            <View style={styles.bottom}>
                                <Text style={[
                                    styles.bottomText,
                                    {
                                        color: colors.subtext ,
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
        marginTop: 52,
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
        flexDirection: "row",
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
        marginTop: 35,
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
