import notifee, { AndroidStyle } from "@notifee/react-native";

import {
  BigTextNotificationProps,
  InboxNotificationProps,
  MessageNotificationProps,
  PictureNotificationProps,
  SimpleNotificationProps,
} from "./notificationInterfaces";

export async function displaySimpleNotification(
  props: SimpleNotificationProps,
) {
  const channelId = await notifee.createChannel({
    ...props.config,
    id: props.id,
    name: props.id,
    vibration: true,
    vibrationPattern: [500, 300],
    sound: "notify",
  });

  await notifee.displayNotification({
    title: props.title,
    body: props.body,
    id: props.id,
    ...props.notificationConfig,
    android: {
      channelId,
      ...props.notificationConfig?.android,
    },
  });
}

export async function displayPictureNotification(
  props: PictureNotificationProps,
) {
  const channelId = await notifee.createChannel({
    ...props.config,
    id: props.id,
    name: `Residentron channel`,
    vibration: true,
    vibrationPattern: [500, 300],
    sound: "notify",
  });

  await notifee.displayNotification({
    ...props.notificationConfig,
    title: props.title,
    body: props.body,
    id: props.id,
    android: {
      channelId,
      style: {
        type: AndroidStyle.BIGPICTURE,
        picture: props.picture,
      },
      ...props.notificationConfig?.android,
    },
  });
}

export async function displayMessageNotification(
  props: MessageNotificationProps,
) {
  const channelId = await notifee.createChannel({
    ...props.config,
    id: props.id,
    vibration: true,
    vibrationPattern: [500, 300],
    name: `Residentron channel`,
    sound: "notify",
  });

  await notifee.displayNotification({
    ...props.notificationConfig,
    title: props.title,
    body: props.body,
    id: props.id,
    android: {
      channelId,
      style: {
        type: AndroidStyle.MESSAGING,
        person: props.person,
        messages: props.messages,
      },
      ...props.notificationConfig?.android,
    },
  });
}

export async function displayInboxNotification(props: InboxNotificationProps) {
  const channelId = await notifee.createChannel({
    ...props.config,
    id: props.id,
    name: `Residentron`,
    vibration: true,
    vibrationPattern: [500, 300],
    sound: "notify",
  });

  await notifee.displayNotification({
    ...props.notificationConfig,
    title: props.title,
    body: props.body,
    id: props.id,
    android: {
      channelId,
      style: {
        type: AndroidStyle.INBOX,
        lines: props.messages,
      },
      ...props.notificationConfig?.android,
    },
  });
}

export async function displayTextNotification(props: BigTextNotificationProps) {
  const channelId = await notifee.createChannel({
    ...props.config,
    id: props.id,
    name: `Residentron channel`,
    vibration: true,
    vibrationPattern: [500, 300],
    sound: "notify",
  });

  await notifee.displayNotification({
    ...props.notificationConfig,
    title: props.title,
    body: props.body,
    id: props.id,
    android: {
      channelId,
      style: {
        type: AndroidStyle.BIGTEXT,
        text: props.text,
      },
      ...props.notificationConfig?.android,
    },
  });
}
