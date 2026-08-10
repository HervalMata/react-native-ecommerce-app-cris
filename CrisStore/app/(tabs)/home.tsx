import React, {useRef, useState} from "react";
import { SafeAreaView, ScrollView, StyleSheet} from "react-native";

// @ts-ignore
import DrawerLayout , { DrawerRef } from "../../components/drawer/DrawerLayout";
// @ts-ignore
import BottomNavigation from "../../components/home/BottomNavigation";
// @ts-ignore
import BrandList from "../../components/home/BrandList";
// @ts-ignore
import FilterModal from "../../components/home/FilterModal";
// @ts-ignore
import HomeHeader from "../../components/home/HomeHeader";
// @ts-ignore
import NewArrivalSection from "../../components/home/NewArrivalSection";
// @ts-ignore
import PopularSection from "../../components/home/PopularSection";
// @ts-ignore
import SearchBar from "../../components/home/SearchBar";

import useTheme from "@/hooks/useTheme";

export default function HomeScreen() {
    // @ts-ignore
    const { colors } = useTheme();

    const drawerRef = useRef<DrawerRef>(null);
    const [showFilter, setShowFilter] = useState(false);

    return (
        <DrawerLayout ref={drawerRef}>
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
                    contentContainerStyle={styles.content}
                >
                    <HomeHeader
                        onMenuPress={() => drawerRef.current?.openDrawer()}
                        onFilterPress={() => setShowFilter(true)}
                    />

                    <SearchBar />

                    <BrandList />

                    <PopularSection />

                    <NewArrivalSection />
                </ScrollView>

                <FilterModal
                    visible={showFilter}
                    onClose={() => setShowFilter(false)}
                />

                <BottomNavigation />
            </SafeAreaView>
        </DrawerLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 150,
    }
})
