import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useTheme from "@/hooks/useTheme";
import colors from "@/constants/Colors";

interface Props {
    sizes: number[];
    selectedSize: number;
    onSelect: (size: number) => void;
}

export default function SizeSelector({ sizes, selectedSize, onSelect }: Props) {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={[
                    styles.title,
                    {
                        color: colors.text,
                    }
                ]}
                >
                    Tamanho
                </Text>
                <View style={styles.types}>
                    <Text style={styles.active}>
                        EU
                    </Text>
                    <Text style={styles.type}>
                        US
                    </Text>
                    <Text style={styles.type}>
                        UK
                    </Text>
                </View>
            </View>
            {/* Sizes */}
            <ScrollView
                horizontal
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 25 }}>
                {sizes.map((size) => {
                    const active = size === selectedSize;
                    return (
                        <TouchableOpacity
                            key={size}
                            activeOpacity={0.8}
                            onPress={() => onSelect(size)}
                            style={[
                                styles.sizeBox,
                                {
                                    backgroundColor: active ? "#63A7FF" : colors.background,
                                }
                            ]}
                        >
                            <Text style={[
                                styles.sizeText,
                                {
                                    color: active ? "#FFFFFF" : "#8F959E",
                                }
                            ]}>
                                {size}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 45,
        paddingBottom: 150,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "400",
    },
    types: {
        flexDirection: "row",
    },
    active: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111827",
        marginLeft: 30,
    },
    type: {
        fontSize: 18,
        fontWeight: "600",
        color: "#8F959E",
        marginLeft: 30,
    },
    sizeBox: {
        width: 90,
        height: 90,
        borderRadius: 45,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.08,
        shadowRadius: 15,
        elevation: 5,
    },
    sizeText: {
        fontSize: 34,
        fontWeight: "600",
    }
})






















































































































