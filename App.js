import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import { StyleSheet } from "react-native";
import Store from "./screens/Store";
import Product from "./screens/Product";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "./colors";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StoreNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Store" component={Store} />
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.highlight,
                    tabBarInactiveTintColor: colors.textPrimary,
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
    );
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: colors.backgroundSecndary,
        borderWidth: 1,
        borderColor: colors.highlightSecondary,
    },
    navBtn: {
        fontSize: 12,
        fontWeight: 700,
    },
});
