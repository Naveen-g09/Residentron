/* eslint-disable prettier/prettier */
import { ImageProps } from "react-native";

export const ONBOARD_BG = "#F1F1F1";

export interface PageInterface extends Pick<ImageProps, "source"> {
  title: string;
  description: string;
}

export const PAGES: PageInterface[] = [
  {
    title: "Wellness Guide",
    description:
      "Discover personalized health advice and lifestyle tips for optimal wellness",
    source: require("../assets/images/clinic-1.jpg"),
  },
  {
    title: "Medication Manager",
    description:
      "Effortlessly organize and track your medications and dosage guidance.",
    source: require("../assets/images/clinic-2.png"),
  },
  {
    title: "Health Tracker",
    description:
      "Monitor your vitals, symptoms, and progress on your journey to better health",
    source: require("../assets/images/clinic-3.png"),
  },
];
