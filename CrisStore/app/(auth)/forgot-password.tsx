import { useRouter } from "expo-router";
import React, { useState } from "react";
import {KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, View} from "react-native";

import AuthHeader from "../../components/auth/AuthHeader";
import AuthInput from "../../components/auth/AuthInput";
import PrimaryButton from "../../components/auth/PrimaryButton";

import useTheme from "@/hooks/useTheme";

export default function ForgotPasswordScreen() {
    const router = useRouter();
    // @ts-ignore
    const { colors } = useTheme();

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleContinue = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            //router.push("/(auth)/verification");
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
                    contentContainerStyle={styles.content}
                >
                    <AuthHeader
                        title="Recuperar Senha"
                        subtitle={
                            "Por favor digite seu email para Receber um código de verificalção"
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

                        <View style={{ height: 38 }} />

                        <PrimaryButton
                            title="Continuar"
                            loading={loading}
                            onPress={handleContinue}
                            colors={colors}
                        />
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
    form: {
        marginTop: 52,
        paddingHorizontal: 24,
    },
    content: {
        flexGrow: 1,
        paddingBottom: 40,
    }
})
