import BottomSheet, {BottomSheetScrollView, BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { forwardRef, useMemo } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

export type Ref = BottomSheetModal;

interface VarshaBSProps {
  wingData: any[]; // Change 'any[]' to the appropriate type of your wing data
}

const VarshaBS = forwardRef<Ref, VarshaBSProps>((props, ref) => {
  const snapPoints = useMemo(() => ["50%", "75%"], []);

  return (
    <BottomSheetModal ref={ref} index={1} snapPoints={snapPoints} style={styles.modal}>
      {props.wingData.length > 0 ? (
        <FlatList
          data={props.wingData}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text>Name: {item.name}</Text>
              <Text>Ownership Type: {item.ownership_type}</Text>
              <Text>Parking: {item.parking}</Text>
              <Text>Room Number: {item.room_number}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={() => (
            <View style={styles.headerContainer}>
              <Text style={styles.containerHeadline}>Residents Information</Text>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={styles.footerContainer}>
              <Text style={styles.containerHeadline}>End of List</Text>
            </View>
          )}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.contentContainer}>
          <Text style={styles.containerHeadline}>No Data Yet</Text>
        </View>
      )}
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white', // Add background color for modal
    borderTopLeftRadius: 20, // Add border radius
    borderTopRightRadius: 20, // Add border radius
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: "600",
    padding: 20,
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerContainer: {
    backgroundColor: '#f0f0f0', // Add background color for header
    padding: 20,
  },
  footerContainer: {
    backgroundColor: '#f0f0f0', // Add background color for footer
    padding: 20,
  },
  listContent: {
    paddingBottom: 20, // Add padding bottom to ensure scrollability
  },
});

export default VarshaBS;
