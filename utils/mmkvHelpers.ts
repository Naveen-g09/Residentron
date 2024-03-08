import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

const CHAT_PREFIX = "chat:";

export const getAllKeys = (): string[] => {
  return storage.getAllKeys();
};


export const deleteAllKeysData = () => {
  const keys = storage.clearAll();
};
