// contentful.js
import { createClient } from "contentful";
import { EXPO_SPACE_ID, EXPO_ACCESS_TOKEN } from "react-native-dotenv";

// const SPACE_ID = EXPO_SPACE_ID;
// const ACCESS_TOKEN = EXPO_ACCESS_TOKEN;

const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
});

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
