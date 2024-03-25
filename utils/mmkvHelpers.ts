import { MMKV } from "react-native-mmkv";

// import { Message, message } from "./types/chat";
export const storage = new MMKV();

const CHAT_PREFIX = "chat:";

export const getAllKeys = (): string[] => {
  return storage.getAllKeys();
};

export const deleteAllKeysData = () => {
  const keys = storage.clearAll();
};
