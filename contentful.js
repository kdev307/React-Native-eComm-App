// contentful.js
import { createClient } from "contentful";
import { EXPO_SPACE_ID, EXPO_ACCESS_TOKEN } from "react-native-dotenv";

// Replace these with your actual credentials
const SPACE_ID = EXPO_SPACE_ID;
const ACCESS_TOKEN = EXPO_ACCESS_TOKEN;

// Initialize Contentful client
const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
});

// Function to fetch content from a specific content type (e.g., "products")
export const fetchProducts = async () => {
    try {
        const response = await client.getEntries({
            content_type: "pageProduct",
            include: 2,
        });

        return response.items;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const fetchProductDetails = async (productId) => {
    try {
        const response = await client.getEntry(productId);
        console.log("Fetched product:", response);
        return response.fields;
    } catch (error) {
        console.error("Error fetching products:", error);
        return error;
    }
};
