import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet} from "react-native";

// @ts-ignore
import FavouriteGrid from "../../components/favourite/FavouriteGrid";
// @ts-ignore
import FavouriteHeader from "../../components/favourite/FavouriteHeader";

import { favourites } from "@/data/favourites";

export default function FavoriteScreen() {
    const router = useRouter();

    const handlePress = (item: any) => {
        router.push({
            pathname: "/details",
            params: {
                id: item.id,
            }
        })
    }

    return (
        <SafeAreaView
            style={styles.container}
        >
            <FavouriteHeader />

            <FavouriteGrid data={favourites} onPress={handlePress} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f6f6",
    }
})
