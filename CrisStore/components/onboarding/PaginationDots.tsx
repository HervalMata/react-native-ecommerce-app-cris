import React from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");

interface Props {
    data: any[];
    scrollX: Animated.Value;
    colors: any;
}

export default function PaginationDots({ data, scrollX, colors }: Props) {
    return (
        <View style={styles.container}>
            {data.map((_, index) => {
                const inputRange = [
                    (index - 1) * width,
                    index * width,
                    (index + 1) * width,
                ];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 28, 10],
                    extrapolate: "clamp",
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.4, 1, 0.4],
                    extrapolate: "clamp",
                });

                const backgroundColor = scrollX.interpolate({
                    inputRange,
                    outputRange: [
                        colors.inactiveDot,
                        colors.primary,
                        colors.inactiveDot,
                    ],
                })
                return (
                    <Animated.View key={index} style={[
                        styles.dot,
                        {
                            width: dotWidth,
                            opacity,
                            backgroundColor: backgroundColor as any,
                        }
                    ]}
                />
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    dot: {
        height: 8,
        borderRadius: 20,
        marginHorizontal: 4,
    },
})
