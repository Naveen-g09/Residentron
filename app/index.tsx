import notifee from "@notifee/react-native";
import { Redirect } from "expo-router";
import React from "react";

import { IS_ONBOARDED_KEY } from "@/utils/costants/chat";
import { storage } from "@/utils/mmkvHelpers";

notifee.onBackgroundEvent(async ({ type, detail }) => {
  const { notification, pressAction } = detail;
});

export default function Page() {
  const isOnboarded = storage.getBoolean(IS_ONBOARDED_KEY);

  if (!isOnboarded) {
    return <Redirect href="/onboarding/" />;
  }

  return <Redirect href="/(tabs)/home" />;
}
