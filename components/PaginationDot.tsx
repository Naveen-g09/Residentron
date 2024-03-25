import React from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface PaginationDotProps {
  index: number;
  activeDotIndex?: Animated.SharedValue<number>;
}

const PaginationDot: React.FC<PaginationDotProps> = ({
  activeDotIndex,
  index,
}) => {
  const paginatorStyle = useAnimatedStyle(() => {
    const isActive = activeDotIndex?.value === index;
    return {
      backgroundColor: withTiming(isActive ? "black" : "white", {
        duration: 300,
      }),
      width: 20,
      height: 20,
      marginHorizontal: 5,
      borderRadius: 10,
      borderWidth: 1,
    };
  });

  return <Animated.View style={paginatorStyle} />;
};

export default PaginationDot;
