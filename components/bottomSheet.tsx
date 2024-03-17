import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { useLocalSearchParams } from "expo-router";
import React, { forwardRef, useMemo } from "react";
import { View, Text, Button } from "react-native";
export type Ref = BottomSheetModal;

const AccountSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%", "75%", "100%"], []);
  const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal ref={ref} index={0} snapPoints={snapPoints}>
      <View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              padding: 20,
              textAlign: "center",
            }}
          >
            Some data
          </Text>
        </View>
        <Button title="Dismiss" onPress={() => dismiss()} />
      </View>
    </BottomSheetModal>
  );
});

export default AccountSheet;