import type { Metadata } from "next";
import PortfolioView from "@/components/views/PortfolioView";

export const metadata: Metadata = {
  title: "Portfolio | M. Haikal Arrasyid - Koleksi 14 Album Dokumentasi",
  description: "Arsip visual 14 album dokumentasi resmi M. Haikal Arrasyid: panggung seni, festival, bakti sosial, konferensi teknologi, wisuda, dan turnamen olahraga.",
};

export default function PortfolioPage() {
  return <PortfolioView />;
}
