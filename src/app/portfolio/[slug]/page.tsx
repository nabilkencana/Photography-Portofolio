import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ALBUMS } from "@/data/albums";

const SLUG_ALIASES: Record<string, string> = {
  "field-trip": "delvisa",
  "posing-on-a-chair": "moklet-serve-man-2",
  "annie-and-her-dog": "dempo-fair-47",
  "bride-and-groom": "google-devfest-2025",
};

export function generateStaticParams() {
  const staticSlugs = new Set([
    "delvisa",
    "moklet-serve-man-2",
    "dempo-fair-47",
    "google-devfest-2025",
    "field-trip",
    "posing-on-a-chair",
    "annie-and-her-dog",
    "bride-and-groom"
  ]);
  return ALBUMS.filter((alb) => !staticSlugs.has(alb.slug)).map((alb) => ({
    slug: alb.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = SLUG_ALIASES[slug] || slug;
  const album = ALBUMS.find((a) => a.slug === canonicalSlug);
  if (!album) return { title: "Portfolio Not Found" };
  return {
    title: `${album.title} - Portofolio Dokumentasi | M. Haikal Arrasyid`,
    description: album.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const canonicalSlug = SLUG_ALIASES[slug] || slug;

  const albumIndex = ALBUMS.findIndex((a) => a.slug === canonicalSlug);
  if (albumIndex === -1) {
    notFound();
  }

  const album = ALBUMS[albumIndex];
  const nextAlbum = albumIndex < ALBUMS.length - 1 ? ALBUMS[albumIndex + 1] : ALBUMS[0];

  // Distribute 10 photos into 2 columns for Framer's masonry grid
  const col1 = album.photos.filter((_, i) => i % 2 === 0);
  const col2 = album.photos.filter((_, i) => i % 2 !== 0);

  const detailHTML = `
    <div id="main" class="framer-oja7hh" style="min-height:100vh;width:auto">
      <div class="framer-8yif2 framer-UjpSs" style="min-height:100vh;width:auto;display:contents">
        <main class="framer-13y3srp" data-framer-name="Main">

          {/* 1. HERO SECTION */}
          <section class="framer-e9nu5a" data-framer-name="Hero" style="will-change:transform;opacity:1;transform:none">
            <div class="framer-1t8bts" data-framer-name="Container">
              <div class="framer-1i83sc1" data-framer-name="Info">
                <div class="framer-1ryk7gm" data-framer-name="Heading">
                  <div class="framer-12uecny" data-framer-name="Info">
                    <div class="framer-1y8s8ph" data-border="true" data-framer-name="Date">
                      <div class="framer-1fa2zt2" data-framer-component-type="RichTextContainer">
                        <p class="framer-text framer-styles-preset-17etv0n" data-styles-preset="DXm77IWSL" style="--framer-text-color:rgba(255, 255, 255, 0.8)">
                          <time>${album.year || "2026"}</time>
                        </p>
                      </div>
                    </div>
                    <div class="framer-1910v1h" data-border="true" data-framer-name="Location">
                      <div class="framer-5g9jtx" data-framer-component-type="RichTextContainer">
                        <p class="framer-text framer-styles-preset-17etv0n" data-styles-preset="DXm77IWSL" style="--framer-text-color:rgba(255, 255, 255, 0.8)">
                          ${album.category}
                        </p>
                      </div>
                    </div>
                    <div class="framer-1910v1h" data-border="true" data-framer-name="Number">
                      <div class="framer-5g9jtx" data-framer-component-type="RichTextContainer">
                        <p class="framer-text framer-styles-preset-17etv0n" data-styles-preset="DXm77IWSL" style="--framer-text-color:rgba(255, 255, 255, 0.8)">
                          #${String(album.id).padStart(2, "0")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="framer-v869p" data-framer-name="Title" data-framer-component-type="RichTextContainer">
                    <h1 class="framer-text framer-styles-preset-z1jo4x" data-styles-preset="LJY2lX8Bc" style="--framer-text-color:rgb(255, 255, 255)">
                      ${album.title}
                    </h1>
                  </div>
                </div>
                <div class="framer-1s9c0a6" data-framer-name="Description" data-framer-component-type="RichTextContainer">
                  <p class="framer-text framer-styles-preset-8nqfsa" data-styles-preset="rP_ujUt1v" style="--framer-text-color:rgba(255, 255, 255, 0.7)">
                    ${album.description}
                  </p>
                </div>

                {/* Google Photos CTA Pill Button */}
                <div style="margin-top: 16px;">
                  <a href="${album.gphotosUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:8px; padding:10px 22px; border-radius:999px; background:#e11d48; color:#fff; text-decoration:none; font-family:'Inter',sans-serif; font-size:12px; font-weight:600; box-shadow:0 4px 16px rgba(225,29,72,0.4); transition:transform 0.2s;">
                    <span>Buka Seluruh ${album.photoCount}+ Foto di Google Photos</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              {/* Cover Image with 20px rounded corners and Framer corners */}
              <div class="framer-h9v6q1" data-framer-name="Image">
                <div class="framer-1a6132" style="border-radius:20px; overflow:hidden; position:relative; aspect-ratio:1.5;">
                  <div data-framer-background-image-wrapper="true" style="position:absolute; inset:0; border-radius:inherit;">
                    <img src="${album.cover}" style="display:block; width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="${album.title} Cover">
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. GALLERY SECTION (Framer 2-Column Grid with all 10 Photos) */}
          <section class="framer-1epic4n" data-framer-name="Gallery" style="padding-top:40px;">
            <div class="framer-18sm12y" data-framer-name="Container" style="will-change:transform; opacity:1; transform:none; display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:32px; width:100%; max-width:1400px; margin:0 auto; padding:0 24px;">
              
              {/* Column 1 */}
              <div style="display:flex; flex-direction:column; gap:32px;">
                ${col1.map((p, idx) => `
                  <div class="framer-y08lyk" data-framer-name="Image" style="height:auto; aspect-ratio:1.5; border-radius:20px; overflow:hidden; position:relative; background:#141416; border:1px solid rgba(255,255,255,0.08); transition:transform 0.4s ease;">
                    <div data-framer-background-image-wrapper="true" style="position:absolute; inset:0; border-radius:inherit;">
                      <img src="${p}" style="display:block; width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="${album.title} Foto #${idx * 2 + 1}" loading="lazy">
                    </div>
                  </div>
                `).join("")}
              </div>

              {/* Column 2 */}
              <div style="display:flex; flex-direction:column; gap:32px;">
                ${col2.map((p, idx) => `
                  <div class="framer-y08lyk" data-framer-name="Image" style="height:auto; aspect-ratio:1.5; border-radius:20px; overflow:hidden; position:relative; background:#141416; border:1px solid rgba(255,255,255,0.08); transition:transform 0.4s ease;">
                    <div data-framer-background-image-wrapper="true" style="position:absolute; inset:0; border-radius:inherit;">
                      <img src="${p}" style="display:block; width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="${album.title} Foto #${idx * 2 + 2}" loading="lazy">
                    </div>
                  </div>
                `).join("")}
              </div>

            </div>
          </section>

          {/* 3. MORE PROJECTS SECTION */}
          <section class="framer-l77obk" data-framer-name="More" style="padding: 80px 24px;">
            <div style="max-width:1400px; margin:0 auto; display:flex; flex-direction:column; gap:32px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-end; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:16px;">
                <div>
                  <span style="font-size:11px; font-family:monospace; text-transform:uppercase; letter-spacing:0.1em; color:#e11d48; font-weight:600;">PORTFOLIO</span>
                  <h2 style="font-size:32px; font-family:'Playfair Display',serif; color:#fff; margin:4px 0 0 0;">Proyek Lainnya</h2>
                </div>
                <a href="/portfolio" style="color:rgba(255,255,255,0.6); font-size:13px; text-decoration:none; font-weight:500;">
                  Lihat Semua 14 Album ↗
                </a>
              </div>

              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:32px;">
                <a href="/portfolio/${nextAlbum.slug}" style="text-decoration:none; color:inherit; display:flex; flex-direction:column; gap:16px;">
                  <div style="aspect-ratio:16/10; border-radius:20px; overflow:hidden; position:relative; background:#141416; border:1px solid rgba(255,255,255,0.08);">
                    <img src="${nextAlbum.cover}" style="width:100%; height:100%; object-fit:cover;" alt="${nextAlbum.title}">
                    <span style="position:absolute; top:14px; left:14px; background:rgba(0,0,0,0.7); backdrop-filter:blur(10px); color:#fff; font-family:monospace; font-size:11px; padding:4px 10px; border-radius:8px;">#${String(nextAlbum.id).padStart(2, "0")}</span>
                    <span style="position:absolute; top:14px; right:14px; background:rgba(225,29,72,0.9); backdrop-filter:blur(10px); color:#fff; font-size:11px; font-weight:600; padding:4px 10px; border-radius:8px;">${nextAlbum.photoCount}+ Foto</span>
                  </div>
                  <div>
                    <span style="font-size:12px; color:rgba(255,255,255,0.5);">${nextAlbum.category}</span>
                    <h3 style="font-size:20px; color:#fff; margin:4px 0;">${nextAlbum.title}</h3>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* 4. FOOTER */}
          <footer class="framer-XEmFG framer-8xnvd framer-7ago8" style="background-color:rgb(17, 17, 18); width:100%;">
            <div class="framer-18p7eru" data-framer-name="Container" style="opacity:1;">
              <div class="framer-gm870p" data-framer-name="Top" style="opacity:1;">
                <div class="framer-1i10x6e" data-framer-name="Text" style="will-change:transform; opacity:1; transform:none;">
                  <div class="framer-1wbm2x" data-framer-name="1" style="opacity:1;">
                    <div class="framer-19x942o" data-framer-component-type="RichTextContainer">
                      <p class="framer-text framer-styles-preset-1p7qn33" data-styles-preset="nBdQAQMSA" style="--framer-text-color:rgba(255, 255, 255, 0.6)">
                        Ready to capture the moments that matter most?
                      </p>
                    </div>
                  </div>
                  <div class="framer-r6wme2" data-framer-name="2" style="opacity:1;">
                    <div class="framer-161dm2a" data-framer-component-type="RichTextContainer">
                      <p class="framer-text framer-styles-preset-8nqfsa" data-styles-preset="rP_ujUt1v" style="--framer-text-color:rgb(255, 255, 255)">
                        Let’s make it happen. Contact me today!
                      </p>
                    </div>
                  </div>
                </div>

                <div class="framer-70984u" data-framer-name="Contact">
                  <div class="framer-atbblz" data-framer-name="Lets talk">
                    <p class="framer-text framer-styles-preset-1xs0hlt" data-styles-preset="Y4eex_aGW" style="--framer-text-color:rgba(255, 255, 255, 0.5)">
                      LETS TALK
                    </p>
                  </div>
                  <div class="framer-vyjsag" data-framer-name="Phone">
                    <p class="framer-text framer-styles-preset-8vgk3u" data-styles-preset="jsPFAj3P2">
                      <a class="framer-text framer-styles-preset-1jim1cm" data-styles-preset="OQFUDQG12" href="https://wa.me/6289528425748" target="_blank" style="color:#fff;">+62 895-2842-5748</a>
                    </p>
                  </div>
                  <div class="framer-11n8ekj" data-border="true" data-framer-name="Email" style="--border-bottom-width:2px; --border-color:rgb(255, 255, 255); opacity:1;">
                    <div class="framer-lxrrq1" data-framer-component-type="RichTextContainer">
                      <p class="framer-text" style="font-size:24px; font-weight:500; letter-spacing:-0.05em; color:#fff;">
                        <a href="mailto:arasyidhaikal00@gmail.com" style="color:#fff; text-decoration:none;">arasyidhaikal00@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  <div class="framer-190458v" data-framer-name="Info">
                    <p class="framer-text" style="color:rgba(255,255,255,0.6); font-size:12px;">
                      Photographer (SMK Telkom Malang • Malang, ID)
                    </p>
                  </div>
                </div>
              </div>

              <div class="framer-1qd20gd" data-framer-name="Bottom" style="opacity:1; padding-top:40px; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:flex-end;">
                <div class="framer-dlcxp1" data-framer-name="Name" style="opacity:1; overflow:visible;">
                  <h2 style="font-size:clamp(40px, 8vw, 100px); font-family:'Inter',sans-serif; font-weight:600; letter-spacing:-0.05em; line-height:85%; color:#fff; text-transform:uppercase; margin:0;">
                    M. HAIKAL<br/>ARRASYID.
                  </h2>
                </div>

                <div class="framer-1qof3tk" data-framer-name="Container" style="display:flex; flex-direction:column; gap:16px; align-items:flex-end;">
                  <div class="framer-x8ngp8" data-framer-name="Links" style="display:flex; gap:20px;">
                    <a href="https://www.instagram.com/namakuhaikall/" target="_blank" style="color:#fff; text-decoration:none; font-size:13px; font-weight:500;">Instagram ↗</a>
                    <a href="https://www.linkedin.com/in/haikal-arrasyid" target="_blank" style="color:#fff; text-decoration:none; font-size:13px; font-weight:500;">LinkedIn ↗</a>
                  </div>
                  <p style="color:rgba(255,255,255,0.5); font-size:12px; margin:0;">
                    &copy; 2026 M. Haikal Arrasyid. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>

        </main>
      </div>
    </div>
  `;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: detailHTML }}
      suppressHydrationWarning
    />
  );
}
