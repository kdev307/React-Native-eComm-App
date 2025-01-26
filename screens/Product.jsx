import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchProductDetails } from "../contentful";
import Error from "../components/Error";
import Loader from "../components/Loader";
import colors from "../colors";
import ProductImage from "../components/ProductImage";
import ProductName from "../components/ProductName";
import ProductPrice from "../components/ProductPrice";
import ProductDescription from "../components/ProductDescription";
import Buttons from "../components/Buttons";

export default function Product({ route }) {
    const { productId } = route.params;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [addToCart, setAddToCart] = useState(false);

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
        // console.log("Product received:", product);
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

    const handleAddToCart = () => {
        setAddToCart((prev) => !prev);
    };

    return (
        <ScrollView style={styles.container}>
            <ProductImage imageUrl={imageUrl} style={styles.imageContainer} />
            <ProductName name={name} style={styles.productName} />
            <ProductPrice price={price} style={styles.productPrice} />
            <ProductDescription description={description} style={styles.productDescription} />
            <TouchableOpacity style={styles.buttonContainer} onPress={handleAddToCart}>
                <Buttons buttonName={addToCart ? "Added" : "Add To Cart"} />
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.background,
    },
    imageContainer: {
        height: 500,
    },
    productImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 8,
        borderWidth: 2,
        borderColor: colors.highlight,
    },
    productName: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: colors.textPrimary,
    },
    productPrice: {
        fontSize: 20,
        color: colors.textSecondary,
        fontWeight: "bold",
        marginBottom: 10,
    },
    productDescription: {
        fontSize: 16,
        lineHeight: 22,
        color: colors.textPrimary,
    },
    buttonContainer: {
        backgroundColor: colors.highlightSecondary,
        marginTop: 20,
    },
});
