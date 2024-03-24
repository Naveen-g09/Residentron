/* eslint-disable prettier/prettier */

import { Redirect } from "expo-router";
import React from "react";

import { IS_ONBOARDED_KEY } from "@/utils/costants/chat";
import { storage } from "@/utils/mmkvHelpers";

const Page = () => {
  const isOnboarded = storage.getBoolean(IS_ONBOARDED_KEY);
  return isOnboarded ? (
    <Redirect href="/(tabs)/" />
  ) : (
    <Redirect href="/onboarding/" />
  );
};

export default Page;
