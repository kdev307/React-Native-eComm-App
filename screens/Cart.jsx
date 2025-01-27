import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import Header from "../components/Header";
import CartCard from "../components/CartCard";
import colors from "../colors";
import { MaterialIcons } from "@expo/vector-icons";
import Buttons from "../components/Buttons";
import { CartContext } from "../context";
import Error from "../components/Error";

export default function Cart() {
    const { cart, removeFromCart, totalPrice, incQty, decQty } = useContext(CartContext);
    console.log("Current Cart:", cart);
    const handleRemove = (id) => {
        removeFromCart(id);
    };
    return (
        <View style={styles.container}>
            <Header title="Cart" />
            <View style={styles.cartContainer}>
                cart.length === 0 &&{" "}
                <View>
                    <Error error="Your Cart is Empty, Shop Now" />
                </View>
                <FlatList
                    style={{ paddingBottom: 200 }}
                    data={cart}
                    renderItem={({ item }) => (
                        <CartCard
                            cartItem={item}
                            onRemove={handleRemove}
                            onIncrease={incQty}
                            onDecrease={decQty}
                        />
                    )}
                    // keyExtractor={(item) => item.sys.id}
                    keyExtractor={(item) => item.id.toString()}
                    ListFooterComponent={
                        cart.length > 0 && (
                            <>
                                <View style={styles.priceContainer}>
                                    <View style={styles.price}>
                                        <Text style={styles.text}>Total:</Text>
                                        <Text style={[styles.text, { fontWeight: 500 }]}>
                                            ${totalPrice}
                                        </Text>
                                    </View>
                                    <View style={styles.price}>
                                        <Text style={styles.text}>Shipping:</Text>
                                        <Text style={[styles.text, { fontWeight: 500 }]}>
                                            ${totalPrice > 500 ? 10 : 0}
                                        </Text>
                                    </View>
                                    <View style={styles.line} />
                                    <View style={styles.price}>
                                        <Text style={styles.text}>Grand Total:</Text>
                                        <Text style={[styles.text, { fontWeight: 700 }]}>
                                            ${totalPrice + (totalPrice > 500 ? 10 : 0)}
                                        </Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Buttons buttonName="Checkout" />
                                    <MaterialIcons
                                        name="shopping-cart-checkout"
                                        color={colors.textLight}
                                        size={24}
                                    />
                                </TouchableOpacity>
                            </>
                        )
                    }
                ></FlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    cartContainer: {
        flex: 0.9,
        alignItems: "center",
        justifyContent: "center",
    },
    priceContainer: {
        padding: 30,
        gap: 10,
    },
    price: {
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingHorizontal: 20,
    },
    text: {
        color: colors.textSecondary,
        fontSize: 16,
    },
    line: {
        borderWidth: 1,
        borderColor: colors.textSecondary,
        marginVertical: 20,
    },
    buttonContainer: {
        backgroundColor: colors.highlightSecondary,
        marginBottom: 20,
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
});
