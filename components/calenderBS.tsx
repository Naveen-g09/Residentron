import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import React, { forwardRef, useMemo, useState } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

export type Ref = BottomSheetModal;

const CalenderSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%", "75%", "90%"], []);
  const { dismiss } = useBottomSheetModal();

  const [selectedDate, setSelectedDate] = useState<string>("");

  const onDayPress = (day: { dateString: string }) => {
    // Specify type for day parameter
    setSelectedDate(day.dateString);
  };
  return (
    <BottomSheetModal ref={ref} index={1} snapPoints={snapPoints}>
       <View style={styles.container}>
      <Text style={styles.text}>Calendar </Text>
        <Calendar
          onDayPress={onDayPress}
          markedDates={{
            [selectedDate]: {
              selected: true,
              marked: true,
              selectedColor: "#24a2bf",
            },
          }}
          style={{ borderWidth: 2, borderColor: "#000", borderRadius: 10 }}
        />
        </View>
        <Button title="Dismiss" onPress={() => dismiss()} />

    </BottomSheetModal>
  );
});

export default CalenderSheet;

const styles = StyleSheet.create({
  text: {
    color: "#24a2bf",
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: 30,
    fontSize: 30,
    textAlign: "center",
  },
  bottomSheet: {
    flex: 1,
    alignItems: "center",
    borderTopLeftRadius: 60, // Rounded top-left corner
    borderTopRightRadius: 60,
    borderColor: "#000",
    borderWidth: 3,
  },

  Icontainer: {
    marginTop: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    borderTopLeftRadius: 60, // Rounded top-left corner
    borderTopRightRadius: 60, // Rounded top-right corner
    backgroundColor: "#FFFFFF",
    marginTop: 20,
  },
  image: {
    marginTop: 70,
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    height: "10%",
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 2, // Shadow offset
    },
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow radius
    elevation: 5,
  },
});