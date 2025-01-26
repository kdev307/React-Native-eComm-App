import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../colors"; // Import colors

export default function Header({ title }) {
    return (
        <View>
            <Text style={styles.heading}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 28,
        fontWeight: 700,
        backgroundColor: colors.primary,
        padding: 40,
        textAlign: "left",
        color: colors.textSecondary,
    },
});
