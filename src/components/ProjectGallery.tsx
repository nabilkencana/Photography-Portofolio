"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface ProjectGalleryProps {
  photos: string[];
  title: string;
}

export default function ProjectGallery({ photos, title }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, photos.length]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-serif-heading font-semibold text-white">
            Koleksi Foto Sorotan
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Menampilkan {photos.length} foto pilihan dari dokumentasi {title}. Klik foto mana saja untuk memperbesar.
          </p>
        </div>
        <span className="text-xs font-mono text-zinc-500">
          {photos.length} FOTO
        </span>
      </div>

      {/* Grid of 10 Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {photos.map((photoSrc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
            onClick={() => setLightboxIndex(idx)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer shadow-lg hover:border-white/30 transition-all duration-300"
          >
            <Image
              src={photoSrc}
              alt={`${title} Foto #${idx + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Hover overlay with photo number & expand icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
              <span className="text-xs font-mono font-medium text-white px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/15">
                Foto #{idx + 1}
              </span>
              <span className="p-2 rounded-full bg-rose-600/90 text-white shadow-lg">
                <Maximize2 className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Bar Controls */}
            <div className="absolute top-6 inset-x-6 flex items-center justify-between text-white z-10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/15">
                  Foto {lightboxIndex + 1} dari {photos.length}
                </span>
                <span className="text-sm font-medium text-zinc-300 hidden sm:inline">
                  {title}
                </span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(null);
                }}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Tutup (ESC)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1));
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
              title="Foto Sebelumnya"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : 0));
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
              title="Foto Berikutnya"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <div
              className="relative w-full max-w-5xl aspect-[16/10] sm:aspect-[16/11] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-950"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[lightboxIndex]}
                alt={`${title} Fullscreen #${lightboxIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
