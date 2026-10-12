"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG, HERO_TESTIMONIAL, STATS } from "@/data/siteData";
import { ArrowDown, ArrowUpRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-36 pb-20 flex flex-col justify-center px-6 max-w-6xl mx-auto">
      {/* Camera Spec Indicator */}
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 mb-6 backdrop-blur-md self-start"
      >
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
        <span>RAW VIEW &bull; 50mm f/1.8 &bull; 1/250s &bull; ISO 100</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-rose-500">
              Photographer &bull; Software Engineer
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-heading font-medium tracking-tight text-white leading-[1.08]">
              Capturing moments that tell <span className="italic font-normal text-rose-400">timeless stories.</span>
            </h1>
          </div>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
            Dokumentasi visual profesional oleh <strong className="text-white font-medium">{SITE_CONFIG.name}</strong> (Siswa Rekayasa Perangkat Lunak di {SITE_CONFIG.school}). Memadukan presisi logika sistem dan kepekaan estetika visual untuk mengabadikan setiap momen secara autentik.
          </p>

          {/* Philosophy Quote */}
          <blockquote className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-rose-500 text-sm italic text-zinc-300">
            &ldquo;{SITE_CONFIG.philosophy}&rdquo;
          </blockquote>

          {/* Client Testimonial Card (Feedback Item 1: Nabil Kencana) */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md max-w-md flex items-start gap-4 shadow-xl">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/20">
              <Image
                src={HERO_TESTIMONIAL.avatar}
                alt={HERO_TESTIMONIAL.author}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white tracking-wide">
                  {HERO_TESTIMONIAL.rating}
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                &ldquo;{HERO_TESTIMONIAL.quote}&rdquo;
              </p>
              <p className="text-[11px] font-semibold text-rose-300 pt-0.5">
                {HERO_TESTIMONIAL.author}, <span className="text-zinc-400 font-normal">{HERO_TESTIMONIAL.role}</span>
              </p>
            </div>
          </div>

          {/* Call to Actions & Contact Badge (Feedback Item 2: Haikal Avatar) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/portfolio"
              className="px-6 py-3.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-xl shadow-white/10"
            >
              Lihat Portofolio
            </Link>

            {/* Haikal Contact Badge */}
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 p-2 pr-4 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/25 transition-all"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-rose-500/50">
                <Image
                  src={SITE_CONFIG.profileImg}
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left text-xs">
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for work
                </p>
                <p className="text-[10px] text-zinc-400">Book your session today</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Column Visual Card */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 group aspect-[4/5]">
            <Image
              src={SITE_CONFIG.heroImg}
              alt="M. Haikal Arrasyid Hero"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            
            <div className="absolute bottom-5 inset-x-5 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-rose-400 font-mono tracking-wider">CREATIVE PROFILE</p>
                  <p className="text-base font-bold text-white">{SITE_CONFIG.name}</p>
                  <p className="text-xs text-zinc-400">{SITE_CONFIG.school} &bull; {SITE_CONFIG.location}</p>
                </div>
                <Link
                  href="/portfolio"
                  className="p-2.5 rounded-full bg-rose-600 text-white hover:bg-rose-500 transition-colors"
                  title="Lihat Portofolio"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Verified Stats Bar (Feedback Items 4, 5, 6) */}
      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 pt-8 border-t border-white/10"
      >
        {STATS.map((s, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
            <p className="text-3xl sm:text-4xl font-serif-heading font-semibold text-white tracking-tight">
              {s.value}
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-400 mt-2">
              {s.label}
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              {s.desc}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
