import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../colors";

export default function ProductDescription({ description, style }) {
    return (
        <View style={styles.descriptionContainer}>
            <Text style={[styles.description, style]}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    descriptionContainer: {
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        color: colors.textPrimary,
    },
});
