import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";

export default function Profile() {
    return (
        <View>
            <Header title="Profile" />
            <View>
                <Text>Profile</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
