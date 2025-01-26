import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../colors";

export default function ProductImage({ imageUrl, style }) {
    return (
        <View style={[styles.imageContainer, style]}>
            {imageUrl ? (
                <Image source={{ uri: imageUrl }} style={[styles.productImage, style]} />
            ) : (
                <View style={[styles.productImagePlaceholder, style]}>
                    <Text style={[styles.placeholderText, style]}>No Image Available</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        height: "100%",
    },
    productImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 4,
    },
    productImagePlaceholder: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.accent,
        height: "100%",
        borderRadius: 4,
        borderWidth: 2,
    },
    placeholderText: {
        color: colors.textSecondary,
        fontSize: 14,
    },
});
