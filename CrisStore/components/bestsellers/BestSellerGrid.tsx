import React from "react";
import { FlatList } from "react-native";

import BestSellerCard from "@/components/bestsellers/BestSellerCard";

export default function BestSellerGrid({ data, onPress }: any) {
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{
                justifyContent: "space-between"
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <BestSellerCard item={item} onPress={onPress} />
            )}
            contentContainerStyle={{
                paddingHorizontal: 24,
                paddingTop: 35,
                paddingBottom: 100,
            }}
        />
    )
}
