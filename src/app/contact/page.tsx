import type { Metadata } from "next";
import ContactView from "@/components/views/ContactView";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: `Contact | ${SITE_CONFIG.name}`,
  description: `Hubungi ${SITE_CONFIG.name} untuk dokumentasi acara, wisuda, panggung seni, dan konferensi teknologi.`,
};

export default function ContactPage() {
  return <ContactView />;
}
