import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View} from "react-native";

import useTheme from "@/hooks/useTheme";

// @ts-ignore
import BottomPriceBar from "../../components/details/BottomPriceBar";
// @ts-ignore
import DetailsHeader from "../../components/details/DetailsHeader";
// @ts-ignore
import GallerySection from "../../components/details/GallerySection";
// @ts-ignore
import ProductInfo from "../../components/details/ProductInfo";
// @ts-ignore
import ShoePreview from "../../components/details/ShoePreview";
// @ts-ignore
import SizeSelector from "../../components/details/SizeSelector";

import { product } from "../../constants/product";

export default function DetailsScreen() {
    // @ts-ignore
    const { colors } = useTheme();

    const [selectedSize, setSelectedSize] = useState(40);

    return (
        <SafeAreaView
            style={[
                styles.container,
                {
                    backgroundColor: colors.background,
                }
            ]}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <ShoePreview image={product.image} />

                <View
                    style={{
                        backgroundColor: colors.card,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        marginLeft: 20,
                    }}
                >
                    <ProductInfo product={product} />

                    <GallerySection images={product.gallery} />

                    <SizeSelector sizes={product.sizes} selectedSize={selectedSize} onSelect={setSelectedSize} />
                </View>
            </ScrollView>

            <BottomPriceBar price={product.price} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


