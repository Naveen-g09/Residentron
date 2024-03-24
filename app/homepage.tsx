import React from "react";
import { View, Button, StyleSheet } from "react-native";

const Dashboard: React.FC = () => {
  const handleNavigation = (page: string) => {
    // Handle navigation logic here
    console.log(`Navigating to ${page}`);
  };

  const handleFeatureClick = (feature: string) => {
    // Handle feature click logic here
    console.log(`Clicked on feature: ${feature}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.middleButtons}>
        <Button
          title="Payment Due"
          onPress={() => handleFeatureClick("Payment Due")}
        />
        <Button
          title="Visitors Update"
          onPress={() => handleFeatureClick("Visitors Update")}
        />
        {/* Add more feature buttons as needed */}
      </View>

      <View style={styles.bottomButtons}>
        <Button title="Home" onPress={() => handleNavigation("Home")} />
        <Button title="Profile" onPress={() => handleNavigation("Profile")} />
        <Button title="Settings" onPress={() => handleNavigation("Settings")} />
        <Button title="Logout" onPress={() => handleNavigation("Logout")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  middleButtons: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
    width: "100%",
  },
});

export default Dashboard;
