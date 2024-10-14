/* eslint-disable prettier/prettier */
import { ImageProps } from "react-native";

export const ONBOARD_BG = "#F1F1F1";

export interface PageInterface extends Pick<ImageProps, "source"> {
  title: string;
  description: string;
}

export const PAGES: PageInterface[] = [
  {
    title: "On time Medical Help",
    description:
      "With Residentron Always be connected to the society, community and their services.",
    source: require("../assets/images/clinic-1.jpg"),
  },
  {
    title: "Home Manager",
    description:
      "Effortlessly organize and track your Society Documents, bills, issues and services. Never miss a thing.",
    source: require("../assets/images/clinic-2.png"),
  },
  {
    title: "Expense Tracker & Saver",
    description:
      "Monitor your Bills, timing, events, plans, guests & what not and progress on your journey to better living.",
    source: require("../assets/images/clinic-3.png"),
  },
];
