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

export default function RegisterScreen() {
    const router = useRouter();
    // @ts-ignore
    const { colors } = useTheme();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        setLoading(true);

        // TODO: Register API

        setTimeout(() => {
            setLoading(false);
            router.replace("/(tabs)/home");
        }, 1500);
    };

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
                        title="Criar Conta"
                        subtitle={
                            "Vamos criar uma conta juntos"
                        }
                        color={colors}
                    />

                    <View style={styles.form}>
                        <AuthInput
                            label="Nome"
                            placeholder="Seu Nome"
                            value={name}
                            onChangeText={setName}
                            color={colors}
                        />

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
                            placeholder="******"
                            value={password}
                            onChangeText={setPassword}
                            color={colors}
                        />

                        <PrimaryButton
                            title="Cadastrar"
                            loading={loading}
                            onPress={handleRegister}
                            color={colors}
                        />

                        <SocialButton
                            title="Entrar com Google"
                            image={require("../../assets/icons/google.png")}
                            onPress={() => {}}
                            color={colors}
                        />

                        <View style={styles.bottom}>
                            <Text style={[
                                styles.bottomText,
                                {
                                    color: colors.subText ,
                                }
                            ]}
                            >
                                Já tem uma conta?
                            </Text>

                            <TouchableOpacity
                                onPress={() => router.push("//(auth)/login")}
                            >
                                <Text style={[
                                    styles.signin,
                                    { color: colors.primary }
                                ]}
                                >
                                    {" "}Entrar
                                </Text>
                            </TouchableOpacity>
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
    bottom: {
        marginTop: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    bottomText: {
        fontSize: 17,
    },
    signin: {
        marginLeft: 6,
        fontSize: 17,
        fontWeight: "700",
    },
    content: {
        flexGrow: 1,
        paddingBottom: 40,
    }
})
