import "react-native-url-polyfill/auto";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";

interface StorageAdapter {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

const ExpoSecureStoreAdapter: StorageAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    return SecureStore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    return SecureStore.deleteItemAsync(key);
  },
};

const supabaseUrl = "https://hnmqvjnnscdkcbxcbvyu.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhubXF2am5uc2Nka2NieGNidnl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyOTgxMjMsImV4cCI6MjAyNjg3NDEyM30.xjzSaG22KLkzskY4U3NaohE_RLTLTkeTW_2qD5RFPUc";

export const supabase: SupabaseClient = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      storage: ExpoSecureStoreAdapter,
      autoRefreshToken: true,
    },
  },
);
