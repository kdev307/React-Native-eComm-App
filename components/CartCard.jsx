import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../colors";

export default function CartCard({ cartItem, onRemove, onIncrease, onDecrease }) {
    // if (!cartItem || !cartItem.sys) {
    //     console.error("Invalid cart item data:", cartItem);
    //     return null;
    // }
    console.log("cart item: ", cartItem);
    const { featuredProductImage, name, price, qty } = cartItem;

    const imageUrl = featuredProductImage?.fields?.file?.url;
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.cartImg} />
            <View style={styles.cardData}>
                <Text style={styles.cardName}>{name}</Text>
                <Text style={styles.cardPrice}>$ {price}</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => onDecrease(cartItem.id)}>
                        <MaterialIcons name="remove" size={24} color={colors.highlightSecondary} />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{qty}</Text>
                    <TouchableOpacity onPress={() => onIncrease(cartItem.id)}>
                        <MaterialIcons name="add" size={24} color={colors.highlightSecondary} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => {
                    onRemove(cartItem.id);
                }}
            >
                <MaterialIcons
                    name="remove-shopping-cart"
                    color={colors.highlightSecondary}
                    size={30}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "start",
        justifyContent: "space-between",
        padding: 20,
        backgroundColor: colors.accent,
    },
    cartImg: {
        height: 150,
        width: "40%",
    },
    cardData: {
        flex: 1,
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-evenly",
        padding: 10,
    },
    cardName: {
        fontSize: 20,
        fontWeight: 600,
        color: colors.textPrimary,
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: 500,
        color: colors.textSecondary,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    quantityText: {
        fontSize: 18,
        color: colors.textPrimary,
    },
});
