import notifee, { TimestampTrigger, TriggerType } from "@notifee/react-native";

export async function onDisplayNotification() {
  // Request permissions (required for iOS)
  await notifee.requestPermission();

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: "default",
    name: "Default Channel",
  });

  // Display a notification
  await notifee.displayNotification({
    title:
      '<p style="color: #4caf50;"><b>Heeeeeeeeeellllllllllo Resident</b> &#128075;</p>',
    body: 'Special notice: <b>we have revised</b> the <p style="color: #ffffff; background-color: #9c27b0;">rules for the community</p> &#127881;',
    android: {
      channelId,
      color: "#4caf50",
      actions: [
        {
          title: "<b>View</b> &#128065;",
          pressAction: { id: "view" },
        },
        {
          title: '<p style="color: #f44336;"><b>Ignore</b> &#128580;</p>',
          pressAction: { id: "ignore" },
        },
      ],
      pressAction: {
        id: "default",
      },
    },
  });
}

export async function onCreateTriggerNotification() {
  const date = new Date(Date.now());
  date.setHours(22);
  date.setMinutes(21);

  // Create a time-based trigger
  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
  };

  // Create a trigger notification
  await notifee.createTriggerNotification(
    {
      title: "Emergency Meeting in society office",
      body: "Today at 11:20pm",
      android: {
        channelId: "default",
      },
    },
    trigger,
  );
}

// export async function sendPushNotification(expoPushToken: string) {
//   const message = {
//     to: expoPushToken,
//     sound: "default",
//     title: "Original Title",
//     body: "And here is the body!",
//     data: { data: "goes here" },
//   };

//   await fetch("https://exp.host/--/api/v2/push/send", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Accept-encoding": "gzip, deflate",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(message),
//   });
// }
