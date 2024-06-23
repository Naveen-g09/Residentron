import {
  AndroidChannel,
  Notification,
  AndroidMessagingStyleMessage,
  AndroidPerson,
} from "@notifee/react-native";

export interface MessageNotificationProps {
  id: string;
  config?: Omit<Omit<AndroidChannel, "id">, "channel">;
  title: string;
  body: string;
  notificationConfig?: Omit<Omit<Notification, "title">, "body">;
  messages: AndroidMessagingStyleMessage[];
  person: AndroidPerson;
}
export interface PictureNotificationProps {
  id: string;
  config?: Omit<Omit<AndroidChannel, "id">, "channel">;
  title: string;
  body: string;
  notificationConfig?: Omit<Omit<Notification, "title">, "body">;
  picture: string;
}

export interface InboxNotificationProps {
  id: string;
  config?: Omit<Omit<AndroidChannel, "id">, "channel">;
  title: string;
  body: string;
  notificationConfig?: Omit<Omit<Notification, "title">, "body">;
  messages: string[];
}

export interface SimpleNotificationProps {
  id: string;
  config?: Omit<Omit<AndroidChannel, "id">, "channel">;
  title?: string;
  body?: string;
  notificationConfig?: Omit<Omit<Notification, "title">, "body">;
}

export interface BigTextNotificationProps {
  id: string;
  config?: Omit<Omit<AndroidChannel, "id">, "channel">;
  title: string;
  body: string;
  notificationConfig?: Omit<Omit<Notification, "title">, "body">;
  text: string;
}
