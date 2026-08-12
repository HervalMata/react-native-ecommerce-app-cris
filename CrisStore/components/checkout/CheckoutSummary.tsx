import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
    onPaymentPress: () => void;
}

export default function CheckoutSummary({ onPaymentPress }: Props) {
    return (
        <View style={styles.container}>
            {/* Subtotal */}
            <View style={styles.row}>
                <Text style={styles.label}>
                    Subtotal
                </Text>
                <Text style={styles.value}>
                    R$ 1250,00
                </Text>
            </View>
            {/* Shipping */}
            <View style={styles.row}>
                <Text style={styles.label}>
                    Entrega
                </Text>
                <Text style={styles.value}>
                    R$ 40,90
                </Text>
            </View>
            {/* Divider */}
            <View style={styles.divider} />
            {/* Total */}
            <View style={styles.row}>
                <Text style={styles.totalLabel}>
                    Total
                </Text>
                <Text style={styles.totalValue}>
                    R$ 1299,90
                </Text>
            </View>
            {/* Checkout Button */}
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Pagamento
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#f6f6f6",
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        paddingHorizontal: 32,
        paddingTop: 35,
        paddingBottom: 40,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 28,
    },
    label: {
        fontSize: 20,
        fontWeight: "500",
        color: "#8F959E",
    },
    value:{
        fontSize: 22,
        fontWeight: "700",
        color: "#1D1E20",
    },
    divider: {
        borderBottomWidth: 2,
        borderStyle: "dashed",
        borderColor: "#E7E8EA",
        marginBottom: 30,
    },
    totalLabel: {
        fontSize: 24,
        fontWeight: "700",
        color: "#1D1E20",
    },
    totalValue: {
        fontSize: 28,
        fontWeight: "800",
        color: "#1D1E20",
    },
    button: {
        height: 72,
        borderRadius: 36,
        backgroundColor: "#5B9CF6",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: "700",
        color: "#FFFFFF",
    }
})
