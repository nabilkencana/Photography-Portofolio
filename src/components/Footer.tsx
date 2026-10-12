import Link from "next/link";
import { SITE_CONFIG } from "@/data/siteData";
import { InstagramIcon, LinkedinIcon, GithubIcon } from "@/components/SocialIcons";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060608] pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Top Call to Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start justify-between pb-16 border-b border-white/10">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-rose-500">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-heading font-medium text-white leading-tight">
              Ready to capture the moments that matter most?
            </h2>
            <p className="text-sm text-zinc-400 max-w-md">
              Let’s make it happen. Hubungi saya hari ini untuk konsultasi sesi foto atau dokumentasi event.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6 lg:pl-10">
            <div>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                DIRECT CONTACT
              </p>
              <div className="space-y-3">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg font-semibold text-white hover:text-rose-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-rose-500" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-lg font-semibold text-white hover:text-rose-400 transition-colors"
                >
                  <Mail className="w-5 h-5 text-rose-500" />
                  <span>{SITE_CONFIG.email}</span>
                </a>

                <div className="flex items-center gap-3 text-xs text-zinc-400 pt-1">
                  <MapPin className="w-4 h-4 text-zinc-500" />
                  <span>Photographer ({SITE_CONFIG.school} &bull; {SITE_CONFIG.location})</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-6 text-xs font-medium text-zinc-400 pt-2 border-t border-white/5">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <Link href="/portfolio" className="hover:text-white transition-colors">PORTFOLIO</Link>
              <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
              <Link href="/blog" className="hover:text-white transition-colors">BLOG</Link>
              <Link href="/contact" className="hover:text-white transition-colors">CONTACT</Link>
            </div>
          </div>
        </div>

        {/* Giant Typography Banner */}
        <div className="text-center py-6 select-none overflow-hidden">
          <p className="text-[12vw] font-serif-heading font-black tracking-tighter uppercase text-white/5 leading-none hover:text-white/10 transition-colors duration-500">
            M. HAIKAL ARRASYID.
          </p>
        </div>

        {/* Bottom Bar & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-rose-400 transition-colors flex items-center gap-1.5"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram</span>
            </a>

            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-rose-400 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-rose-400 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
