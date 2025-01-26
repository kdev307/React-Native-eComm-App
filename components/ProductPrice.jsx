import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../colors";

export default function ProductPrice({ price, style }) {
    return (
        <View style={styles.priceContainer}>
            <Text style={[styles.productPrice, style]}>
                {price ? `$${price}` : "Price Unavailable"}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    priceContainer: {
        marginTop: 5,
    },
    productPrice: {
        fontSize: 16,
        color: colors.textSecondary,
        fontWeight: "bold",
    },
});
