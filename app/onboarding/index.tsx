/* eslint-disable prettier/prettier */
import { AntDesign } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import * as Font from "expo-font";
import { Stack, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

import OnboardingPage, { width } from "@/components/OnboardingPage";
import PaginationDot from "@/components/PaginationDot";
import { PAGES, ONBOARD_BG } from "@/constants/onboarding";
import { IS_ONBOARDED_KEY } from "@/utils/costants/chat";
import { storage } from "@/utils/mmkvHelpers";

SplashScreen.preventAutoHideAsync();

export default function OnboardingScreen() {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x;
    },
  });

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / width);
  });

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const onIconPress = useCallback(async () => {
    if (scrollRef.current) {
      const nextIndex = activeIndex.value + 1;
      if (nextIndex < PAGES.length) {
        scrollRef.current.scrollTo({
          x: nextIndex * width,
          animated: true,
        });
      } else {
        // Store the onboarding status in AsyncStorage
        storage.set(IS_ONBOARDED_KEY, true);
        router.replace("/(tabs)/");
      }
    }
  }, [activeIndex]);

  console.log("onboarding rendered");

  const [appIsReady, setAppIsReady] = React.useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);

        await new Promise((resolve) => setTimeout(resolve));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: ONBOARD_BG,
      }}
      onLayout={onLayoutRootView}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        {PAGES.map((page, index) => (
          <OnboardingPage
            key={index.toString()}
            page={page}
            translateX={translateX}
            index={index}
          />
        ))}
      </Animated.ScrollView>

      {/* FOOTER */}
      <View
        style={{
          height: 12,
          marginBottom: 2,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* Paginator */}

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 100,
          }}
        >
          {PAGES.map((_, index) => {
            return (
              <PaginationDot
                key={index.toString()}
                index={index}
                activeDotIndex={activeIndex}
              />
            );
          })}
        </View>

        {/* Icon or Button Container */}

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 84,
          }}
        >
          <AntDesign
            name="arrowright"
            size={24}
            color="black"
            onPress={onIconPress}
          />
        </View>
      </View>
    </View>
  );
}
