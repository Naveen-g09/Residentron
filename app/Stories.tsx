import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const Stories = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: "Your Story",
      image: require("../storage/images/userProfile.png"),
    },
    {
      id: 0,
      name: "Animesh",
      image: require("../storage/images/Animesh.png"),
    },
    {
      id: 0,
      name: "Naman",
      image: require("../storage/images/Naman.png"),
    },
    {
      id: 0,
      name: "Kaashvi",
      image: require("../storage/images/Kaashvi.png"),
    },
    ,
    {
      id: 0,
      name: "Kangan",
      image: require("../storage/images/Kangan.png"),
    },
    ,
    {
      id: 0,
      name: "Ketan",
      image: require("../storage/images/Ketan.png"),
    },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 20 }}
    >
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity key={index}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 8,
                position: "relative",
              }}
            >
              {data?.id == 1 ? (
                <View
                  style={{
                    position: "absolute",
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}
                >
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: "#405de6",
                      backgroundColor: "white",
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: "white",
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: "#c13584",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={data?.image ?? require("../storage/images/post3.jpg")}
                  style={{
                    resizeMode: "cover",
                    width: "92%",
                    height: "92%",
                    borderRadius: 100,
                    backgroundColor: "orange",
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                  opacity: data?.id === 0 ? 1 : 0.5,
                }}
              >
                {data?.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
