"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/data/siteData";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
        <div className="space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-rose-500">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-heading font-medium text-white">
            Pengalaman & Testimoni
          </h2>
          <p className="text-sm text-zinc-400 max-w-lg">
            Pengalaman nyata dari panitia festival, rekan kolaborasi, dan klien yang telah mempercayakan dokumentasi momen penting mereka.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div
            key={idx}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-zinc-600" />
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-white/5">
              <p className="text-sm font-semibold text-white">
                {t.author}
              </p>
              <p className="text-xs text-rose-400 font-mono mt-0.5">
                {t.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
