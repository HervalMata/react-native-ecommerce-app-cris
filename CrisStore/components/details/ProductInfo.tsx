import { StyleSheet, Text, View } from "react-native";
import useTheme from "@/hooks/useTheme";

interface Props {
    product: {
        category: string;
        name: string;
        price: number;
        description: string;
    };
}

export default function ProductInfo({product}: Props) {
    const { colors } = useTheme();

    return (
        <View style={[
            styles.container,
            {
                backgroundColor: colors.card,
            }
        ]}>
            {/* Category */}
            <Text style={styles.category}>
                {product.category}
            </Text>
            {/* Name */}
            <Text style={[
                styles.name,
                {
                    color: colors.text,
                }
            ]}
            >
                {product.name}
            </Text>
            {/* Price */}
            <Text style={[
                styles.price,
                {
                    color: colors.text,
                }
            ]}
            >
                R$ {product.price.toLocaleString("pt-BR", { maximumFractionDigits: 2 })}
            </Text>
            {/* Description */}
            <Text style={[
                styles.description,
                {
                    color: colors.subText,
                }
            ]}
            >
                {product.description}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: -10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 28,
        paddingTop: 35,
        paddingBottom: 20,
    },
    category: {
        color: "#63A7FF",
        fontSize: 16,
        fontWeight: "600",
        letterSpacing: 1,
    },
    name: {
        marginTop: 12,
        fontSize: 40,
        fontWeight: "700",
    },
    price: {
        marginTop: 20,
        fontSize: 26,
        fontWeight: "700",
    },
    description: {
        marginTop: 20,
        fontSize: 18,
        lineHeight: 34,
    },
})
