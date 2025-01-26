import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import colors from "../colors"; // Import colors

export default function Home() {
    return (
        <View style={styles.container}>
            <Header title="E-commerce App" />
            <LinearGradient colors={[colors.primary, colors.secondary]} style={styles.home}>
                <View style={styles.innerContainer}>
                    <Text style={styles.text}>Item 1</Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.text}>Item 2</Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.text}>Item 3</Text>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    home: {
        padding: 72,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 72,
    },
    innerContainer: {
        borderWidth: 2,
        borderColor: colors.highlight,
        padding: 36,
    },
});
