import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import colors from "../colors";
import Buttons from "../components/Buttons";
import { MaterialIcons } from "@expo/vector-icons";

export default function Profile() {
    return (
        <View style={styles.container}>
            <Header title="Profile" />
            <View style={styles.profileContainer}>
                <Image style={styles.profileImg} source={require("../assets/user.png")} />
                <Text style={styles.profileText}>Hello World</Text>

                <Text style={styles.profileText}>hello@world.com</Text>
                <Text style={styles.profileText}>9784563210</Text>
            </View>
            <View style={styles.profileButtonContainer}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Buttons buttonName="Edit Profile" />
                    <MaterialIcons name="edit" color={colors.textLight} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Buttons buttonName="Saved Addresses" />
                    <MaterialIcons name="location-on" color={colors.textLight} size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.accent,
    },
    profileContainer: {
        padding: 8,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    },
    profileImg: {
        width: 250,
        height: 250,
        borderColor: colors.borderPrimary,
        backgroundColor: colors.background,
        borderRadius: 200,
        resizeMode: "fit",
        borderWidth: 2,
    },
    profileText: {
        fontSize: 24,
        fontWeight: 700,
        color: colors.highlightSecondary,
    },
    profileButtonContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        padding: 4,
        gap: 10,
    },
    buttonContainer: {
        width: "100%",
        backgroundColor: colors.highlightSecondary,
        // flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        padding: 4,
    },
});
