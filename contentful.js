// contentful.js
import { createClient } from "contentful";

// Replace these with your actual credentials
const SPACE_ID = "6bglc2k6g7yn";
const ACCESS_TOKEN = "xxoEewmpqHk5f81Pq1w72u9Pz29XZuNQE5MhqqZBowg";

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
        });

        return response.items;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};
