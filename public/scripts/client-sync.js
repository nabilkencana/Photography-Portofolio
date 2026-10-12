(() => {
  function syncDOM() {
    // Title
    if (!document.title.includes('M. Haikal Arrasyid')) {
      document.title = 'M. Haikal Arrasyid | Professional Photography Portfolio';
    }

    // 1. Hero Testimonial (Nabil Kencana)
    document.querySelectorAll('.framer-tudupo p').forEach(el => {
      if (el.textContent.includes('Samuel') || !el.textContent.includes('Haikal')) {
        el.textContent = 'Working with Haikal was seamless. He turned our project into a gallery of memories that we will cherish forever.';
      }
    });
    document.querySelectorAll('.framer-1vldpsq p').forEach(el => {
      if (el.textContent.includes('Sarah') || el.textContent.includes('Newlyweds') || !el.textContent.includes('Nabil')) {
        el.textContent = 'Nabil Kencana, Client';
      }
    });

    // 2. Service card: Wedding
    document.querySelectorAll('.framer-1qk8fs3 h3').forEach(h3 => {
      if (h3.textContent === 'SpectaShow' || h3.textContent === 'Weddings') {
        h3.textContent = 'Wedding';
      }
    });

    // 3. Stats data
    document.querySelectorAll('.framer-1na6kyo p, .framer-f203d3 p').forEach(p => {
      if (p.textContent.trim() === '9 659') {
        p.textContent = '2 400';
      }
    });
    document.querySelectorAll('.framer-1od0s82 p').forEach(p => {
      if (p.textContent.trim() === '30') {
        p.textContent = '85';
      }
    });
    document.querySelectorAll('.framer-twpkku p').forEach(p => {
      if (p.textContent.includes('Clients book another session')) {
        p.textContent = 'Repeat collaboration rate across events';
      }
    });
    document.querySelectorAll('.framer-f203d3 p').forEach(p => {
      if (p.textContent.trim() === '100') {
        p.textContent = '25';
      }
    });
    document.querySelectorAll('.framer-9wslzt p').forEach(p => {
      if (p.textContent.includes('Satisfied clients')) {
        p.textContent = 'Events & satisfied clients';
      }
    });

    // 4. Testimonials: All 3 Real Clients
    document.querySelectorAll('.framer-1wjt3kn p').forEach(p => {
      if (p.textContent.includes('Boris Johnson')) {
        p.textContent = 'Rizky Pratama';
      } else if (p.textContent.includes('Sarah Thompson')) {
        p.textContent = 'Fajar Ramadhan';
      } else if (p.textContent.includes('Jessica Davis')) {
        p.textContent = 'Aditya Nugroho';
      }
    });

    // Replace any leftover framerusercontent avatar URLs in testimonials
    document.querySelectorAll('.framer-12mm84d img').forEach(img => {
      if (img.src.includes('hwBB5Kf5G94R8AhAfU0fWMltFWc')) {
        img.src = '/assets/images/hwBB5Kf5G94R8AhAfU0fWMltFWc.jpg';
      } else if (img.src.includes('9qDsq0DztVzjhOGj5ER4Mpoku98')) {
        img.src = '/assets/images/9qDsq0DztVzjhOGj5ER4Mpoku98.jpg';
      }
    });

    // 5. English Headings & Philosophy
    document.querySelectorAll('.framer-neft5j p').forEach(p => {
      if (p.textContent.includes('Jelajahi dokumentasi') || p.textContent.includes('Browse a curated')) {
        p.textContent = 'Explore the official visual documentation by M. Haikal Arrasyid. Click each project card to explore full gallery highlights.';
      }
    });
    document.querySelectorAll('.framer-s9zitx p').forEach(p => {
      if (p.textContent.includes('Filosofi Visual') || p.textContent.includes('What’s my style')) {
        p.innerHTML = '<span class="framer-text" style="--framer-text-color: var(--token-f8c6fc17-6126-48ad-8306-922d51919d56, rgb(17, 17, 18));">Visual Philosophy</span><br class="framer-text"><span class="framer-text" style="--framer-text-color: rgba(17, 17, 18, 0.6);">Precision composition, dramatic lighting, and emotional storytelling capturing every meaningful moment.</span>';
      }
    });

    // 6. Portfolio Cards
    document.querySelectorAll('.framer-wxflqz a').forEach(a => {
      const h3 = a.querySelector('h3');
      const catP = a.querySelector('[data-framer-name="Category"] p');
      if (!h3) return;
      const t = h3.innerText.trim();

      if (t.includes('Delvisa') || t.includes('Morning') || a.href.includes('field-trip')) {
        h3.innerText = 'Delvisa';
        if (catP) catP.innerText = 'Event & Performance';
        a.href = '/portfolio/delvisa';
        a.removeAttribute('target');
        a.removeAttribute('rel');
      } else if (t.includes('Moklet Serve') || t.includes('Posing') || a.href.includes('posing-on-a-chair')) {
        h3.innerText = 'Moklet Serve - MAN 2';
        if (catP) catP.innerText = 'Community & School';
        a.href = '/portfolio/moklet-serve-man-2';
        a.removeAttribute('target');
        a.removeAttribute('rel');
      } else if (t.includes('Dempo Fair') || t.includes('Annie') || a.href.includes('annie-and-her-dog')) {
        h3.innerText = 'Dempo Fair - 47';
        if (catP) catP.innerText = 'Festival & Concert';
        a.href = '/portfolio/dempo-fair-47';
        a.removeAttribute('target');
        a.removeAttribute('rel');
      } else if (t.includes('DevFest') || t.includes('Google') || t.includes('Bride') || a.href.includes('bride-and-groom')) {
        h3.innerText = 'Google DevFest 2025';
        if (catP) catP.innerText = 'Tech & Conference';
        a.href = '/portfolio/google-devfest-2025';
        a.removeAttribute('target');
        a.removeAttribute('rel');
      }
    });

    // 7. Remove Delete me! / Purchase badge
    
    // Precision Alignment for Face Focus SVG Reticle
    document.querySelectorAll('.framer-1vqcjg9').forEach(vqc => {
      vqc.style.setProperty('top', '48.5%', 'important');
      vqc.style.setProperty('left', '50%', 'important');
      vqc.style.setProperty('transform', 'translate(-50%, -50%)', 'important');
    });

    document.querySelectorAll('.framer-bv12sz-container, [name="Delete me!"], .framer-OROxS').forEach(el => el.remove());


    // 7. Blog / Highlights Cards Sync (Haikal Event Stories)
    document.querySelectorAll('.framer-1bfrlou a, [data-framer-name="Highlights"] a').forEach(a => {
      const h3 = a.querySelector('h3');
      const dateP = a.querySelector('[data-framer-name="Date"] p');
      const img = a.querySelector('img');
      if (!h3) return;
      const t = h3.innerText.trim();

      if (t.includes('business') || t.includes('Specta') || a.href.includes('why-every-business') || a.href.includes('specta-show')) {
        h3.innerText = 'Specta Show 2026 - Panggung Visual & Musik';
        if (dateP) dateP.innerText = 'Feb 20, 2026';
        a.href = '/portfolio/specta-show-2026';
        if (img) {
          img.removeAttribute('srcset');
          img.src = '/assets/images/jCsmDoPWn3Ss24hjhFLiKlu0eAM.jpg';
          img.alt = 'Specta Show 2026 - Panggung Visual & Musik';
        }
      } else if (t.includes('awkward') || t.includes('Fun Run') || a.href.includes('feeling-awkward') || a.href.includes('fun-run')) {
        h3.innerText = 'Fun Run 2026 - Euforia Ribuan Pelari';
        if (dateP) dateP.innerText = 'Feb 25, 2026';
        a.href = '/portfolio/fun-run-2026';
        if (img) {
          img.removeAttribute('srcset');
          img.src = '/assets/images/lNVL8XFXbIh6xY1q0aD0CLkNqY.jpg';
          img.alt = 'Fun Run 2026 - Euforia Ribuan Pelari';
        }
      }
    });

    // Section heading for Highlights
    document.querySelectorAll('section.framer-e3vh2o h2').forEach(h2 => {
      if (h2.textContent.includes('My blog') || h2.textContent.includes('blog')) {
        h2.textContent = 'Highlights & Event Stories';
      }
    });
    document.querySelectorAll('section.framer-e3vh2o p').forEach(p => {
      if (p.textContent.includes('Curious about what goes into a perfect photoshoot')) {
        p.textContent = 'Sorotan dokumentasi visual dan cerita panggung festival musik serta marathon akbar oleh M. Haikal Arrasyid.';
      }
    });
    document.querySelectorAll('section.framer-e3vh2o a').forEach(a => {
      if (a.textContent.includes('View all')) {
        a.href = '/portfolio';
      }
    });


    // Tidy up footer giant name opacity and viewBox
    document.querySelectorAll('.framer-dlcxp1').forEach(el => {
      el.style.setProperty('opacity', '1', 'important');
      el.style.setProperty('overflow', 'visible', 'important');
      const svg = el.querySelector('svg');
      if (svg) {
        svg.setAttribute('viewBox', '0 0 940 270');
        svg.style.setProperty('width', '100%', 'important');
        svg.style.setProperty('height', 'auto', 'important');
        svg.style.setProperty('overflow', 'visible', 'important');
      }
      el.querySelectorAll('p').forEach(p => {
        p.style.setProperty('font-size', '135px', 'important');
        p.style.setProperty('line-height', '85%', 'important');
        p.style.setProperty('letter-spacing', '-0.05em', 'important');
      });
    });

    
    // Update ALL Instagram links to Haikal's Instagram
    document.querySelectorAll('a').forEach(a => {
      const text = (a.textContent || '').trim();
      const href = a.getAttribute('href') || '';
      if (
        text.toLowerCase().includes('instagram') ||
        href.includes('bynneh') ||
        href.includes('x.com') ||
        (href.includes('instagram.com') && !href.includes('namakuhaikall'))
      ) {
        a.href = 'https://www.instagram.com/namakuhaikall/';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
    });

    // Update social links: Link 1 = Instagram, Link 2 = LinkedIn
    const socialLinks = Array.from(document.querySelectorAll('.framer-x8ngp8 a'));
    if (socialLinks.length >= 1) {
      const p1 = socialLinks[0].querySelector('p');
      if (p1) p1.textContent = 'Instagram';
      socialLinks[0].href = 'https://www.instagram.com/namakuhaikall/';
      socialLinks[0].target = '_blank';
    }
    if (socialLinks.length >= 2) {
      const p2 = socialLinks[1].querySelector('p');
      if (p2) p2.textContent = 'LinkedIn';
      socialLinks[1].href = 'https://www.linkedin.com/in/haikal-arrasyid';
      socialLinks[1].target = '_blank';
    }


    // More projects card sync
    document.querySelectorAll('[data-framer-name="More"] a').forEach(a => {
      const h3 = a.querySelector('h3');
      const catP = a.querySelector('[data-framer-name="Category"] p');
      if (!h3) return;
      const t = h3.innerText.trim();
      if (t.includes('Posing') || t.includes('Moklet')) {
        h3.innerText = 'Moklet Serve - MAN 2';
        if (catP) catP.innerText = 'Community & School';
        a.href = '/portfolio/moklet-serve-man-2';
      } else if (t.includes('Annie') || t.includes('Dempo')) {
        h3.innerText = 'Dempo Fair - 47';
        if (catP) catP.innerText = 'Festival & Concert';
        a.href = '/portfolio/dempo-fair-47';
      } else if (t.includes('Bride') || t.includes('Google') || t.includes('DevFest')) {
        h3.innerText = 'Google DevFest 2025';
        if (catP) catP.innerText = 'Tech & Conference';
        a.href = '/portfolio/google-devfest-2025';
      } else if (t.includes('Morning') || t.includes('Delvisa')) {
        h3.innerText = 'Delvisa';
        if (catP) catP.innerText = 'Event & Performance';
        a.href = '/portfolio/delvisa';
      }
    });


    // Ensure detail page sections visibility
    document.querySelectorAll('.framer-e9nu5a, .framer-1epic4n, .framer-18sm12y, .framer-l77obk').forEach(el => {
      el.style.setProperty('opacity', '1', 'important');
      el.style.setProperty('transform', 'none', 'important');
      el.style.setProperty('visibility', 'visible', 'important');
    });


    // 9. Sync Detail Pages (Delvisa, Moklet Serve, Dempo Fair, Google DevFest)
    const pathname = window.location.pathname;
    const h1 = document.querySelector('h1');
    const heroInfo = document.querySelector('[data-framer-name="Hero"] [data-framer-name="Info"]');
    const catEl = document.querySelector('[data-framer-name="Hero"] [data-framer-name="Location"] p, [data-framer-name="Hero"] [data-framer-name="Category"] p');
    const dateEl = document.querySelector('[data-framer-name="Hero"] [data-framer-name="Date"] time');

    const ALBUM_MAP = {
      'delvisa': {
        title: 'Delvisa',
        category: 'Event & Performance',
        date: 'Jan 10, 2026',
        url: 'https://photos.app.goo.gl/gDqdTfczTicagCDX7',
        count: '35+'
      },
      'field-trip': {
        title: 'Delvisa',
        category: 'Event & Performance',
        date: 'Jan 10, 2026',
        url: 'https://photos.app.goo.gl/gDqdTfczTicagCDX7',
        count: '35+'
      },
      'moklet-serve-man-2': {
        title: 'Moklet Serve - MAN 2',
        category: 'Community & School',
        date: 'Jan 9, 2026',
        url: 'https://photos.app.goo.gl/2sn1YbiT2PuUrJ13A',
        count: '159+'
      },
      'posing-on-a-chair': {
        title: 'Moklet Serve - MAN 2',
        category: 'Community & School',
        date: 'Jan 9, 2026',
        url: 'https://photos.app.goo.gl/2sn1YbiT2PuUrJ13A',
        count: '159+'
      },
      'dempo-fair-47': {
        title: 'Dempo Fair - 47',
        category: 'Festival & Concert',
        date: 'Jan 7, 2026',
        url: 'https://photos.app.goo.gl/RWiYbsSnmUJDqJ2c6',
        count: '132+'
      },
      'annie-and-her-dog': {
        title: 'Dempo Fair - 47',
        category: 'Festival & Concert',
        date: 'Jan 7, 2026',
        url: 'https://photos.app.goo.gl/RWiYbsSnmUJDqJ2c6',
        count: '132+'
      },
      'google-devfest-2025': {
        title: 'Google DevFest 2025',
        category: 'Tech & Conference',
        date: 'Dec 20, 2025',
        url: 'https://photos.app.goo.gl/BBXoMtVCQBdaKA6LA',
        count: '70+'
      },
      'bride-and-groom': {
        title: 'Google DevFest 2025',
        category: 'Tech & Conference',
        date: 'Dec 20, 2025',
        url: 'https://photos.app.goo.gl/BBXoMtVCQBdaKA6LA',
        count: '70+'
      }
    };

    for (const [slugKey, meta] of Object.entries(ALBUM_MAP)) {
      if (pathname.includes('/' + slugKey)) {
        if (h1 && h1.textContent !== meta.title) h1.textContent = meta.title;
        if (catEl && catEl.textContent !== meta.category) catEl.textContent = meta.category;
        if (dateEl && dateEl.textContent !== meta.date) dateEl.textContent = meta.date;
        if (!document.title.includes(meta.title)) {
          document.title = meta.title + ' - Portofolio Dokumentasi | M. Haikal Arrasyid';
        }

        // No extra buttons added
        break;
      }
    }




    
    
    // 10. Synchronize Blog Index Page Cards with Haikal's Authentic Articles from Albums 5-14
    const BLOG_METAS = [
      {
        legacy: 'why-every-business-needs-professional-photography',
        slug: 'specta-show-2026-live-stage-rhythm-of-lights',
        title: 'The Rhythm of Lights: Photographing Live Stage Performances at Specta Show 2026',
        date: 'Jan 8, 2026',
        isoDate: '2026-01-08T00:00:00.000Z'
      },
      {
        legacy: 'feeling-awkward-or-nervous-during-a-photoshoot-you-re-not-alone',
        slug: 'awarding-meo-2026-moments-of-excellence',
        title: 'Moments of Excellence: Documenting Achievements at Awarding MEO 2026',
        date: 'Jan 6, 2026',
        isoDate: '2026-01-06T00:00:00.000Z'
      },
      {
        legacy: 'starting-a-career-in-web-design',
        slug: 'fun-run-2026-morning-golden-hour-movement',
        title: 'Morning Golden Hour: Dynamic Movement & Energy at Fun Run 2026',
        date: 'Jan 5, 2026',
        isoDate: '2026-01-05T00:00:00.000Z'
      },
      {
        legacy: 'how-to-look-natural-in-photos-even-if-you-feel-nervous',
        slug: 'kickoff-mic-2026-igniting-tech-innovation',
        title: 'Igniting Innovation: Capturing Keynotes & Energy at Kickoff MIC 2026',
        date: 'Jan 4, 2026',
        isoDate: '2026-01-04T00:00:00.000Z'
      },
      {
        legacy: 'why-professional-photography-is-key-to-telling-your-story',
        slug: 'photoshoot-dc-specta-creative-studio-vision',
        title: 'Creative Studio Vision: Directing and Framing the DC Specta Photoshoot',
        date: 'Nov 28, 2025',
        isoDate: '2025-11-28T00:00:00.000Z'
      },
      {
        legacy: '5-tips-to-feel-comfortable-during-your-photoshoot',
        slug: 'diesnat-2025-smk-telkom-malang-visual-chronicle',
        title: 'Celebrating Moklet Pride: The Visual Chronicle of DiesNat 2025',
        date: 'Nov 15, 2025',
        isoDate: '2025-11-15T00:00:00.000Z'
      }
    ];

    BLOG_METAS.forEach(item => {
      // Find cards matching either legacy or new slug
      const cards = Array.from(document.querySelectorAll(`a[href*="${item.legacy}"], a[href*="${item.slug}"]`));
      cards.forEach(card => {
        card.href = `/blog/${item.slug}`;
        const h3 = card.querySelector('h3');
        if (h3 && h3.textContent !== item.title) {
          h3.textContent = item.title;
        }
        const timeEl = card.querySelector('time, [data-framer-name="Date"] p, p.framer-styles-preset-1xs0hlt');
        if (timeEl && timeEl.textContent !== item.date) {
          timeEl.textContent = item.date;
        }
      });

      // Also sync blog detail page if currently viewed
      const pathname = window.location.pathname;
      if (pathname.includes('/' + item.legacy) || pathname.includes('/' + item.slug)) {
        document.querySelectorAll('time').forEach(t => {
          t.textContent = item.date;
          t.setAttribute('datetime', item.isoDate);
        });
        const detailH1 = document.querySelector('h1');
        if (detailH1 && detailH1.textContent !== item.title) {
          detailH1.textContent = item.title;
        }
      }
    });

    // Replace any remaining 2024 dates on the page with 2026
    document.querySelectorAll('time').forEach(t => {
      if (t.textContent && t.textContent.includes('2024')) {
        t.textContent = t.textContent.replace(/2024/g, '2026');
      }
      const dt = t.getAttribute('datetime');
      if (dt && dt.includes('2024')) {
        t.setAttribute('datetime', dt.replace(/2024/g, '2026'));
      }
    });

    
    // 11. In-Article Image Switcher for Blog Detail Pages (Unique photo per article)
    const IN_ARTICLE_MAP = {
      'specta-show-2026': '/assets/pool/album_13_p2.jpg',
      'why-every-business': '/assets/pool/album_13_p2.jpg',
      'awarding-meo-2026': '/assets/pool/album_8_p2.jpg',
      'feeling-awkward': '/assets/pool/album_8_p2.jpg',
      'fun-run-2026': '/assets/pool/album_14_p2.jpg',
      'starting-a-career': '/assets/pool/album_14_p2.jpg',
      'kickoff-mic-2026': '/assets/pool/album_7_p2.jpg',
      'how-to-look-natural': '/assets/pool/album_7_p2.jpg',
      'photoshoot-dc-specta': '/assets/pool/album_6_p2.jpg',
      'why-professional-photography': '/assets/pool/album_6_p2.jpg',
      'diesnat-2025': '/assets/pool/album_5_p3.jpg',
      '5-tips-to-feel': '/assets/pool/album_5_p3.jpg'
    };

    const currentPath = window.location.pathname;
    for (const [key, imgSrc] of Object.entries(IN_ARTICLE_MAP)) {
      if (currentPath.includes(key)) {
        document.querySelectorAll('div.framer-1bc0y8h img, article.framer-jdj3sw div.framer-1nfv5en img').forEach(img => {
          img.removeAttribute('srcset');
          img.src = imgSrc;
          img.alt = 'M. Haikal Arrasyid event documentation photo';
          img.style.objectFit = 'cover';
        });
        break;
      }
    }

    
    // 12. Synchronize Portfolio Category Select Dropdown with Haikal's Portfolio Categories
    document.querySelectorAll('select.framer-form-input, select[name*="QTanya6mv"]').forEach(sel => {
      // Check if options already include Haikal categories
      const currentOpts = Array.from(sel.options).map(o => o.text);
      if (!currentOpts.some(t => t.includes('Festivals') || t.includes('Moklet'))) {
        sel.innerHTML = `
          <option value="__all__">All categories (14 Albums)</option>
          <hr>
          <option value="festivals">Festivals & Stage (Delvisa, Dempo Fair, Specta Show)</option>
          <option value="moklet">Moklet & School (Moklet Serve, DiesNat, MIC)</option>
          <option value="tech">Tech & Conferences (Google DevFest, MEO)</option>
          <option value="grad">Graduation & Ceremonies (Wisuda Permata Bunda, RUTABA)</option>
          <option value="sports">Sports & Competitions (Olimawisa Day 1 & 2, Fun Run)</option>
          <option value="studio">Studio & Editorial (DC Specta Photoshoot)</option>
        `;
        
        sel.addEventListener('change', (e) => {
          const val = e.target.value;
          const cards = document.querySelectorAll('.framer-1k89e8c a, [data-framer-name*="Portfolios"] a, a[href*="portfolio/"]');
          cards.forEach(card => {
            const txt = (card.innerText || '').toLowerCase();
            let visible = true;
            if (val === 'festivals') {
              visible = txt.includes('delvisa') || txt.includes('dempo') || txt.includes('specta show');
            } else if (val === 'moklet') {
              visible = txt.includes('moklet') || txt.includes('diesnat') || txt.includes('mic');
            } else if (val === 'tech') {
              visible = txt.includes('devfest') || txt.includes('meo');
            } else if (val === 'grad') {
              visible = txt.includes('wisuda');
            } else if (val === 'sports') {
              visible = txt.includes('olima') || txt.includes('fun run');
            } else if (val === 'studio') {
              visible = txt.includes('dc specta');
            }
            card.style.display = visible ? '' : 'none';
          });
        });
      }
    });

    
    // 13. Synchronize Portfolio Page Card H3 Titles & Categories in .framer-1k89e8c
    const PORTFOLIO_CARD_MAP = {
      'field-trip': { title: 'Delvisa', category: 'Event & Performance' },
      'delvisa': { title: 'Delvisa', category: 'Event & Performance' },
      'posing-on-a-chair': { title: 'Moklet Serve - MAN 2', category: 'Community & School' },
      'moklet-serve-man-2': { title: 'Moklet Serve - MAN 2', category: 'Community & School' },
      'annie-and-her-dog': { title: 'Dempo Fair - 47', category: 'Festival & Concert' },
      'dempo-fair-47': { title: 'Dempo Fair - 47', category: 'Festival & Concert' },
      'bride-and-groom': { title: 'Google DevFest 2025', category: 'Tech & Conference' },
      'google-devfest-2025': { title: 'Google DevFest 2025', category: 'Tech & Conference' }
    };

    document.querySelectorAll('.framer-1k89e8c a, [data-framer-name="Portfolios"] a').forEach(card => {
      const href = card.getAttribute('href') || '';
      for (const [slug, data] of Object.entries(PORTFOLIO_CARD_MAP)) {
        if (href.includes(slug)) {
          const h3 = card.querySelector('h3');
          if (h3 && h3.textContent !== data.title) {
            h3.textContent = data.title;
          }
          const cat = card.querySelector('[data-framer-name="Category"] p, p.framer-styles-preset-1p7qn33');
          if (cat && cat.textContent !== data.category) {
            cat.textContent = data.category;
          }
          break;
        }
      }
    });

    // 14. Update Portfolio Category Select Dropdown (if has 4 or fewer options)
    document.querySelectorAll('select.framer-form-input, select[name*="QTanya6mv"]').forEach(sel => {
      if (sel.options.length <= 4) {
        sel.innerHTML = `
          <option value="__all__">All categories (14 Albums)</option>
          <hr>
          <option value="festivals">Festivals & Stage (Delvisa, Dempo Fair, Specta Show)</option>
          <option value="moklet">Moklet & School (Moklet Serve, DiesNat, MIC)</option>
          <option value="tech">Tech & Conferences (Google DevFest, MEO)</option>
          <option value="grad">Graduation & Ceremonies (Wisuda Permata Bunda, RUTABA)</option>
          <option value="sports">Sports & Competitions (Olimawisa Day 1 & 2, Fun Run)</option>
          <option value="studio">Studio & Editorial (DC Specta Photoshoot)</option>
        `;
        
        sel.addEventListener('change', (e) => {
          const val = e.target.value;
          const cards = document.querySelectorAll('.framer-1k89e8c a, [data-framer-name="Portfolios"] a, a[href*="portfolio/"]');
          cards.forEach(card => {
            const txt = (card.innerText || '').toLowerCase();
            let visible = true;
            if (val === 'festivals') {
              visible = txt.includes('delvisa') || txt.includes('dempo') || txt.includes('specta show');
            } else if (val === 'moklet') {
              visible = txt.includes('moklet') || txt.includes('diesnat') || txt.includes('mic');
            } else if (val === 'tech') {
              visible = txt.includes('devfest') || txt.includes('meo');
            } else if (val === 'grad') {
              visible = txt.includes('wisuda');
            } else if (val === 'sports') {
              visible = txt.includes('olima') || txt.includes('fun run');
            } else if (val === 'studio') {
              visible = txt.includes('dc specta');
            }
            card.style.display = visible ? '' : 'none';
          });
        });
      }
    });

    // Ensure Go Back button icon (ArrowElbowDownLeft) is always rendered
    document.querySelectorAll('.framer-1awc2go-container').forEach(container => {
      if (!container.querySelector('svg')) {
        container.innerHTML = `
          <div style="display: contents;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="currentColor" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: currentColor; flex-shrink: 0;">
              <g>
                <path d="M200,32V176a8,8,0,0,1-8,8H67.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48a8,8,0,0,1,11.32,11.32L67.31,168H184V32a8,8,0,0,1,16,0Z"></path>
              </g>
            </svg>
          </div>
        `;
      }
    });

    // Remove any extra custom buttons
    document.querySelectorAll('#haikal-gphotos-cta').forEach(el => el.remove());

    // 8. Contact Links & Footer
    document.querySelectorAll('.framer-vyjsag a, .framer-1fghjjs a').forEach(a => {
      a.innerText = '+62 895-2842-5748';
      a.href = 'https://wa.me/6289528425748';
    });
    document.querySelectorAll('.framer-lxrrq1 a, .framer-1j3v1q4 a').forEach(a => {
      a.innerText = 'arasyidhaikal00@gmail.com';
      a.href = 'mailto:arasyidhaikal00@gmail.com';
    });
    document.querySelectorAll('footer a[href*="x.com"]').forEach(a => {
      a.href = 'https://www.instagram.com/namakuhaikall/';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncDOM);
  } else {
    syncDOM();
  }

  setInterval(syncDOM, 300);
})();
