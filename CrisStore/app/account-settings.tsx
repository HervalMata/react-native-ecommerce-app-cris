import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function AccountSettingScreen() {
    const router = useRouter();

    const [faceId, setFaceId] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [location, setLocation] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <SafeAreaView
            style={styles.container}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => router.back()}>
                        <Ionicons name="chevron-back" size={28} color="#1D1E20" />
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        Configurações da Conta
                    </Text>
                    <View style={{ width: 56 }} />
                </View>

                {/* Account Section */}
                <Text style={styles.sectionTitle}>
                    Conta
                </Text>

                <SettingItem
                    icon={
                        <Ionicons name="notifications-outline" size={28} color="#8F959E" />
                    }
                    title="Configurações de Notificações"
                />

                <SettingItem
                    icon={
                        <Feather name="shopping-cart" size={28} color="#8F959E" />
                    }
                    title="Endereço de Entrega"
                />

                <SettingItem
                    icon={
                        <Feather name="credit-card" size={28} color="#8F959E" />
                    }
                    title="Informações de Pagamento"
                />

                <SettingItem
                    icon={
                        <Feather name="trash" size={28} color="#8F959E" />
                    }
                    title="Remover Conta"
                />

                {/* App Settings */}
                <Text style={[
                    styles.sectionTitle,
                    {
                        marginTop: 45,
                    }
                ]}
                >
                    Configurações do APP
                </Text>

                <SwitchItem title="Habilitar Face ID para Login" value={faceId} onValueChange={setFaceId} />
                <SwitchItem title="Habilitar Notificações Instãntaneas" value={notifications} onValueChange={setNotifications} />
                <SwitchItem title="Habilitar Localização" value={location} onValueChange={setLocation} />
                <SwitchItem title="Modo Escuro" value={darkMode} onValueChange={setDarkMode} />
            </ScrollView>
        </SafeAreaView>
    )

}

function SettingItem({ icon, title}: { icon: React.ReactNode; title: string }) {
    return (
        <TouchableOpacity style={styles.row}>
            <View style={styles.left}>
                {icon}
                <Text style={styles.rowText}>
                    {title}
                </Text>
            </View>
            <Ionicons name="chevron-forward" size={26} color="#8F959E" />
        </TouchableOpacity>
    )
}

function SwitchItem({title, value, onValueChange}: { title: string, value: boolean, onValueChange: (value: boolean) => void }) {
    return (
        <View style={styles.row}>
            <Text style={styles.rowText}>{title}</Text>
            <Switch
                value={value}
                onValueChange={onValueChange}
                trackColor={{ false: "#E7E7E7", true: "#5B9CF6" }}
                thumbColor="#FFFFFF"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fB",
        paddingHorizontal: 24,
    },
    header: {
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    backButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#1D1E20",
    },
    sectionTitle: {
        marginTop: 45,
        marginBottom: 20,
        fontSize: 34,
        fontWeight: "700",
        color: "#1D1E20",
    },
    row: {
        height: 88,
        borderBottomWidth: 1,
        borderBottomColor: "#E7E8EA",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
    },
    rowText: {
        marginLeft: 22,
        fontSize: 22,
        fontWeight: "500",
        color: "#1D1E20",
    }
})
