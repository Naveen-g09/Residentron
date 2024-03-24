import "react-native-url-polyfill/auto";
import { Session } from "@supabase/supabase-js";
import React, { useState, useEffect } from "react";
import { View } from "react-native";

import Account from "../components/Account";
import Auth from "../components/Auth";
import { supabase } from "../utils/supabase";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <View>
      {session && session.user ? (
        <Account key={session.user.id} session={session} />
      ) : (
        <Auth />
      )}
    </View>
  );
}
