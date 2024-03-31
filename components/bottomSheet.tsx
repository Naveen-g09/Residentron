import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import React, { forwardRef, useMemo } from "react";
import { View, Text } from "react-native";
export type Ref = BottomSheetModal;

const AccountSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%", "75%", "100%"], []);
  const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal ref={ref} index={0} snapPoints={snapPoints}>
      <View style={{ backgroundColor: "white", padding: 16 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          This feature will be available soon!🎉
        </Text>
        {/* <Button title="Dismiss" onPress={() => dismiss()} /> */}
      </View>
    </BottomSheetModal>
  );
});

export default AccountSheet;
