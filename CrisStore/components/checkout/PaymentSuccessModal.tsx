import { Image, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface Props {
    visible: boolean;
    onClose: () => void;
}

export default function PaymentSuccessModal({ visible, onClose }: Props ) {
    return (
        <Modal
            transparent
            animationType="fade"
            visible={visible}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.imageCircle}>
                        <Image
                            source={require("../../assets/images/shoes/confetti.png")}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.title}>
                        Seu Pagamento foi{"\n"}Realizado com sucesso
                    </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onClose}
                    >
                        <Text style={styles.buttonText}>
                            Voltar Para a Loja
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#f6f6f6",
        borderRadius: 35,
        paddingHorizontal: 30,
        paddingVertical: 45,
        alignItems: "center",
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.35)",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24,
    },
    imageCircle: {
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: "#EEF5FF",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 130,
        height: 130,
    },
    title: {
        marginTop: 45,
        fontSize: 24,
        fontWeight: "700",
        color: "#1A2530",
        textAlign: "center",
        lineHeight: 38,
    },
    button: {
        marginTop: 45,
        width: "100%",
        height: 74,
        borderRadius: 37,
        backgroundColor: "#5B9EF5",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 22,
        fontWeight: "600",
        color: "#FFFFFF",
    }
})

