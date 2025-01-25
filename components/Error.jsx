import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function Error({ error }) {
    return (
        <View style={styles.center}>
            <MaterialIcons name="sentiment-dissatisfied" color={colors.highlight} size={50} />
            <Text style={styles.errorText}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    errorText: {
        fontSize: 18,
        color: colors.highlight,
        fontWeight: 700,
    },
});
