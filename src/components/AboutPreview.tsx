"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/siteData";
import { FileText, ArrowRight, Mail } from "lucide-react";
import { InstagramIcon, LinkedinIcon, GithubIcon } from "@/components/SocialIcons";

export default function AboutPreview() {
  return (
    <section className="py-24 px-6 border-t border-white/5 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
              <Image
                src="/assets/images/wOpnQdnx8iRACvTbKpT2LeQypc.png"
                alt="M. Haikal Arrasyid"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                <p className="text-white font-semibold text-sm">M. Haikal Arrasyid</p>
                <p className="text-zinc-400 text-xs">SMK Telkom Malang • Software Engineering</p>
              </div>
            </div>
          </motion.div>

          {/* Text & Philosophy Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-rose-500">
                About the Photographer
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-heading font-medium text-white leading-tight">
                Memadukan Presisi Kode &amp; Kepekaan Visual
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Sebagai siswa Rekayasa Perangkat Lunak di SMK Telkom Malang, saya melihat fotografi sebagai seni menangkap emosi autentik yang didukung oleh disiplin teknis.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Dari panggung teater Delvisa, keriuhan konser Dempo Fair 47, hingga formalitas konferensi Google DevFest 2025, setiap karya didedikasikan untuk mengabadikan momen yang berarti bagi Anda.
              </p>
            </div>

            {/* Philosophy Highlight Box */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border-l-2 border-rose-500 border-y border-r border-white/5 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400">
                Creative Philosophy
              </span>
              <p className="text-white font-serif-heading italic text-base sm:text-lg">
                &ldquo;Leveraging code to solve problems, and visuals to tell stories.&rdquo;
              </p>
            </div>

            {/* Actions & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/about"
                className="px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-xs tracking-wide hover:bg-zinc-200 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Pelajari Profil Lengkap</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center gap-2 ml-auto">
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
