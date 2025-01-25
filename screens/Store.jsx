import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { fetchProducts } from "../contentful";

export default function Store() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            const productsData = await fetchProducts();
            setProducts(productsData);
            setLoading(false);
        };

        getProducts();
    }, []);

    const handleClick = (product) => {
        console.log("Product clicked:", product);
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#66ccff" />
            </View>
        );
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
                            {/* Product name */}
                            <Text style={styles.productPrice}>
                                {price ? `$${price}` : "Price Unavailable"}
                            </Text>
                            {/* Product price */}
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
        backgroundColor: "#ccddff",
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    productContainer: {
        marginBottom: 20,
        padding: 8,
        backgroundColor: "#ccddff",
        borderRadius: 10,
    },
    productImage: {
        width: 200,
        height: 200,
        resizeMode: "cover",
        marginBottom: 10,
        borderWidth: 2,
        borderColor: "#66ccff",
    },
    productImagePlaceholder: {
        width: 200,
        height: 200,
        backgroundColor: "#ddeeff",
        marginBottom: 10,
    },
    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    productPrice: {
        fontSize: 16,
        color: "#555",
    },
});
