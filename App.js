import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import { StyleSheet, View, Text } from "react-native";
import Store from "./screens/Store";
import Product from "./screens/Product";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "./colors";
import Cart from "./screens/Cart";
import { CartContext, CartProvider } from "./context";
import { useContext } from "react";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StoreNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StoreScreen" component={Store} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    );
};

export default function App() {
    return (
        <CartProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                        tabBarActiveTintColor: colors.highlightSecondary,
                        tabBarInactiveTintColor: colors.highlight,
                        tabBarStyle: styles.nav,
                    }}
                >
                    <Tab.Screen
                        name="Home"
                        component={Home}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialIcons name="home" color={color} size={size} />
                            ),
                            tabBarLabelStyle: styles.highlightSecondary,
                        }}
                    />
                    <Tab.Screen
                        name="Store"
                        component={StoreNavigation}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialIcons name="store" color={color} size={size} />
                            ),
                            tabBarLabelStyle: styles.highlightSecondary,
                        }}
                    />
                    <Tab.Screen
                        name="Cart"
                        component={Cart}
                        options={{
                            tabBarLabelStyle: styles.highlightSecondary,
                            tabBarIcon: ({ color, size }) => {
                                const { cart } = useContext(CartContext);
                                return (
                                    <View>
                                        <MaterialIcons
                                            name="shopping-cart"
                                            color={color}
                                            size={size}
                                        />
                                        <View
                                            style={{
                                                height: 16,
                                                width: 16,
                                                borderRadius: 8,
                                                // backgroundColor: color.accent,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                position: "absolute",
                                                top: -10,
                                                right: -8,
                                            }}
                                        >
                                            {cart.length > 0 && (
                                                <Text
                                                    style={{
                                                        color: color,
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {cart?.length}
                                                </Text>
                                            )}
                                        </View>
                                    </View>
                                );
                            },
                        }}
                    />
                    <Tab.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialIcons name="person" color={color} size={size} />
                            ),
                            tabBarLabelStyle: styles.highlightSecondary,
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.highlightSecondary,
    },
    navBtn: {
        fontSize: 12,
        fontWeight: 700,
    },
});
