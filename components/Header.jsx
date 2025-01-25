import { StyleSheet, Text, View } from "react-native";
import React from "react";

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
        backgroundColor: "#66a3e0",
        padding: 40,
        textAlign: "center",
    },
});
