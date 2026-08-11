import { useRouter } from "expo-router";
import React, {useRef, useState} from "react";
import { Animated, Dimensions, FlatList, StyleSheet, View} from "react-native";

import { completeOnboarding } from "@/utils/storage";

// @ts-ignore
import NextButton from "../../components/onboarding/NextButton";
// @ts-ignore
import OnboardingCard from "../../components/onboarding/OnboardingCard";
// @ts-ignore
import PaginationDots from "../../components/onboarding/PaginationDots";

import { LightColors } from "@/constants/Colors";
import { onboardingData } from "@/constants/onboardingData";

const { width } = Dimensions.get("window");

export default function OnboardingScreen() {
    const router = useRouter();

    const colors = LightColors;

    const flatListRef = useRef<FlatList>(null);

    const scroolX = useRef(new Animated.Value(0)).current;

    const [currentIndex, setCurrentIndex] = useState(0);

    const onViewChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

    const handleNext = async () => {
        if (currentIndex < onboardingData.length - 1) {
            flatListRef.current?.scrollToIndex({
                index: currentIndex + 1,
                animated: true,
            });
        } else {
            await completeOnboarding();
            router.replace("//(auth)/login");
        }
    }

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: colors.background
                }
            ]}
        >
            <Animated.FlatList
                ref={flatListRef}
                data={onboardingData}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                pagingEnabled
                bounces={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <OnboardingCard item={item} colors={colors} />
                )}
                onViewableItemsChanged={onViewChanged}
                viewabilityConfig={viewConfig}
                onScroll={Animated.event([
                    {
                        nativeEvent: {
                            contentOffset: {
                                x: scroolX,
                            }
                        }
                    }
                ],
                {
                    useNativeDriver: false,
                })}
                scrollEventThrottle={16}
            />
            <View style={styles.footer}>
                <PaginationDots
                    data={onboardingData}
                    scrollX={scroolX}
                    colors={colors}
                />

                <NextButton
                    title={
                        currentIndex === onboardingData.length - 1
                        ? "Vamos começar"
                        : "Próximo"
                    }
                    onPress={handleNext}
                    colors={colors}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        position: "absolute",
        bottom: 40,
        left: 24,
        right: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
})

