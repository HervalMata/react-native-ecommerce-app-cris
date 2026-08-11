import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

// @ts-ignore
import NotificationHeader from "../components/notifications/NotificationHeader";
// @ts-ignore
import NotificationsSection from "../components/notifications/NotificationSection";

import { todayNotifications, yesterdayNotifications } from "../data/notifications";

export default function NotificationsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <NotificationHeader />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <NotificationsSection
                    title="Hoje"
                    data={todayNotifications}
                />

                <NotificationsSection
                    title="Ontem"
                    data={yesterdayNotifications}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f7f7",
    }
})
