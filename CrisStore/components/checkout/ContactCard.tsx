import { Image, StyleSheet, Text, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function ContactCard() {
    return (
        <View style={styles.card}>
            <Text style={styles.heading}>
                Informações Para Contato
            </Text>
            {/* Email */}
            <View style={styles.infoRow}>
                <View style={styles.iconBox}>
                    <Feather name="mail" size={28} color="#1D1E20" />
                </View>
                <View style={styles.center}>
                    <Text style={styles.mainText}>
                        xyz@gmail.com
                    </Text>
                    <Text style={styles.label}>
                        Email
                    </Text>
                </View>
                <Feather name="edit-2" size={28} color="#8F959E" />
                {/* Phone */}
                <View style={styles.infoRow}>
                    <View style={styles.iconBox}>
                        <Feather name="phone" size={28} color="#1D1E20" />
                    </View>
                    <View style={styles.center}>
                        <Text style={styles.mainText}>
                            +55 (21) 99999-9999
                        </Text>
                        <Text style={styles.label}>
                            Celular
                        </Text>
                    </View>
                    <Feather name="edit-2" size={28} color="#8F959E" />
                </View>
                {/* Address */}
                <Text>
                    Endereço
                </Text>
                <View style={styles.addressRow}>
                    <Text style={styles.address}>
                        Rua Centro, 100, Alto, São Paulo-SP
                    </Text>
                    <Ionicons name="chevron-down" size={28} color="#8F959E" />
                </View>
                {/* Map */}
                <Image source={require("../../assets/images/shoes/map.png")} style={styles.map} resizeMode="cover" />
                {/* Payment */}
                <Text style={styles.heading}>
                    Métodos de Pagamento
                </Text>
                <View style={styles.infoRow}>
                    <View style={styles.iconBox}>
                        <Image
                            source={require("../../assets/images/shoes/paypal.png")}
                            style={{ width: 42, height: 42}}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.center}>
                        <Text style={styles.mainText}>
                            Cartão de Crédito
                        </Text>
                        <Text style={styles.label}>
                            **** **** 0696 4629
                        </Text>
                    </View>
                    <Ionicons name="chevron-down" size={28} color="#8F959E" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 24,
        backgroundColor: "#f7f7f7",
        borderRadius: 35,
        padding: 24,
    },
    heading: {
        fontSize: 20,
        fontWeight: "700",
        color: "#1D1E20",
        marginBottom: 24,
    },
    infoRow: {
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 24,
    },
    iconBox: {
        width: 60,
        height: 60,
        borderRadius: 20,
        backgroundColor: "#f7f7f7",
        alignItems: "center",
        justifyContent: "center",
    },
    center: {
        flex: 1,
        marginLeft: 18,
    },
    mainText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#1D1E20",
    },
    label: {
        fontSize: 16,
        color: "#8F959E",
        marginTop: 4,
    },
    addressRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
    },
    address: {
        fontSize: 17,
        flex: 1,
        color: "#8F959E",
    },
    map: {
        width: "100%",
        height: 150,
        borderRadius: 24,
        marginBottom: 32,
    }
})
