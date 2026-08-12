import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import CartHeader from "../components/cart/CartHeader";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

const cartItems = [
    {
        id: 1,
        name: "Nike Club Max",
        price: "R$ 649,95",
        size: "L",
        image: require("../assets/images/shoes/shoe1.png"),
    },
    {
        id: 2,
        name: "Nike Air Max 200",
        price: "R$ 649,95",
        size: "XL",
        image: require("../assets/images/shoes/shoe2.png"),
        danger: true,
    },
    {
        id: 3,
        name: "Nike Air Max",
        price: "R$ 649,95",
        size: "XXL",
        image: require("../assets/images/shoes/shoe3.png"),
    }
]

export default function CartScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <CartHeader />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 320 }}
            >
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </ScrollView>

            <CartSummary />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f7f7",
    }
})
