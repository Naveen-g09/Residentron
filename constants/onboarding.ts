/* eslint-disable prettier/prettier */
import { ImageProps } from "react-native";

export const ONBOARD_BG = "#F1F1F1";

export interface PageInterface extends Pick<ImageProps, "source"> {
  title: string;
  description: string;
}

export const PAGES: PageInterface[] = [
  {
    title: "Sales Guide",
    description:
      "Discover personalized product reviews and tips for optimal sales",
    source: require("../assets/images/sales-guide.png"),
  },
  {
    title: "Inventory Manager",
    description:
      "Effortlessly organize and track your inventory and product guidance.",
    source: require("../assets/images/inventory-manager.png"),
  },
  {
    title: "Business Tracker",
    description:
      "Monitor your sales, stock, and progress on your journey to better bussiness",
    source: require("../assets/images/business-tracker.png"),
  },
];
