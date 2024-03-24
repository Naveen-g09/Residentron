import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://hnmqvjnnscdkcbxcbvyu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhubXF2am5uc2Nka2NieGNidnl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyOTgxMjMsImV4cCI6MjAyNjg3NDEyM30.xjzSaG22KLkzskY4U3NaohE_RLTLTkeTW_2qD5RFPUc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});
