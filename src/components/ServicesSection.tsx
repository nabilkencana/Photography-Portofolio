"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES } from "@/data/siteData";
import { Heart, User, Music, Laptop, GraduationCap, Activity } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  Heart,
  User,
  Music,
  Laptop,
  GraduationCap,
  Activity
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-rose-500">
          Services & Expertise
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif-heading font-medium text-white">
          Layanan Fotografi
        </h2>
        <p className="text-sm text-zinc-400">
          Dari pernikahan intim, potret profesional, hingga panggung festival akbar, setiap momen diabadikan dengan dedikasi penuh.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((srv, idx) => {
          const Icon = ICON_MAP[srv.icon] || Heart;
          return (
            <motion.div
              key={srv.id}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif-heading font-semibold text-white group-hover:text-rose-400 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-2">
                    {srv.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
