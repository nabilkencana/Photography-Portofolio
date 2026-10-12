"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ALBUMS, Album } from "@/data/albums";
import { ArrowUpRight, Camera, Calendar, MapPin } from "lucide-react";

interface CategoryGroup {
  id: string;
  label: string;
  icon: string;
  filter: (a: Album) => boolean;
}

const CATEGORIES: CategoryGroup[] = [
  { id: "all", label: "Semua Album", icon: "✨", filter: () => true },
  {
    id: "moklet",
    label: "Moklet & School",
    icon: "🏫",
    filter: (a) =>
      a.slug.includes("moklet") ||
      a.slug.includes("diesnat") ||
      a.slug.includes("mic"),
  },
  {
    id: "festivals",
    label: "Festivals & Stage",
    icon: "🎸",
    filter: (a) =>
      a.slug.includes("delvisa") ||
      a.slug.includes("dempo") ||
      a.slug.includes("specta-show"),
  },
  {
    id: "tech",
    label: "Tech & Corporate",
    icon: "💻",
    filter: (a) =>
      a.slug.includes("devfest") || a.slug.includes("meo"),
  },
  {
    id: "grad",
    label: "Graduations",
    icon: "🎓",
    filter: (a) =>
      a.slug.includes("wisuda"),
  },
  {
    id: "sports",
    label: "Sports & Lifestyle",
    icon: "🏃",
    filter: (a) =>
      a.slug.includes("olima") ||
      a.slug.includes("fun-run") ||
      a.slug.includes("dc-specta"),
  },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("all");

  const currentCategory = CATEGORIES.find((c) => c.id === activeTab) || CATEGORIES[0];
  const displayedAlbums = ALBUMS.filter(currentCategory.filter);

  return (
    <div className="pt-36 pb-24 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-rose-500">
          Curated Visual Archive
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif-heading font-medium text-white tracking-tight">
          Koleksi 14 Album Dokumentasi
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          Arsip dokumentasi visual resmi M. Haikal Arrasyid. Klik setiap kartu proyek untuk membuka halaman detail portofolio dan melihat galeri foto resolusi tinggi.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-6">
          {CATEGORIES.map((cat) => {
            const count = ALBUMS.filter(cat.filter).length;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-white text-zinc-950 shadow-lg shadow-white/10 scale-105"
                    : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-zinc-900 text-white" : "bg-white/10 text-zinc-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Albums - Navigates Internally to Detail Pages */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {displayedAlbums.map((alb) => (
            <motion.div
              layout
              key={alb.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
            >
              <Link
                href={`/portfolio/${alb.slug}`}
                className="group block rounded-[20px] overflow-hidden bg-[#121216] border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-[16/11] overflow-hidden bg-zinc-900">
                  <Image
                    src={alb.cover}
                    alt={alb.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Corner bracket accents on hover */}
                  <div className="absolute inset-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-white/90" />
                    <span className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-white/90" />
                    <span className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-white/90" />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-white/90" />
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono font-semibold text-white">
                      #{String(alb.id).padStart(2, "0")}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-rose-600/90 backdrop-blur-md text-[10px] font-semibold text-white shadow-lg shadow-rose-600/30">
                      {alb.photoCount}+ Foto
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-semibold text-rose-300">
                      {alb.category}
                    </span>
                  </div>
                </div>

                {/* Card Meta Details */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-serif-heading font-semibold text-white group-hover:text-rose-400 transition-colors">
                      {alb.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {alb.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
