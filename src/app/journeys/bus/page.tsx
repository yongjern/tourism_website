import type { Metadata } from "next";
import BusJourney from "@/components/BusJourney";

export const metadata: Metadata = {
  title: "MyBus Kuantan Routes | Warisan Pahang",
  description: "Browse 16 BAS.MY routes connecting Kuantan with destinations across the district and beyond.",
};

export default function BusJourneyPage() {
  return <BusJourney />;
}
