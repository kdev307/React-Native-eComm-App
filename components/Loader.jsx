import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";
import colors from "../colors";

export default function Loader() {
    return (
        <View style={styles.center}>
            <ActivityIndicator size="large" style={styles.loader} />
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loader: {
        transform: [{ scale: 2 }],
        color: colors.highlight,
    },
});
