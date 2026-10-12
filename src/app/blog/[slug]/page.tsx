import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BLOG_POSTS, BlogPost } from "@/data/blogs";
import { SITE_CONFIG } from "@/data/siteData";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Tag, ExternalLink, Lightbulb } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  BLOG_POSTS.forEach((post) => {
    params.push({ slug: post.slug });
    if (post.legacySlug) {
      params.push({ slug: post.legacySlug });
    }
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug || p.legacySlug === slug);
  if (!post) return { title: "Post Not Found | M. Haikal Arrasyid" };

  return {
    title: `${post.title} | M. Haikal Arrasyid`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug || p.legacySlug === slug);
  if (postIndex === -1) notFound();

  const post = BLOG_POSTS[postIndex];
  const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const nextPost = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#0d0d0f] text-[#ededed] font-sans antialiased selection:bg-rose-500 selection:text-white">
      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" />

      <main className="relative max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between gap-4 mb-12 sm:mb-16">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Kembali ke Blog</span>
          </Link>

          <Link
            href="/portfolio"
            className="text-xs sm:text-sm font-medium text-white/50 hover:text-white transition-colors"
          >
            Lihat Portofolio ↗
          </Link>
        </nav>

        {/* Article Header */}
        <header className="space-y-6 mb-12">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-semibold tracking-wide uppercase">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/50">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1.5 text-white/50">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            {post.title}
          </h1>

          {/* Author info */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-white/5 shrink-0">
              <Image
                src="/assets/images/AfuEIphQNXa3eShgFNrb8KwyaE.png"
                alt="M. Haikal Arrasyid"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">M. Haikal Arrasyid</p>
              <p className="text-xs text-white/50">
                Photographer &amp; Software Engineering Student at SMK Telkom Malang
              </p>
            </div>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="relative aspect-[16/10] sm:aspect-[1.5/1] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-14 bg-white/[0.02]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none space-y-10 text-white/80 text-base sm:text-lg leading-relaxed">
          {/* Lead Paragraph */}
          <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed border-l-2 border-rose-500/60 pl-6 my-8">
            {post.content.intro}
          </p>

          {/* Main Sections */}
          {post.content.sections.map((section, idx) => (
            <div key={idx} className="space-y-4 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {section.heading}
              </h2>
              <p className="text-white/80 leading-relaxed text-base sm:text-lg">
                {section.body}
              </p>

              {section.tip && (
                <div className="flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10 my-4 text-sm text-white/90">
                  <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-amber-300">Tips Lapangan: </span>
                    <span className="text-white/80">{section.tip}</span>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Pull Quote */}
          <blockquote className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-rose-500/10 via-purple-500/5 to-transparent border-l-4 border-rose-500 my-10">
            <p className="text-lg sm:text-xl italic font-serif text-white/90 m-0">
              &ldquo;{post.content.quote}&rdquo;
            </p>
            <footer className="mt-3 text-xs tracking-wider uppercase text-rose-400 font-semibold">
              — M. Haikal Arrasyid
            </footer>
          </blockquote>

          {/* Conclusion */}
          <div className="pt-4 border-t border-white/10">
            <h3 className="text-xl font-bold text-white mb-3">Catatan Akhir</h3>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-6">
            <Tag className="w-4 h-4 text-white/40 mr-1" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/60 hover:text-white transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Related Album Link (if available) */}
          {post.albumSlug && (
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-10">
              <div>
                <p className="text-xs uppercase tracking-wider text-rose-400 font-semibold mb-1">
                  Galeri Foto Terkait
                </p>
                <h4 className="text-lg font-bold text-white">
                  Jelajahi Album {post.albumTitle} di Google Photos
                </h4>
              </div>
              <a
                href={post.gphotosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-transform active:scale-95 shrink-0"
              >
                <span>Buka Google Photos</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </article>

        {/* Footer Navigation (Prev / Next) */}
        <footer className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group p-5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 transition-all flex flex-col justify-between"
            >
              <span className="text-xs text-white/40 mb-2 flex items-center gap-1.5 group-hover:text-rose-400 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" /> Artikel Sebelumnya
              </span>
              <p className="text-sm font-semibold text-white line-clamp-2">
                {prevPost.title}
              </p>
            </Link>
          ) : <div />}

          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group p-5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 transition-all flex flex-col justify-between sm:text-right"
            >
              <span className="text-xs text-white/40 mb-2 flex items-center gap-1.5 sm:justify-end group-hover:text-rose-400 transition-colors">
                Artikel Selanjutnya <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
              <p className="text-sm font-semibold text-white line-clamp-2">
                {nextPost.title}
              </p>
            </Link>
          )}
        </footer>
      </main>
    </div>
  );
}
