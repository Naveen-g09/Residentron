import { Asset } from "expo-asset";
import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
  ImageBackground,
} from "react-native";
import RazorpayCheckout from "react-native-razorpay";

const Payment: React.FC = () => {
  const logo = Asset.fromModule(require("../assets/images/icon.jpg")).uri;
  const handlePayment = (amount: any, description: string) => {
    const options = {
      description,
      image: logo,
      currency: "INR",
      key: "rzp_test_6zPqicA8GMDU00", // Replace with your Razorpay key
      amount, // Amount in paise (e.g. 5000 = ₹50),
      order_id: "order_EMBFqjDHEEn80l", // Replace with your order ID
      name: "Residentron Society Maintenance",
      prefill: {
        email: "user@example.com",
        contact: "9999999999",
        name: "Test User",
      },
      theme: { color: "#F37254" },
    };

    RazorpayCheckout.open(options)
      .then((data) => {
        // Success callback
        Alert.alert(
          "✅ Payment Success!",
          `Thank you for your payment! Your payment ID is: ${data.razorpay_payment_id}`,
          [{ text: "OK", style: "default" }],
        );
      })
      .catch((error) => {
        // Failure callback
        Alert.alert(
          "❌ Oops! Payment Failed",
          `There was an error processing your payment:\n${error.description}`,
          [{ text: "Try Again", style: "cancel" }],
        );
      });
  };

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });

  // Get the date 1 year ahead
  const nextYearDate = new Date();
  nextYearDate.setFullYear(currentDate.getFullYear() + 1);
  const nextYearMonth = nextYearDate.toLocaleString("default", {
    month: "long",
  });
  const nextYear = nextYearDate.getFullYear();

  const image = require("../assets/images/rupee.png");

  return (
    <ImageBackground
      source={image} // Replace with the rupee image you prefer
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Residentron Society Maintenance</Text>

        {/* Monthly Payment */}
        <View style={styles.paymentOption}>
          <Text style={styles.title}>
            Monthly Society Maintenance for {currentMonth}
          </Text>
          <TouchableOpacity
            style={styles.payButton}
            onPress={() => handlePayment("5000", "Monthly Society Maintenance")}
          >
            <Text style={styles.payButtonText}>Pay ₹500</Text>
          </TouchableOpacity>
        </View>

        {/* Annual Payment */}
        <View style={[styles.paymentOption, styles.paymentOptionMargin]}>
          <Text style={styles.title}>Annual Society Maintenance</Text>
          <Text style={styles.subtitle}>
            From {currentMonth} {currentDate.getFullYear()} till {nextYearMonth}{" "}
            {nextYear}
          </Text>
          <TouchableOpacity
            style={styles.payButton}
            onPress={() => handlePayment("60000", "Annual Society Maintenance")}
          >
            <Text style={styles.payButtonText}>Pay ₹6000</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.8)", // Semi-transparent background
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: "#333",
  },
  paymentOption: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  paymentOptionMargin: {
    marginTop: 20, // Gap between the buttons
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  payButton: {
    backgroundColor: "blue",
    paddingVertical: 15,
    borderRadius: 5,
  },
  payButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default Payment;
