import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import colors from "../colors"; // Import colors
import { fetchLandingPage } from "../contentful";

export default function Home() {
    const [images, setImages] = useState(null);
    const [loading, setLoading] = useState(false);
    const getImages = async () => {
        try {
            const imageData = await fetchLandingPage();
            setImages(imageData);

            console.log("Home Page: ", imageData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // const { heroBannerImage } = images.fields;
    // const heroImage = heroBannerImage?.url;

    useEffect(() => {
        getImages();
    }, []);
    return (
        <View style={styles.container}>
            <Header title="E-commerce App" />
            <ScrollView>
                <LinearGradient colors={[colors.primary, colors.secondary]} style={styles.home}>
                    <View style={styles.landScapeCard}>
                        <Text style={styles.text}>Item 1</Text>
                    </View>
                    <View style={styles.portraitCardContainer} numColumns={2}>
                        <View style={styles.portraitCard}>
                            <Text style={styles.text}>Item 2</Text>
                        </View>
                        <View style={styles.portraitCard}>
                            <Text style={styles.text}>Item 3</Text>
                        </View>
                    </View>

                    <View style={styles.portraitCardContainer} numColumns={2}>
                        <View style={styles.portraitCard}>
                            <Text style={styles.text}>Item 4</Text>
                        </View>
                        <View style={styles.portraitCard}>
                            <Text style={styles.text}>Item 5</Text>
                        </View>
                    </View>
                    <View style={styles.landScapeCard}>
                        <Text style={styles.text}>Item 6</Text>
                    </View>
                </LinearGradient>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: colors.primary,
    },
    home: {
        padding: 10,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    landScapeCard: {
        width: "100%",
        borderWidth: 2,
        borderColor: colors.highlight,
        justifyContent: "center",
        alignItems: "center",
        height: 300,
    },
    portraitCardContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    portraitCard: {
        borderWidth: 2,
        borderColor: colors.highlight,
        padding: 36,
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },
});
