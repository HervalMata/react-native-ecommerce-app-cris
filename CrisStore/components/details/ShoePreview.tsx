import { Dimensions, Image, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");

interface Props {
    image: any;
}

export default function ShoePreview({ image }: Props) {
    return (
        <View style={styles.container}>
            {/* Oval */}
            <View style={styles.oval} />
            <View style={[
                styles.dots,
                {
                    left: 60,
                }
            ]}
            />
            <View style={[
                    styles.dots,
                    {
                        right: 60,
                    }
                ]} />
            <View style={styles.sliderButton}>
                <View style={styles.arrowLeft} />
                <View style={styles.arrowRight} />
            </View>
            {/* Shoe */}
            <Image style={styles.image} source={image} resizeMode="contain" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 360,
        justifyContent: "center",
        alignItems: "center",
    },
    oval: {
        position: "absolute",
        bottom: 75,
        width: width * 0.82,
        height: 90,
        borderWidth: 3,
        borderColor: "#63A7FF",
        borderRadius: 200,
    },
    dots: {
        position: "absolute",
        bottom: 115,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#63A7FF",
    },
    sliderButton: {
        position: "absolute",
        bottom: 62,
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: "#63A7FF",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        zIndex: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.12,
        shadowRadius: 15,
        elevation: 8,
    },
    arrowLeft: {
        width: 0,
        height: 0,
        borderTopWidth: 6,
        borderBottomWidth: 6,
        borderRightWidth: 8,
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        borderRightColor: "#FFFFFF",
        marginRight: 6,
    },
    arrowRight: {
        width: 0,
        height: 0,
        borderTopWidth: 6,
        borderBottomWidth: 6,
        borderLeftWidth: 8,
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        borderLeftColor: "#FFFFFF",
    },
    image: {
        width: width * 0.9,
        height: 250,
        transform: [
            {
                rotate: "-12deg",
            }
        ],
        zIndex: 2,
    }
})
