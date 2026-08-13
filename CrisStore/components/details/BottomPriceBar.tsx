import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import useTheme from "@/hooks/useTheme";

interface Props {
    price: number;
}

export default function BottomPriceBar({ price }: Props) {
    const { colors } = useTheme();

    return (
        <View style={[
            styles.container,
            {
                backgroundColor: colors.card,
            }
        ]}>
            {/* Price */}
            <View>
                <Text style={styles.label}>
                    Preço
                </Text>
                <Text style={[
                    styles.price,
                    {
                        color: colors.text,
                    }
                ]}>
                    R$ {price.toLocaleString("pt-BR", {maximumFractionDigits: 2})}
                </Text>
            </View>

            {/* Button */}
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
            >
                <Text style={styles.text}>
                    Adicionar ao Carrinho
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        paddingHorizontal: 30,
        paddingVertical: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.08,
        shadowRadius: 15,
        elevation: 12,
    },
    label: {
        fontSize: 15,
        color: "#8F959E"
    },
    price: {
        fontSize: 25,
        fontWeight: "700",
        marginTop: 8,
    },
    button: {
        width: 200,
        height: 50,
        borderRadius: 40,
        backgroundColor: "#63A7FF",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "600",
        color: "#FFFFFF"
    }
})
