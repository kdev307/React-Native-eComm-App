import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import { StyleSheet } from "react-native";
import Store from "./screens/Store";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: "#1144aa",
                    tabBarInactiveTintColor: "#444",
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
                        tabBarLabelStyle: styles.navBtn,
                    }}
                />
                <Tab.Screen
                    name="Store"
                    component={Store}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="store" color={color} size={size} />
                        ),
                        tabBarLabelStyle: styles.navBtn,
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="person" color={color} size={size} />
                        ),
                        tabBarLabelStyle: styles.navBtn,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: "#dbeeff",
        borderWidth: 1,
        borderColor: "#003366",
    },
    navBtn: {
        fontSize: 12,
        fontWeight: 700,
    },
});
