import React, {useState} from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { useRouter } from "expo-router";

import CheckoutHeader from "../components/checkout/CheckoutHeader";
import CheckoutSummary from "../components/checkout/CheckoutSummary";
import ContactCard from "../components/checkout/ContactCard";
import PaymentSuccessModal from "../components/checkout/PaymentSuccessModal";

export default function CheckoutScreen() {
    const router = useRouter();
    const [showSuccess, setShowSuccess] = useState(false);


    return (
        <SafeAreaView style={styles.container}>
            <CheckoutHeader />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 320 }}
            >
                <ContactCard />
            </ScrollView>

            <CheckoutSummary
                onPaymentPress={() => setShowSuccess(true)} />
            <PaymentSuccessModal
                visible={showSuccess}
                onClose={() => {
                    setShowSuccess(false);
                    router.replace("/(tabs)/home")
                }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f7f7",
    }
})
