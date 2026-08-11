import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { useRouter } from "expo-router";

import BestSellerGrid from "../components/bestsellers/BestSellerGrid";
import BestSellerHeader from "../components/bestsellers/BestSellerHeader";

import { bestSellers } from "@/data/bestSellers";

export default function BestSellersScreen() {
    const router = useRouter();

    const handlePress = (item: any) => {
        router.push({
            pathname: "/",
            params: {
                id: item.id,
            }
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <BestSellerHeader />

            <BestSellerGrid data={bestSellers} onPress={handlePress} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f6f6",
    }
})

