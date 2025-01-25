import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { fetchProducts } from "../contentful";
import { useNavigation } from "@react-navigation/native";
import colors from "../colors";
import Loader from "../components/Loader";

export default function Store() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        try {
            const productsData = await fetchProducts();
            setProducts(productsData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const navigation = useNavigation();

    const handleClick = (product) => {
        console.log("Product clicked:", product);
        navigation.navigate("Product", { productId: product.sys.id });
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <View style={styles.container}>
            <Header title="Products" />
            <FlatList
                data={products}
                style={styles.store}
                keyExtractor={(item) => item.sys.id}
                renderItem={({ item }) => {
                    console.log("Rendering product:", item);
                    const { name, price, featuredProductImage } = item.fields;
                    const imageUrl = featuredProductImage?.fields?.file?.url;

                    return (
                        <TouchableOpacity
                            style={styles.productContainer}
                            onPress={() => handleClick(item)}
                        >
                            {imageUrl ? (
                                <Image source={{ uri: imageUrl }} style={styles.productImage} />
                            ) : (
                                <View style={styles.productImagePlaceholder}>
                                    <Text style={styles.center}>No Image Available</Text>
                                </View>
                            )}
                            <Text style={styles.productTitle}>{name || "Unnamed Product"}</Text>
                            <Text style={styles.productPrice}>
                                {price ? `$${price}` : "Price Unavailable"}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
                numColumns={2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    store: {
        backgroundColor: colors.accent, // Use dynamic color for background
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    productContainer: {
        marginBottom: 20,
        padding: 8,
        backgroundColor: colors.accent, // Use dynamic color for product container
        borderRadius: 10,
    },
    productImage: {
        width: 200,
        height: 200,
        resizeMode: "cover",
        marginBottom: 10,
        borderWidth: 2,
        borderColor: colors.primary, // Use primary color for borders
    },
    productImagePlaceholder: {
        width: 200,
        height: 200,
        backgroundColor: colors.placeholder, // Use placeholder color for no image
        marginBottom: 10,
    },
    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    productPrice: {
        fontSize: 16,
        color: colors.textPrimary, // Use primary text color
    },
});
