"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/data/siteData";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="glass-nav rounded-full px-5 py-3 w-full max-w-5xl flex items-center justify-between shadow-2xl">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-full overflow-hidden bg-black/40 p-1 border border-white/10 group-hover:scale-105 transition-transform duration-300">
            <Image
              src={SITE_CONFIG.profileImg}
              alt={SITE_CONFIG.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-rose-400 transition-colors">
              {SITE_CONFIG.name}
            </span>
            <span className="text-[10px] font-mono text-zinc-400">
              Photographer &bull; Malang
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wide text-zinc-300">
          <Link href="/" className="hover:text-rose-400 transition-colors">HOME</Link>
          <Link href="/about" className="hover:text-rose-400 transition-colors">ABOUT</Link>
          <Link href="/portfolio" className="hover:text-rose-400 transition-colors">PORTFOLIO</Link>
          <Link href="/blog" className="hover:text-rose-400 transition-colors">BLOG</Link>
          <Link href="/contact" className="hover:text-rose-400 transition-colors">CONTACT</Link>
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-lg shadow-rose-600/30 transition-all hover:scale-105"
          >
            <span>Book a Shoot</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full text-zinc-400 hover:text-white bg-white/5 border border-white/10"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed top-20 inset-x-4 bg-zinc-950/95 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-2xl z-50 flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-zinc-300 hover:text-white py-2 border-b border-white/5"
          >
            HOME
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-zinc-300 hover:text-white py-2 border-b border-white/5"
          >
            ABOUT
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-zinc-300 hover:text-white py-2 border-b border-white/5"
          >
            PORTFOLIO
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-zinc-300 hover:text-white py-2 border-b border-white/5"
          >
            BLOG
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-zinc-300 hover:text-white py-2 border-b border-white/5"
          >
            CONTACT
          </Link>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center py-3 rounded-xl bg-rose-600 text-white text-xs font-semibold"
          >
            Book a Shoot on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
