import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { fetchProducts } from "../contentful";
import { useNavigation } from "@react-navigation/native";
import colors from "../colors";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

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
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.productContainer}
                        onPress={() => handleClick(item)}
                    >
                        <ProductCard product={item} style={styles.imageContainer} />
                    </TouchableOpacity>
                )}
                numColumns={2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: colors.secondary,
    },
    store: {
        // padding: 10,
        flex: 1,
    },
    productContainer: {
        flex: 1,
        // marginBottom: 20,
        // marginHorizontal: 5,
        padding: 8,
        backgroundColor: colors.secondary,
        // borderRadius: 10,
    },
    imageContainer: {
        height: 250,
    },
});
