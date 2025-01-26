import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../colors";

export default function Buttons({ buttonName, style }) {
    return (
        <View style={[styles.buttonContainer, style]}>
            <Text style={styles.buttonText}>{buttonName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        // backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        // marginTop: 10,
    },
    buttonText: {
        color: colors.textLight,
        fontSize: 16,
        fontWeight: "bold",
    },
});
