import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchProductDetails } from "../contentful";
import Error from "../components/Error";
import Loader from "../components/Loader";
import colors from "../colors";

export default function Product({ route }) {
    const { productId } = route.params;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const getProductDetails = async () => {
        try {
            const productData = await fetchProductDetails(productId);
            console.log("API Response:", productData);
            setProduct(productData);
            setLoading(false);
            console.log("Product received:", product);
        } catch (error) {
            console.error("Error fetching product details:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductDetails();
        console.log("Product received:", product);
    }, [productId]);

    if (loading) {
        return <Loader />;
    }
    if (!product) {
        return <Error error="Product not found!" />;
    }
    console.log("product data: ", product);

    const { description, featuredProductImage, name, price } = product;

    const imageUrl = featuredProductImage?.fields?.file?.url;

    return (
        <View style={styles.container}>
            {imageUrl && <Image source={{ url: imageUrl }} style={styles.productImage} />}
            <Text style={styles.productName}>{name || "Product Name"}</Text>
            <Text style={styles.productPrice}>
                {product.price ? `$${price}` : "Price Unavailable"}
            </Text>
            <Text style={styles.productDescription}>{description || "Product Description"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.background,
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    productImage: {
        width: "100%",
        height: 300,
        resizeMode: "cover",
        marginBottom: 20,
    },
    productName: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 20,
        color: colors.primary,
        marginBottom: 10,
    },
    productDescription: {
        fontSize: 16,
        color: colors.textPrimary,
    },
});
