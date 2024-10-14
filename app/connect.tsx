import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";

// Define the type for the image data
interface UnsplashImage {
  id: string;
  urls: {
    small: string;
  };
}

const ACCESS_KEY = "x-zrOJdvMbWZBbuZS8L8DsLQSgl6kxDKZr2pVP6AHaw"; // Replace with your Unsplash access key

const windowWidth = Dimensions.get("window").width;

const Connect = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]); // Define the correct type for images
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Track the current page
  const [isFetching, setIsFetching] = useState(false); // Track if we're fetching more images

  useEffect(() => {
    fetchImages();
  }, [page]); // Fetch images whenever the page changes

  const fetchImages = async () => {
    if (isFetching) return; // Prevent fetching if already fetching
    setIsFetching(true); // Set fetching state to true
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?count=15&client_id=${ACCESS_KEY}&page=${page}`,
      );
      const data: UnsplashImage[] = await response.json(); // Use the correct type for fetched data
      console.log("Fetched Images Count:", data.length);
      setImages((prevImages) => [...prevImages, ...data]); // Append new images to the existing array
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
      setIsFetching(false); // Reset fetching state
    }
  };

  const renderItem = ({ item }: { item: UnsplashImage }) => {
    console.log("Rendering Item with ID:", item.id, "URL:", item.urls.small);
    return (
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={{ uri: item.urls.small }}
          style={styles.image}
          onError={(e) =>
            console.error("Image loading error", e.nativeEvent.error)
          }
        />
      </TouchableOpacity>
    );
  };

  // Function to handle load more when reaching the end of the list
  const handleLoadMore = () => {
    if (!isFetching) {
      setPage((prevPage) => prevPage + 1); // Increment page number
    }
  };

  if (loading && page === 1) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect</Text>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Ensure uniqueness
        numColumns={1} // Set to 1 for single image display
        contentContainerStyle={styles.grid}
        onEndReached={handleLoadMore} // Load more images when reaching the end
        onEndReachedThreshold={0.1} // Trigger when 10% of the list is visible
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  grid: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    margin: 5,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "#f0f0f0", // Light gray background
    borderColor: "#cccccc", // Light gray border
    borderWidth: 1, // Border width
  },
  image: {
    width: windowWidth - 20, // Full width minus padding
    height: windowWidth - 20, // Square aspect ratio
    resizeMode: "cover",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Connect;
