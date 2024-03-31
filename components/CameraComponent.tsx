import {
  AntDesign,
  Feather,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import LottieView from "lottie-react-native";
import React, { useCallback, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import {
  Camera,
  CameraPosition,
  CodeScanner,
} from "react-native-vision-camera";

const width = Dimensions.get("window").width;
const height = Dimensions.get("screen").height;
console.log("width", width);
console.log("height", height);
export default function CameraComponent({
  isActive,
  setCameraModalVisible,
}: {
  isActive: boolean;
  setCameraModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const camera = useRef<Camera>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraType, setCameraType] = useState<CameraPosition>("front");
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [showQR, setShowQR] = useState<boolean>(false);
  const codeScanner: CodeScanner = {
    codeTypes: [
      "qr",
      "ean-13",
      "codabar",
      "aztec",
      "code-128",
      "code-39",
      "code-93",
      "data-matrix",
      "ean-8",
      "itf",
      "pdf-417",
      "upc-e",
    ],
    onCodeScanned: (codes) => {
      if (!showQR) {
        return;
      }
      if (isScanningComplete) return;
      setIsScanningComplete(true);
      console.log("codes", codes);
      setTimeout(() => {
        setCameraModalVisible(false);
      }, 5000);
    },
  };
  const [isScanningComplete, setIsScanningComplete] = useState<boolean>(false);

  const device2 = useCallback(
    (cameraType: CameraPosition) => {
      const devices = Camera.getAvailableCameraDevices();
      if (cameraType === "back") {
        const device = devices.find((d) => d.position === "front");
        if (device) {
          return device;
        }
      } else {
        const device = devices.find((d) => d.position === "back");
        if (device) {
          return device;
        }
      }
    },
    [cameraType],
  );
  const devices = Camera.getAvailableCameraDevices();

  const device = devices.find((d) => d.position === "front");

  const captureImage = async () => {
    console.log("before try");
    if (!camera?.current) return;

    try {
      console.log("inside try");
      const photo = await camera.current.takePhoto({
        qualityPrioritization: "speed",
        flash: "off",
        enableShutterSound: false,
      });
      setPhotoUri(photo?.path);
    } catch (err) {
      console.log("image capture image", err);
    }
  };

  const switchCamera = () => {
    setCameraType((prev) => {
      if (prev === "front" && showQR) {
        setShowQR(false);
      }
      return prev === "back" ? "front" : "back";
    });
  };

  const animation = useRef(null);

  if (device == null)
    return (
      <View>
        <Text>NoCamera</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        onInitialized={() => setIsCameraReady(true)}
        style={styles.camera}
        device={device2(cameraType) || device}
        isActive={isActive && !photoUri}
      />
      {photoUri && <Image source={{ uri: `file://${photoUri}` }} style={{}} />}
      {!photoUri && (
        <View style={styles.topRightContainer}>
          <TouchableOpacity style={styles.button} onPress={switchCamera}>
            <Ionicons name="sync-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
      )}
      {showQR && (
        <View style={styles.fullScreenContainer}>
          <LottieView
            autoPlay
            ref={animation}
            style={styles.qrAnimation}
            source={require("./../assets/lottie/qr-scan.json")}
          />
        </View>
      )}
      <View style={styles.bottomBar}>
        {photoUri ? (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setCameraModalVisible(false)}
            >
              <AntDesign name="check" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setPhotoUri(null)}
            >
              <AntDesign name="close" size={30} color="black" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setCameraModalVisible(false)}
            >
              <AntDesign name="close" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              disabled={!isCameraReady}
              onPress={captureImage}
            >
              <FontAwesome6 name="circle" size={30} color="black" />
            </TouchableOpacity>
            {showQR ? (
              <TouchableOpacity
                style={styles.button}
                onPress={() => setShowQR(false)}
              >
                <Feather name="camera" size={30} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() => setShowQR(true)}
              >
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    position: "relative",
  },
  camera: {
    flex: 1,
  },
  topRightContainer: {
    position: "absolute",
    top: 8,
    right: 0,
    flexDirection: "column",
    alignItems: "flex-end",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 10,
    marginBottom: 10,
  },
  fullScreenContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  qrAnimation: {
    width: 200,
    height: 200,
    backgroundColor: "transparent",
  },
  bottomBar: {
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
