import React from "react";
import { Image,StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BestSellerCard({ item, onPress }: any) {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={styles.card}
            onPress={() => onPress(item)}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <Text style={styles.bestSeller}>
                Mais Vendidos
            </Text>
            <Text style={styles.name}>
                {item.name}
            </Text>
            <Text style={styles.category}>
                {item.category}
            </Text>
            <View style={styles.bottom}>
                <Text style={styles.price}>
                    {item.price}
                </Text>
            </View>
            <View style={styles.colors}>
                <View style={[
                    styles.color,
                    {
                        backgroundColor: item.colors[0]
                    }
                ]}/>
                <View style={[
                    styles.color,
                    {
                        backgroundColor: item.colors[1]
                    }
                ]}/>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "47%",
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        padding: 18,
        marginBottom: 22,
    },
    image: {
        width: "100%",
        height: 120,
        alignSelf: "center",
        marginBottom: 20,
    },
    bestSeller: {
        fontSize: 16,
        color: "#5B9CF6",
        fontWeight: "500",
        marginBottom: 12,
    },
    name: {
        fontSize: 22,
        fontWeight: "700",
        color: "#1D1E20",
    },
    category: {
        fontSize: 16,
        color: "#8F959E",
        marginTop: 6,
    },
    bottom: {
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    price: {
        fontSize: 22,
        fontWeight: "800",
        color: "#1D1E20",
    },
    colors: {
        flexDirection: "row",
    },
    color: {
        width: 18,
        height: 18,
        borderRadius: 9,
        marginLeft: 10,
    }
})
