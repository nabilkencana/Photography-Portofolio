"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ALBUMS } from "@/data/albums";
import { ArrowUpRight } from "lucide-react";

export default function WorkSection() {
  // 4 Featured albums matching the clean Framer layout
  const featured = [
    {
      id: 1,
      title: "Delvisa",
      category: "Event & Performance",
      cover: "/assets/albums/album_1.jpg",
      date: "1/10/26",
      photoCount: 35,
      url: "https://photos.app.goo.gl/gDqdTfczTicagCDX7",
      description: "Visual documentation of Delvisa theater stage performance and artistic showcase."
    },
    {
      id: 2,
      title: "Moklet Serve - MAN 2",
      category: "Community & School",
      cover: "/assets/albums/album_2.jpg",
      date: "1/9/26",
      photoCount: 159,
      url: "https://photos.app.goo.gl/2sn1YbiT2PuUrJ13A",
      description: "Community social service and school outreach documentation of Moklet Serve at MAN 2."
    },
    {
      id: 3,
      title: "Dempo Fair - 47",
      category: "Festival & Concert",
      cover: "/assets/albums/album_3.jpg",
      date: "1/7/26",
      photoCount: 132,
      url: "https://photos.app.goo.gl/RWiYbsSnmUJDqJ2c6",
      description: "High-energy stage performances and festival highlights of Dempo Fair 47."
    },
    {
      id: 4,
      title: "Google DevFest 2025",
      category: "Tech & Conference",
      cover: "/assets/albums/album_4.jpg",
      date: "1/5/26",
      photoCount: 70,
      url: "https://photos.app.goo.gl/BBXoMtVCQBdaKA6LA",
      description: "Flagship developer technology conference documented for Google Developer Groups."
    }
  ];

  return (
    <section id="work" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header (Feedback Item 7: English Heading & Visual Philosophy) */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 pb-10 border-b border-white/10">
        <div className="space-y-4 max-w-xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-rose-500">
            Portfolio 01
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif-heading font-medium text-white leading-tight">
            See the magic<br />for yourself
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Explore the official visual documentation by M. Haikal Arrasyid. Click each project card to explore full gallery highlights.
          </p>
        </div>

        <div className="space-y-2 lg:max-w-md lg:text-right">
          <p className="text-xs font-semibold uppercase tracking-wider text-white">
            Visual Philosophy
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Precision composition, dramatic lighting, and emotional storytelling capturing every meaningful moment.
          </p>
          <div className="pt-2">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-xs font-semibold text-zinc-300 hover:text-white transition-all"
            >
              <span>Explore All 14 Albums</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2-Column Grid matching Framer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
        {featured.map((alb, idx) => (
          <motion.div
            key={alb.id}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <a
              href={alb.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-[20px] overflow-hidden bg-[#121216] border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              {/* Image Container with Hover Corner Accents */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <Image
                  src={alb.cover}
                  alt={alb.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Corner bracket accents on hover */}
                <div className="absolute inset-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/90" />
                  <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/90" />
                  <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/90" />
                  <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/90" />
                </div>

                {/* Badges */}
                <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono font-semibold text-white">
                    #{String(alb.id).padStart(2, "0")}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-rose-600/90 backdrop-blur-md text-[11px] font-semibold text-white shadow-lg shadow-rose-600/30">
                    {alb.photoCount}+ Photos
                  </span>
                </div>
              </div>

              {/* Card Meta Details */}
              <div className="p-6 flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-serif-heading font-semibold text-white group-hover:text-rose-400 transition-colors">
                    {alb.title}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {alb.category}
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-500">
                    {alb.date}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-zinc-300 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600 transition-all">
                    <span>Google Photos</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
