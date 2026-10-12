"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/siteData";
import { Camera, Aperture, Layers, Sparkles } from "lucide-react";

export default function BentoGrid() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-rose-400">
          Visual Architecture
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif-heading font-medium text-white">
          Karakter Visual &amp; Komposisi
        </h2>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          Eksplorasi estetika sinematik, ketajaman optik, dan penataan cahaya presisi di setiap frame foto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: Large Featured Portrait (Span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 rounded-3xl overflow-hidden glass-card relative group min-h-[380px] p-8 flex flex-col justify-end"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/albums/album_3.jpg"
              alt="Dempo Fair 47 Concert"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>

          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono">
              <Camera className="w-4 h-4" />
              <span>STAGE &amp; CONCERTS</span>
            </div>
            <h3 className="text-2xl font-serif-heading font-semibold text-white">
              Pencahayaan Panggung Spektakuler
            </h3>
            <p className="text-xs text-zinc-300 max-w-md leading-relaxed">
              Menangkap energi panggung festival dan konser musik di Dempo Fair 47 dengan presisi ISO tinggi dan pemisahan subjek yang dramatis.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Technical Specs (Span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-5 rounded-3xl p-8 glass-card border border-white/10 flex flex-col justify-between bg-zinc-950/80"
        >
          <div className="space-y-4">
            <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-400 w-fit">
              <Aperture className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif-heading font-semibold text-white">
              Presisi Lensa &amp; Optik
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Memanfaatkan aperture lebar f/1.4 hingga f/2.8 dari lensa prima dan zoom standar L-series untuk isolasi latar belakang yang memukau dan ketajaman mikro.
            </p>
          </div>

          <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-4 text-xs font-mono text-zinc-400">
            <div>
              <span className="block text-zinc-500 text-[10px]">SHUTTER SPEED</span>
              <span className="text-white font-semibold">1/8000s Peak</span>
            </div>
            <div>
              <span className="block text-zinc-500 text-[10px]">SENSOR RESOLUTION</span>
              <span className="text-white font-semibold">45MP Full-Frame</span>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Color Grading & Editing (Span 4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-4 rounded-3xl p-8 glass-card border border-white/10 flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 w-fit">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif-heading font-semibold text-white">
              Color Science &amp; LUTs
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Proses retouching warna yang mempertahankan tone kulit alami dengan kontras sinematik yang tidak berlebihan.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs font-mono text-purple-400">
            <Sparkles className="w-4 h-4" />
            <span>Custom Film Simulation</span>
          </div>
        </motion.div>

        {/* Card 4: Event Moments (Span 8) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-8 rounded-3xl overflow-hidden glass-card relative group min-h-[300px] p-8 flex flex-col justify-end"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/albums/album_4.jpg"
              alt="Google DevFest 2025"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>

          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono">
              <Sparkles className="w-4 h-4" />
              <span>CORPORATE &amp; TECH</span>
            </div>
            <h3 className="text-2xl font-serif-heading font-semibold text-white">
              Dokumentasi Konferensi Teknologi
            </h3>
            <p className="text-xs text-zinc-300 max-w-lg leading-relaxed">
              Merekam interaksi antusias peserta, presentasi pembicara kelas dunia, dan sesi networking di Google DevFest 2025 Malang.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
