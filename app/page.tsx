"use client";

import { useEffect, useState } from "react";
import HireModal from "@/components/HireModal";
import CertificateCard from "@/components/CertificateCard";
import LocaleSwitch from "@/components/LocaleSwitch";
import { Rich, useLocale } from "@/components/LocaleProvider";
import { CONTACT_LINKEDIN } from "@/lib/contact";


function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Page() {
  useReveal();
  const { t } = useLocale();
  const [hireOpen, setHireOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  console.log("CURRENT SKILLS GROUPS:", t.skills?.groups);

  const NAV_LINKS = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#certifications", label: t.nav.certifications },
    { href: "#contact", label: t.nav.contact },
  ];

  // Tutup menu mobile dengan tombol Escape (tanpa mengunci scroll halaman).
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  return (
    <main className="min-h-screen overflow-x-clip">
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mt-3 sm:mt-4 flex items-center justify-between gap-2 sm:gap-3 rounded-2xl bg-ink/95 backdrop-blur px-3 sm:px-5 py-3 text-cream shadow-card">
            <a href="#home" className="font-extrabold tracking-tight shrink-0">
              DAFFA<span className="text-amberbrand"> • MAP</span>
            </a>
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <a href="#about" className="hover:text-amberbrand">{t.nav.about}</a>
              <a href="#experience" className="hover:text-amberbrand">{t.nav.experience}</a>
              <a href="#projects" className="hover:text-amberbrand">{t.nav.projects}</a>
              <a href="#skills" className="hover:text-amberbrand">{t.nav.skills}</a>
              <a href="#certifications" className="hover:text-amberbrand">{t.nav.certifications}</a>
              <a href="#contact" className="hover:text-amberbrand">{t.nav.contact}</a>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <LocaleSwitch />
              <button
                type="button"
                onClick={() => setHireOpen(true)}
                className="rounded-full bg-amberbrand px-4 py-2 text-[13px] sm:text-sm font-bold text-ink hover:bg-cream whitespace-nowrap"
              >
                {t.nav.hire}
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream/15 text-cream hover:bg-cream/25 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                ) : (
                  <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* MOBILE MENU */}
          <div
            id="mobile-menu"
            className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
              isMobileMenuOpen ? "mt-3 max-h-[85vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className="rounded-2xl bg-[#0B192C] p-2 shadow-card border border-amber-500/30">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-bold text-amber-300 hover:text-amber-400 hover:bg-white/5 transition-colors border-b border-white/10 last:border-b-0"
                >
                  {link.label}
                  <svg aria-hidden="true" className="w-4 h-4 shrink-0 text-amber-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* HERO - Canva style */}
      <section id="home" className="relative grain pt-28 sm:pt-32 pb-10 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 grid md:grid-cols-[1.15fr_.85fr] gap-8 md:gap-10 items-center">
          <div className="reveal visible">
            <p className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full bg-ink px-3 sm:px-4 py-1.5 text-[10px] sm:text-[12px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-cream">
              {t.hero.badge}
            </p>
            <h1 className="mt-5 font-display text-[40px] sm:text-5xl md:text-7xl leading-[1.02] md:leading-[0.95] font-extrabold tracking-tight">
              DAFFA<br />MAHARDIKA<br />
              <span className="text-tealdeep">AUZAN PUTRA</span>
            </h1>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink/80">
              <Rich text={t.hero.lead} />
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <a href="/CV_ATS.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full bg-ink px-6 py-3 font-bold text-center text-cream hover:bg-tealdeep inline-flex items-center justify-center gap-2">
                <svg aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                {t.hero.cta}
              </a>
              <a href={CONTACT_LINKEDIN} target="_blank" rel="noreferrer" className="rounded-full border-2 border-ink px-6 py-3 font-bold text-center hover:bg-ink hover:text-cream">
                LinkedIn ↗
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 max-w-md gap-2 sm:gap-3">
              {[["2", t.hero.stats[0]], ["3.26", t.hero.stats[1]], ["3", t.hero.stats[2]]].map(([n, l]) => (
                <div key={n} className="rounded-2xl bg-white p-3 sm:p-4 text-center shadow-card">
                  <div className="text-xl sm:text-2xl font-extrabold">{n}</div>
                  <div className="text-[10px] sm:text-[11px] whitespace-pre-line text-ink/70 font-medium">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative reveal visible mt-2 md:mt-0">
            <div className="relative">
              <div aria-hidden="true" className="bg-amber-500/10 blur-3xl w-72 h-72 rounded-full absolute -z-10 -top-12 -right-12 pointer-events-none" />
              <div className="absolute z-10 top-3 left-3 sm:-top-6 sm:-left-6 rounded-2xl bg-amberbrand px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-bold rotate-[-6deg] shadow-card">
                {t.hero.photoTopBadge}
              </div>
              <div className="absolute z-10 bottom-4 left-3 sm:bottom-6 sm:-left-8 rounded-2xl bg-ink text-cream px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold rotate-[4deg]">
                {t.hero.photoBottomBadge}
              </div>
              <div className="arch-photo overflow-hidden border-[5px] sm:border-[6px] border-ink shadow-card bg-sand floaty">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/profile.jpg" alt="Daffa Mahardika Auzan Putra" className="h-[380px] sm:h-[440px] md:h-[520px] w-full object-cover object-top" />
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-tealdeep text-cream p-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="font-bold text-sm sm:text-base truncate">{t.hero.location}</div>
                <div className="text-xs sm:text-sm opacity-80">{t.hero.locationSub}</div>
              </div>
              <div className="text-3xl shrink-0">📍</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-ink py-3 overflow-hidden border-y-4 border-amberbrand">
        <div className="flex whitespace-nowrap marquee-track w-max gap-0 text-cream font-bold tracking-widest text-sm">
          {[0, 1].map((k) => (
            <span key={k} className="px-4">{t.marquee}</span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 sm:px-5 py-12 sm:py-16 scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <div className="reveal rounded-3xl bg-white p-6 sm:p-8 shadow-card">
            <p className="text-xs font-extrabold tracking-[0.25em] text-tealdeep">{t.about.eyebrow}</p>
            <h2 className="font-display text-[28px] sm:text-4xl leading-tight font-bold mt-2">{t.about.title}</h2>
            <p className="mt-4 text-ink/80 leading-relaxed">
              <Rich text={t.about.body} />
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm">
              {t.about.chips.map((s) => (
                <span key={s} className="rounded-full bg-sand px-3 py-1 font-semibold">{s}</span>
              ))}
            </div>
          </div>
          <div className="reveal rounded-3xl bg-ink text-cream p-6 sm:p-8 shadow-card">
            <p className="text-xs font-extrabold tracking-[0.25em] text-amberbrand">{t.about.eduEyebrow}</p>
            <h3 className="text-xl sm:text-2xl font-extrabold mt-2">{t.about.eduSchool}</h3>
            <p className="opacity-80 text-sm mt-1">{t.about.eduMeta}</p>
            <p className="mt-5 text-xs font-extrabold tracking-[0.2em] text-amberbrand/90">{t.about.eduCoursesLabel}</p>
            <div className="mt-2 flex flex-wrap gap-2 text-[13px]">
              {t.about.eduCourses.map((c) => (
                <span key={c} className="rounded-full bg-white/10 px-3 py-1 font-semibold">{c}</span>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-white/10 p-4 text-sm leading-relaxed opacity-90">
              <span className="font-extrabold text-amberbrand">{t.about.eduFinalLabel}: </span>
              {t.about.eduFinalProject}
            </div>
            <div className="mt-4 rounded-2xl bg-cream text-ink p-4 text-sm font-semibold">{t.about.eduFocus}</div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-sand/60 py-12 sm:py-16 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          <p className="reveal text-xs font-extrabold tracking-[0.25em] text-tealdeep">{t.experience.eyebrow}</p>
          <h2 className="reveal font-display text-[28px] sm:text-4xl md:text-5xl leading-tight font-bold">{t.experience.title}</h2>
          <div className="mt-6 sm:mt-8 grid md:grid-cols-2 gap-4 sm:gap-6">
            {t.experience.items.map((e) => (
              <article key={e.id} className="reveal rounded-3xl bg-white p-6 sm:p-7 shadow-card border-t-8 border-ink">
                <div className="text-xs font-bold text-tealdeep">{e.period} • {e.location}</div>
                <h3 className="text-xl font-extrabold mt-1">{e.company}</h3>
                <div className="inline-block mt-2 rounded-full bg-ink text-cream px-3 py-1 text-xs font-bold">{e.role}</div>
                <ul className="mt-4 space-y-2 text-[15px] text-ink/80 list-disc pl-5">
                  {e.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
                {(e.photos || []).length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {(e.photos || []).map((photo, i) => (
                      <div key={i} className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-sand/10 border border-sand/20">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent text-white text-[11px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {photo.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {e.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.tags.map((tag) => (
                      <span key={tag} className="text-xs font-bold rounded-full bg-mutedblue px-3 py-1">{tag}</span>
                    ))}
                  </div>
                )}
                {e.credentialLink && (
                  <div className="mt-4 pt-3 border-t border-ink/5">
                    <a
                      href={e.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-[12px] font-semibold text-ink/70 border border-ink/15 rounded-full hover:border-tealdeep hover:text-tealdeep hover:bg-tealdeep/5 transition-all"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      {t.certifications.showCredential}
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* FEATURED PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-5 py-12 sm:py-16 scroll-mt-24">
        <p className="reveal text-xs font-extrabold tracking-[0.25em] text-tealdeep">{t.projects.eyebrow}</p>
        <h2 className="reveal font-display text-[28px] sm:text-4xl md:text-5xl leading-tight font-bold">{t.projects.sectionTitle}</h2>

        <article className="reveal mt-6 sm:mt-8 relative overflow-hidden rounded-3xl bg-ink text-cream p-6 sm:p-8 shadow-card border-t-8 border-amberbrand">
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amberbrand/10 blur-2xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-amberbrand/10 text-amberbrand border border-amberbrand/30 px-3 py-1.5 text-[11px] sm:text-xs font-bold tracking-wide">
              <svg aria-hidden="true" className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
              </svg>
              {t.projects.category}
            </span>

            <h3 className="mt-4 font-extrabold text-lg sm:text-2xl leading-snug">{t.projects.thesisTitle}</h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed opacity-80 max-w-3xl">{t.projects.description}</p>

            <ul className="mt-5 space-y-2 text-sm sm:text-[15px] opacity-90 list-disc pl-5">
              {t.projects.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {t.projects.tags.map((tag) => (
                <span key={tag} className="text-[11px] sm:text-xs font-bold rounded-full bg-white/10 border border-white/10 px-3 py-1">{tag}</span>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="https://drive.google.com/file/d/1cUsF8dE_WAQ8nk1ikc1dDKFBPyH4st4f/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cream text-ink px-5 sm:px-6 py-3 text-sm sm:text-base font-bold hover:bg-amberbrand transition-colors"
              >
                <svg aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M9 15h6" />
                  <path d="M9 18h3" />
                </svg>
                {t.projects.viewPaper}
              </a>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="text-xs font-bold tracking-[0.15em] text-cream/60 uppercase">{t.projects.docsLabel}</div>
              <div className="mt-3 grid sm:grid-cols-3 gap-2">
                {t.projects.docs.map((d) => (
                  <a
                    key={d.url}
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-xs sm:text-[13px] font-semibold hover:bg-white/10 hover:border-amberbrand/40 transition-colors"
                  >
                    <svg aria-hidden="true" className="w-4 h-4 shrink-0 text-amberbrand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                    </svg>
                    <span className="min-w-0">{d.label}</span>
                    <svg aria-hidden="true" className="w-3.5 h-3.5 shrink-0 ml-auto opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-5 py-12 sm:py-16 scroll-mt-24">
        <p className="reveal text-xs font-extrabold tracking-[0.25em] text-tealdeep">{t.skills.eyebrow}</p>
        <h2 className="reveal font-display text-[28px] sm:text-4xl md:text-5xl leading-tight font-bold">{t.skills.title}</h2>
        <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {(t.skills?.groups || []).map((group: any, idx: number) => (
            <div key={idx} className={`reveal rounded-3xl p-6 shadow-card ${idx % 2 ? "bg-ink text-cream" : "bg-white"}`}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {(group.items || []).map((item: string, itemIdx: number) => (
                  <li key={itemIdx} className={`text-sm flex items-center gap-2 rounded-xl px-3 py-2 font-medium ${idx % 2 ? "bg-white/10 text-cream/90" : "bg-black/5 text-ink/80"}`}>
                    <span className="text-amberbrand">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="bg-sand/60 py-12 sm:py-16 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          <p className="reveal text-xs font-extrabold tracking-[0.25em] text-tealdeep">{t.certifications.eyebrow}</p>
          <h2 className="reveal font-display text-[28px] sm:text-4xl md:text-5xl leading-tight font-bold">{t.certifications.title}</h2>
          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
            {t.certifications.items.map((cert) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                t={{
                  issued: t.certifications.issued || "Issued",
                  expires: t.certifications.expires || "Expires",
                  credentialId: t.certifications.credentialId || "Credential ID",
                  skills: t.certifications.skills || "Skills",
                  showCredential: t.certifications.showCredential || "Show credential",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-5 pb-16 sm:pb-20 scroll-mt-24">
        <div className="reveal rounded-[1.5rem] sm:rounded-[2rem] bg-ink text-cream p-6 sm:p-10 text-center shadow-card relative overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amberbrand/10 blur-2xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-tealdeep/20 blur-2xl" />
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full px-3 py-1 text-xs font-medium inline-flex items-center gap-2 mb-4">
            {t.contact.statusBadge}
          </span>
          <h2 className="font-display text-[32px] sm:text-4xl md:text-6xl leading-tight font-bold">{t.contact.title}</h2>
          <p className="mt-3 text-sm sm:text-base opacity-80 max-w-2xl mx-auto">{t.contact.body}</p>
          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-3 font-bold">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=daffa.mahardikazan@gmail.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-cream text-ink px-5 sm:px-6 py-3 text-sm sm:text-base break-all inline-flex items-center justify-center gap-2">
              <svg aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              daffa.mahardikazan@gmail.com
            </a>
            <a href="https://wa.me/6287876122015" target="_blank" rel="noopener noreferrer" className="rounded-full bg-amberbrand text-ink px-5 sm:px-6 py-3 text-sm sm:text-base inline-flex items-center justify-center gap-2">
              <svg aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +62 878-7612-2015
            </a>
            <a href={CONTACT_LINKEDIN} target="_blank" rel="noreferrer" className="rounded-full border-2 border-cream px-5 sm:px-6 py-3 text-sm sm:text-base inline-flex items-center justify-center gap-2">
              <svg aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://instagram.com/daffa.mhr" target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-cream px-5 sm:px-6 py-3 text-sm sm:text-base inline-flex items-center justify-center gap-2">
              <svg aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              @daffa.mhr
            </a>
          </div>
          <p className="border-t border-white/10 pt-6 mt-8 text-xs opacity-60">{t.contact.copyright}</p>
        </div>
      </section>

      <HireModal open={hireOpen} onClose={() => setHireOpen(false)} />
    </main>
  );
}
