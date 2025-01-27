import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { fetchProductDetails } from "../contentful";
import Error from "../components/Error";
import Loader from "../components/Loader";
import colors from "../colors";
import ProductImage from "../components/ProductImage";
import ProductName from "../components/ProductName";
import ProductPrice from "../components/ProductPrice";
import ProductDescription from "../components/ProductDescription";
import Buttons from "../components/Buttons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../context";

export default function Product({ route }) {
    const { productId } = route.params;
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
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

    const handleAddToCart = (item) => {
        // if (isAdded === true) {
        //     setIsAdded(false);
        //     // addToCart(item);
        // } else {
        console.log("Item Added: ", item);
        addToCart(item);
        setIsAdded(true);
        // }
    };

    const navigation = useNavigation();
    const handleBack = () => {
        // navigation.navigate("StoreScreen");
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={handleBack}>
                <MaterialIcons
                    name="chevron-left"
                    color={colors.highlightSecondary}
                    size={40}
                    style={styles.back}
                />
            </TouchableOpacity>
            <ProductImage imageUrl={imageUrl} style={styles.imageContainer} />
            <ProductName name={name} style={styles.productName} />
            <ProductPrice price={price} style={styles.productPrice} />
            <ProductDescription description={description} style={styles.productDescription} />
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => handleAddToCart({ ...product, id: productId })}
            >
                <Buttons buttonName={isAdded ? "Added" : "Add To Cart"} />
                {isAdded ? (
                    <MaterialIcons name="check" color={colors.textLight} size={24} />
                ) : (
                    <MaterialIcons name="add-shopping-cart" color={colors.textLight} size={24} />
                )}
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        padding: 20,
        backgroundColor: colors.background,
    },
    back: {
        marginVertical: 20,
        marginHorizontal: 0,
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
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});
