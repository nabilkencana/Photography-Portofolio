import type { Metadata } from "next";
import AboutView from "@/components/views/AboutView";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: `About | ${SITE_CONFIG.name} - Professional Photographer`,
  description: `Profil resmi ${SITE_CONFIG.name}, siswa Rekayasa Perangkat Lunak di SMK Telkom Malang yang mendedikasikan diri pada pembangunan sistem web modern dan fotografi profesional.`,
};

export default function AboutPage() {
  return <AboutView />;
}
