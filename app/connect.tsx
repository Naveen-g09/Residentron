import React from "react";
import { View, Text } from "react-native";
// import { useCameraPermission } from "react-native-vision-camera";

// import CameraComponent from "@/components/CameraComponent";

//TODO: add a notification icon
//TODO: add a bottomsheet onpress of details tab which shows details of resident
//TODO: add grids for posts, members, and events, chats, notices, posts, announcements, and polls

// const Connect = () => {
//   // const { hasPermission, requestPermission: requestCameraPermissions } =
//   //   useCameraPermission();

//   const [isCameraModalVisible, setCameraModalVisible] = useState(false);
//   const handleCameraPress = async () => {
//     const da = await requestCameraPermissions();
//     console.log("request Camera Permissions", da);
//     if (hasPermission) {
//       console.log("hasPermission", hasPermission);
//       setCameraModalVisible(true);
//     }
//   };

//   return (
//     <View style={{ height: "100%" }}>
//       <StatusBar backgroundColor="white" barStyle="dark-content" animated />
//       <View
//         style={{
//           justifyContent: "space-between",
//           flexDirection: "row",
//           paddingHorizontal: 15,
//           alignItems: "center",
//         }}
//       >
//         <TouchableOpacity onPress={handleCameraPress}>
//           <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
//         </TouchableOpacity>
//         <Text
//           style={{
//             fontFamily: "Lobster-Regular",
//             fontSize: 25,
//             fontWeight: "500",
//           }}
//         >
//           Residentron
//         </Text>
//         <Feather name="navigation" style={{ fontSize: 24 }} />
//       </View>

//       <ScrollView>
//         <Stories />
//         <Post />
//         <View
//           style={{
//             justifyContent: "center",
//             alignItems: "center",
//             padding: 20,
//           }}
//         >
//           <Ionic
//             name="refresh-outline"
//             style={{ fontSize: 60, opacity: 0.2 }}
//           />
//         </View>
//       </ScrollView>
//       <Modal
//         onRequestClose={() => setCameraModalVisible(false)}
//         animationType="slide"
//         transparent={false}
//         visible={isCameraModalVisible}
//       >
//         <CameraComponent
//           isActive={isCameraModalVisible}
//           setCameraModalVisible={setCameraModalVisible}
//         />
//       </Modal>
//     </View>
//   );
// };

const Connect = () => {
  return (
    <View>
      <Text>Connect</Text>
    </View>
  );
};
export default Connect;
