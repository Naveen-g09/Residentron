// import { Stack } from "expo-router";
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const News = () => {
//   const newsItems = [
//     "House #123 is for sale",
//     "Main gate broke",
//     "Community meeting at 7PM",
//     "Garage sale at House #456",
//     "Lost dog found near the park",
//     "Swimming pool will be closed for maintenance",
//   ];

//   return (
//     <View style={styles.container}>
//       <Stack.Screen options={{ headerTitle: "News" }} />
//       {newsItems.map((news, index) => (
//         <View key={index} style={styles.newsBlock}>
//           <Text>{news}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   newsBlock: {
//     backgroundColor: "powderblue",
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
// });

// export default News;

import axios from "axios";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";

// Define the type for the news article
interface NewsArticle {
  title: string;
  description: string;
}

// Component
const News: React.FC = () => {
  const [news, setNews] = useState<NewsArticle[]>([]); // Explicitly typing useState
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Replace with your own API key from News API
  const API_KEY = "d0b4b9470e14404391dfbf67e5a36dbc";
  const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(NEWS_API_URL);
        setNews(response.data.articles); // Assuming articles is the array you need
        setLoading(false);
      } catch (err) {
        setError((err as Error).message); // Type the error as Error
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.error}>
        <Text style={styles.errorText}>Error fetching news: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: "Latest News" }} />
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.newsBlock}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  newsBlock: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});

export default News;
