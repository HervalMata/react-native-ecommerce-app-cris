import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useTheme from "@/hooks/useTheme";

interface Props {
    images: any[];
}

export default function GallerySection({ images }: Props) {
    const { colors } = useTheme();
    const [selected, setSelected] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={[
                styles.title,
                {
                    color: colors.text,
                }
            ]}
            >
                  Galeria de Imagens
            </Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 25 }}
            >
                {images.map((image, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        onPress={() => setSelected(index)}
                        style={[
                            styles.imageBox,
                            {
                                backgroundColor: colors.background,
                                borderWidth: selected === index ? 2 : 0,
                                borderColor: "#63A7FF",
                            }
                        ]}
                    >
                        <Image source={image} resizeMode="contain" style={styles.image} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
    },
    title: {
        fontSize: 34,
        fontWeight: "700",
    },
    imageBox: {
        width: 110,
        height: 110,
        borderRadius: 28,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
    },
    image: {
        width: 80,
        height: 80,
    }
})
