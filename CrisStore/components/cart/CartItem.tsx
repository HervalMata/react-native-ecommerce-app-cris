import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Feather, Ionicons } from "@expo/vector-icons";

interface Props {
    item: {
        id: number;
        name: string;
        price: string;
        size: string;
        image: any;
        danger?: boolean;
    };
}

export default function CartItem({ item }: Props) {
    const [quantity, setQuantity] = useState(1);

    return (
        <View style={styles.container}>
            {/* Shoe Image */}
            <View style={styles.imageBox}>
                <Image source={item.image} style={styles.image} resizeMode="contain" />
            </View>
            {/* Details */}
            <View style={styles.info}>
                <Text style={styles.name}>
                    {item.name}
                </Text>
                <Text style={styles.price}>
                    {item.price}
                </Text>
                <View style={styles.counterRow}>
                    {/* Minus */}
                    <TouchableOpacity
                        style={styles.minus}
                        onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
                        <Ionicons name="remove" size={22} color="#8F959E" />
                    </TouchableOpacity>
                    <Text style={styles.qty}>
                        {quantity}
                    </Text>
                    {/* Plus */}
                    <TouchableOpacity
                        style={styles.plus}
                        onPress={() => setQuantity(quantity + 1)}>
                        <Ionicons name="add" size={24} color="#8F959E" />
                    </TouchableOpacity>
                </View>
            </View>
            {/* Right Side */}
            <View style={styles.right}>
                <Text style={styles.size}>
                    {item.size}
                </Text>
                <TouchableOpacity>
                    <Feather name="trash-2" size={32} color={item.danger ? "#FF6B6B" : "#8F959E"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        marginBottom: 34,
        flexDirection: "row",
        alignItems: "center",
    },
    imageBox: {
        width: 108,
        height: 108,
        borderRadius: 30,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 90,
        height: 90,
    },
    info: {
        flex: 1,
        marginLeft: 20,
    },
    name: {
        fontSize: 22,
        fontWeight: "700",
        color: "#1D1E20",
    },
    price: {
        fontSize: 20,
        fontWeight: "700",
        color: "#1D1E20",
        marginTop: 8,
    },
    counterRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    minus: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
    },
    qty: {
        fontSize: 24,
        fontWeight: "600",
        color: "#1D1E20",
        marginHorizontal: 24,
    },
    plus: {
        width: 42,
        height: 42,
        borderRadius: 21,
        color: "#5B9CF6",
        justifyContent: "center",
        alignItems: "center",
    },
    right: {
        height: 110,
        justifyContent: "space-between",
        alignItems: "center",
    },
    size: {
        fontSize: 22,
        fontWeight: "700",
        color: "#1D1E20",
    }
})
