import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import VarshaBS from "@/components/varshaBs";
import { localhost } from "@/utils/apihelpers";

interface VarshaBSProps {
  wingData: any[]; // Change 'any[]' to the appropriate type of your wing data
}

const Varsha = () => {
  const varshaBsRef = React.useRef<BottomSheetModal>(null);
  const { dismiss } = useBottomSheetModal();

  const [wingData, setWingData] = useState([]);

  const fetchWingData = async (wing: string) => {
    try {
      const response = await fetch(localhost + `/varsha_${wing}`);
      const data = await response.json();
      console.log(data);
      setWingData(data);
      if (varshaBsRef.current) {
        varshaBsRef.current.present();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.gridItem, styles.gridA]}
        onPress={() => fetchWingData("a")}
      >
        <Text style={styles.gridText}>A</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.gridItem, styles.gridB]}
        onPress={() => fetchWingData("b")}
      >
        <Text style={styles.gridText}>B</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.gridItem, styles.gridC]}
        onPress={() => fetchWingData("c")}
      >
        <Text style={styles.gridText}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.gridItem, styles.gridD]}
        onPress={() => fetchWingData("d")}
      >
        <Text style={styles.gridText}>D</Text>
      </TouchableOpacity>
      <VarshaBS ref={varshaBsRef} wingData={wingData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%", // Adjust as needed
    aspectRatio: 1, // Maintain square aspect ratio
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gridText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  gridA: {
    backgroundColor: "red",
  },
  gridB: {
    backgroundColor: "blue",
  },
  gridC: {
    backgroundColor: "green",
  },
  gridD: {
    backgroundColor: "orange",
  },
});

export default Varsha;
