import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

interface Props {
    item: {
        title: string;
        description: string;
        image: any;
    };
    colors: any;
}

export default function OnboardingCard({ item, colors}: Props) {
    const floatAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(40)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(floatAnim, {
                    toValue: -18,
                    duration: 1800,
                    useNativeDriver: true,
                }),
                Animated.timing(floatAnim, {
                    toValue: 0,
                    duration: 1800,
                    useNativeDriver: true,
                })
            ])
        ).start();
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 700,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 700,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);
    return (
        <View style={[
            styles.container,
            {
                backgroundColor: colors.background,
            }
        ]}
        >
            {/* Background Circle */}
            <View style={[
                styles.circle,
                {
                    backgroundColor: colors.backgroundCircle,
                }
            ]}
            />

            {/* Nike Text */}
            <Text style={[
                styles.nike,
                {
                    color: colors.nikeText,
                }
            ]}
            >
                NIKE
            </Text>
            {/* Decorative Blue Dots */}
            <View style={[
                styles.dot,
                styles.dot1
            ]}
            />
            <View style={[
                styles.dot,
                styles.dot2
            ]}
            />
            <View style={[
                styles.dot,
                styles.dot3
            ]}
            />

            {/* Animated Shoe */}
            <Animated.Image
                source={item.image}
                resizeMode="contain"
                style={[
                    styles.image,
                    {
                        transform: [
                            {
                                translateY: floatAnim,
                            }
                        ]
                    }
                ]}
            />

            {/* Animated Content */}
            <Animated.View
                style={[
                    styles.content,
                    {
                        opacity: fadeAnim,
                        transform: [
                            {
                                translateY: slideAnim,
                            }
                        ]
                    }
                ]}
            >
                <Text style={[
                    styles.title,
                    {
                        color: colors.text,
                    }
                ]}>
                    {item.title}
                </Text>

                <Text style={[
                    styles.description,
                    {
                        color: colors.subText,
                    }
                ]}>
                    {item.description}
                </Text>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        flex: 1,
    },
    circle: {
        position: 'absolute',
        top: -height * 0.2,
        right: -width * 0.28,
        width: width * 0.85,
        height: width * 0.85,
        borderRadius: width,
    },
    nike: {
        position: 'absolute',
        top: height * 0.18,
        left: width * 0.05,
        fontSize: width * 0.28,
        fontWeight: "900",
        letterSpacing: 5,
    },
    dot: {
       position: 'absolute',
       width: 14,
       height: 14,
       borderRadius: 7,
       backgroundColor: "#5B9CFF",
    },
    dot1: {
        top: height * 0.10,
        left: width * 0.30,
    },
    dot2: {
        top: height * 0.52,
        right: width * 0.18,
    },
    dot3: {
        top: height * 0.74,
        left: width * 0.06,
    },
    image: {
        width: width * 0.95,
        height: height * 0.42,
        alignSelf: "center",
        marginTop: height * 0.12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 18 },
        shadowOpacity: 0.15,
        shadowRadius: 25,
        elevation: 20,
    },
    content: {
        marginTop: height * 0.02,
        paddingHorizontal: width * 0.06,
    },
    title: {
        fontSize: width * 0.075,
        fontWeight: "700",
        lineHeight: width * 0.11,
    },
    description: {
        marginTop: 18,
        fontSize: width * 0.045,
        lineHeight: width * 0.07,
    },
})
