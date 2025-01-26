import { StyleSheet, View } from "react-native";
import React from "react";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import colors from "../colors";

export default function ProductCard({ product, style }) {
    const { name, price, featuredProductImage } = product.fields;
    const imageUrl = featuredProductImage?.fields?.file?.url;
    return (
        <View style={styles.cardContainer}>
            <ProductImage imageUrl={imageUrl} style={[styles.imageContainer, style]} />
            <View style={styles.productInfo}>
                <ProductName name={name} />
                <ProductPrice price={price} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.background,
        borderRadius: 8,
        // padding: 10,
        borderWidth: 2,
        borderColor: colors.primary,
    },
    productInfo: {
        backgroundColor: colors.secondary,
        padding: 10,
        maxHeight: 90,
        minHeight: 90,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
    },
});
