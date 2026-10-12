import type { Metadata } from "next";
import HomeView from "@/components/views/HomeView";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Professional Photography Portfolio`,
  description: SITE_CONFIG.bio,
  icons: {
    icon: "/assets/profile/logo.png",
  },
};

export default function HomePage() {
  return <HomeView />;
}
