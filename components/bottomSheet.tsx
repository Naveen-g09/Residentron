import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import React, { forwardRef, useMemo } from "react";
import { View, StyleSheet, Text } from "react-native";

export type Ref = BottomSheetModal;

const AccountSheet = forwardRef<Ref, { children?: React.ReactNode }>(
  (props, ref) => {
    const snapPoints = useMemo(() => ["50%", "75%", "100%"], []);
    const { dismiss } = useBottomSheetModal();

    return (
      <BottomSheetModal ref={ref} index={0} snapPoints={snapPoints}>
        <View style={styles.container}>
          <Text>
            {props.children}
                
          </Text>
        </View>
      </BottomSheetModal>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
  },
});

export default AccountSheet;
