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
        width,
        height,
      }}
      className="items-center justify-center"
    >
      <View
        style={{
          width: CIRCLE_WIDTH,
        }}
        className="aspect-square items-center justify-center mb-[100]"
      >
        {/* Circle */}
        <Animated.View className="relative w-full pb-[100%] bg-white rounded-full" />

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
      <Text className="text-center mb-[15] text-2xl font-[700]">
        {page.title}
      </Text>
      <Text className="text-center text-lg text-neutral-500 mx-2">
        {page.description}
      </Text>
    </View>
  );
};
export { width, height };

export default OnboardingPage;
