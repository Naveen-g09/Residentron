import { Redirect, router } from "expo-router";
import React, { useEffect, useState } from "react";

import { supabase } from "./lib/supabase-client";

import { IS_ONBOARDED_KEY } from "@/utils/costants/chat";
import { storage } from "@/utils/mmkvHelpers";

export default function Page() {
  const [session, setSession] = useState(null);
  const isOnboarded = storage.getBoolean(IS_ONBOARDED_KEY);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }: { data: { session: any } }) => {
        setSession(session);
        if (session) {
          router.replace("/(tabs)/");
        } else {
          console.log("no user");
        }
      });

    supabase.auth.onAuthStateChange((event: any, session: any) => {
      setSession(session);
      if (session) {
        router.replace("/(tabs)/");
      } else {
        console.log("no user");
        router.replace("../(auth)/login");
      }
    });
  }, []);

  if (!isOnboarded) {
    return <Redirect href="/onboarding/" />;
  }

  if (!session) {
    return <Redirect href="../(auth)/login" />;
  }

  return <Redirect href="/(tabs)/" />;
}
