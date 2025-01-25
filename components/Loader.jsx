import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../colors";

export default function Loader() {
    return (
        <View style={styles.center}>
            <ActivityIndicator size="large" color={colors.primary} />
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
