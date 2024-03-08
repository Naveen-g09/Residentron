import React from "react";
import { Dimensions, View, Text } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { PageInterface } from "@/constants/onboarding";

interface PageProps {
  page: PageInterface;
  translateX: Animated.SharedValue<number>;
  index: number;
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CIRCLE_WIDTH = width * 0.7;

const OnboardingPage: React.FC<PageProps> = ({ page, translateX, index }) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const onboardImageStyle = useAnimatedStyle(() => {
    const progress = interpolate(
      translateX.value,
      inputRange,
      [0, 0, 1],
      Extrapolation.CLAMP,
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
      transform: [
        {
          rotate: `${progress * Math.PI}rad`,
        },
      ],
    };
  });

  return (
    <View
      style={{
        width: width,
        height: height,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: CIRCLE_WIDTH,
          aspectRatio: 1, // For aspect-square
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 100,
        }}
      >
        {/* Circle */}
        <Animated.View
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "100%",
            backgroundColor: "white",
            borderRadius: 50, // Use a numeric value for borderRadius
          }}
        />

        <Animated.Image
          source={page.source}
          style={[
            {
              height: height * 0.6,
              aspectRatio: 1,
              position: "absolute",
              width: width * 0.8,
            },
            onboardImageStyle,
          ]}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          marginBottom: 15,
          fontSize: 20,
          fontWeight: "700",
        }}
      >
        {page.title}
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          color: "#888",
          marginHorizontal: 2,
        }}
      >
        {page.description}
      </Text>
    </View>
  );
};
export { width, height };

export default OnboardingPage;
