import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../colors";

export default function ProductName({ name, style }) {
    return (
        <View style={styles.nameContainer}>
            <Text style={[styles.productTitle, style]}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    nameContainer: {
        marginBottom: 5,
    },
    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.textPrimary,
    },
});
