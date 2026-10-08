"use client";

import { useEffect } from "react";

const experiences = [
  {
    company: "PT. IAS Support Indonesia",
    location: "Tangerang City, Banten",
    period: "Jul 2025 — Agu 2025",
    role: "Electrical Engineering Intern",
    points: [
      "GIS Substation Division (2 minggu): monitoring operasional & maintenance rutin Gas-Insulated Switchgear (GIS) dan komponen high-voltage.",
      "Power Station 1 Division (2 minggu): supervisi proses pembangkit, maintenance generator medium-voltage & inspeksi preventif unit distribusi.",
      "Electrical Protection Division (1 bulan): testing, kalibrasi & troubleshooting protection relay dan control circuit, serta monitoring & konfigurasi PLC dan SCADA.",
    ],
    tags: ["GIS", "Power Station", "Protection Relay", "PLC", "SCADA"],
  },
  {
    company: "PT. Angkasa Pura Indonesia",
    location: "Soekarno-Hatta Airport, Tangerang",
    period: "Jan 2025 — Feb 2025",
    role: "Electrical Protection Engineer (Internship)",
    points: [
      "Maintenance & inspeksi sistem proteksi elektrik: relay, SCADA, PLC, dan fiber optic.",
      "Routine testing & commissioning perangkat proteksi sesuai regulasi keselamatan.",
      "Kolaborasi optimalisasi power distribution system dan membaca schematic serta relay coordination diagram.",
    ],
    tags: ["Relay", "SCADA", "PLC", "Fiber Optic", "Power Distribution"],
  },
];

const skills = [
  { title: "Protection & Control", items: ["Protection Relay", "Relay Coordination", "Control Circuit Troubleshooting", "Electrical Safety Standard"] },
  { title: "Automation", items: ["PLC Configuration", "SCADA Monitoring", "Motor Protection & Control", "Technical Schematic Reading"] },
  { title: "Power System", items: ["GIS Maintenance", "Generator Maintenance", "Power Distribution", "Preventive Inspection"] },
  { title: "Non-Technical", items: ["Teamwork", "Public Speaking", "Sponsorship & Negotiation", "Event Planning"] },
];

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

  return (
    <main className="min-h-screen overflow-x-clip">
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mt-3 sm:mt-4 flex items-center justify-between gap-3 rounded-2xl bg-ink/95 backdrop-blur px-4 sm:px-5 py-3 text-cream shadow-card">
            <a href="#home" className="font-extrabold tracking-tight shrink-0">DAFFA<span className="text-amberbrand">·MAP</span></a>
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <a href="#about" className="hover:text-amberbrand">Tentang</a>
              <a href="#experience" className="hover:text-amberbrand">Pengalaman</a>
              <a href="#skills" className="hover:text-amberbrand">Keahlian</a>
              <a href="#contact" className="hover:text-amberbrand">Kontak</a>
            </div>
            <a href="#contact" className="shrink-0 rounded-full bg-amberbrand px-4 py-2 text-[13px] sm:text-sm font-bold text-ink hover:bg-cream">Hire Me</a>
          </nav>
        </div>
      </header>

      {/* HERO - Canva style */}
      <section id="home" className="relative grain pt-28 sm:pt-32 pb-10 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 grid md:grid-cols-[1.15fr_.85fr] gap-8 md:gap-10 items-center">
          <div className="reveal visible">
            <p className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full bg-ink px-3 sm:px-4 py-1.5 text-[10px] sm:text-[12px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-cream">
              ● PORTOFOLIO — ELECTRICAL ENGINEERING
            </p>
            <h1 className="mt-5 font-display text-[40px] sm:text-5xl md:text-7xl leading-[1.02] md:leading-[0.95] font-extrabold">
              DAFFA<br />MAHARDIKA<br />
              <span className="italic font-semibold text-tealdeep">Auzan Putra</span>
            </h1>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink/80">
              Mahasiswa aktif Teknik Elektro <b>Universitas Diponegoro</b> (2022–2026, IPK 3.26).
              Berpengalaman magang proteksi elektrik bandara & GIS / power station.
              Fokus pada <b>Control System Technology</b> dan perkembangan <b>Industry 5.0</b>.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <a href="#experience" className="rounded-full bg-ink px-6 py-3 font-bold text-center text-cream hover:bg-tealdeep">Lihat Pengalaman</a>
              <a href="https://www.linkedin.com/in/daffamap" target="_blank" className="rounded-full border-2 border-ink px-6 py-3 font-bold text-center hover:bg-ink hover:text-cream">LinkedIn ↗</a>
            </div>
            <div className="mt-8 grid grid-cols-3 max-w-md gap-2 sm:gap-3">
              {[
                ["2", "Internship\nBUMN/Support"],
                ["3.26", "IPK / 4.00\nUNDIP"],
                ["4", "Bidang\nKeahlian"],
              ].map(([n, l]) => (
                <div key={n} className="rounded-2xl bg-white p-3 sm:p-4 text-center shadow-card">
                  <div className="text-xl sm:text-2xl font-extrabold">{n}</div>
                  <div className="text-[10px] sm:text-[11px] whitespace-pre-line text-ink/70 font-medium">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative reveal visible mt-2 md:mt-0">
            <div className="relative">
              <div className="absolute z-10 top-3 left-3 sm:-top-6 sm:-left-6 rounded-2xl bg-amberbrand px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-bold rotate-[-6deg] shadow-card">⚡ Control System</div>
              <div className="absolute z-10 bottom-4 left-3 sm:bottom-6 sm:-left-8 rounded-2xl bg-ink text-cream px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold rotate-[4deg]">PLC • SCADA • Relay</div>
              <div className="arch-photo overflow-hidden border-[5px] sm:border-[6px] border-ink shadow-card bg-sand floaty">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/profile.jpg" alt="Daffa Mahardika Auzan Putra" className="h-[380px] sm:h-[440px] md:h-[520px] w-full object-cover object-top" />
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-tealdeep text-cream p-4 flex items-center justify-between gap-3">
              <div className="min-w-0"><div className="font-bold text-sm sm:text-base truncate">Tangerang Selatan, Banten</div><div className="text-xs sm:text-sm opacity-80">Open for internship / entry-level</div></div>
              <div className="text-3xl shrink-0">◎</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-ink py-3 overflow-hidden border-y-4 border-amberbrand">
        <div className="flex whitespace-nowrap marquee-track w-max gap-0 text-cream font-bold tracking-widest text-sm">
          {[0,1].map(k => (
            <span key={k} className="px-4">PLC • SCADA • PROTECTION RELAY • GIS • POWER DISTRIBUTION • CONTROL SYSTEM • FIBER OPTIC • INDUSTRY 5.0 • PLC • SCADA • PROTECTION RELAY • GIS • POWER DISTRIBUTION •&nbsp;</span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 sm:px-5 py-12 sm:py-16 scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <div className="reveal rounded-3xl bg-white p-6 sm:p-8 shadow-card">
            <p className="text-xs font-extrabold tracking-[0.25em] text-tealdeep">TENTANG SAYA</p>
            <h2 className="font-display text-[28px] sm:text-4xl leading-tight font-bold mt-2">Engineer yang suka belajar & kerja tim.</h2>
            <p className="mt-4 text-ink/80 leading-relaxed">
              Saya mahasiswa Teknik Elektro UNDIP dengan antusiasme tinggi untuk mengembangkan
              skill non-teknis dan memperdalam <b>Process Control Engineering</b>.
              Terbiasa teamwork, public speaking, dan kepanitiaan. Tertarik pada teknologi sistem kontrol
              dan mengikuti perkembangan Industry 5.0, termasuk course sistem kontrol.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm">
              {["Teamwork", "Public Speaking", "Problem Solving", "Willingness to Learn"].map(s => (
                <span key={s} className="rounded-full bg-sand px-3 py-1 font-semibold">{s}</span>
              ))}
            </div>
          </div>
          <div className="reveal rounded-3xl bg-ink text-cream p-6 sm:p-8 shadow-card">
            <p className="text-xs font-extrabold tracking-[0.25em] text-amberbrand">PENDIDIKAN</p>
            <h3 className="text-xl sm:text-2xl font-extrabold mt-2">Universitas Diponegoro</h3>
            <p className="opacity-80 text-sm mt-1">Semarang • Agu 2022 — Sep 2026 • S1 Teknik Elektro • 3.26/4.00</p>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed opacity-90 list-disc pl-5">
              <li>Membantu implementasi safety measures & standar electrical safety.</li>
              <li>Edukasi bela negara, nilai Pancasila & Bhinneka Tunggal Ika untuk mahasiswa baru.</li>
              <li>Mendukung Merdeka Belajar untuk kreativitas & inovasi mahasiswa.</li>
              <li>Fasilitasi workshop risk management & mitigasi bencana di kampus.</li>
            </ul>
            <div className="mt-6 rounded-2xl bg-cream text-ink p-4 text-sm font-semibold">🎯 Minat: Control System Technology • Process Control • Automation • Industry 5.0</div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-sand/60 py-12 sm:py-16 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          <p className="reveal text-xs font-extrabold tracking-[0.25em] text-tealdeep">PENGALAMAN PROFESIONAL</p>
          <h2 className="reveal font-display text-[28px] sm:text-4xl md:text-5xl leading-tight font-bold">Magang di infrastruktur kritikal.</h2>
          <div className="mt-6 sm:mt-8 grid md:grid-cols-2 gap-4 sm:gap-6">
            {experiences.map((e) => (
              <article key={e.company} className="reveal rounded-3xl bg-white p-6 sm:p-7 shadow-card border-t-8 border-ink">
                <div className="text-xs font-bold text-tealdeep">{e.period} • {e.location}</div>
                <h3 className="text-xl font-extrabold mt-1">{e.company}</h3>
                <div className="inline-block mt-2 rounded-full bg-ink text-cream px-3 py-1 text-xs font-bold">{e.role}</div>
                <ul className="mt-4 space-y-2 text-[15px] text-ink/80 list-disc pl-5">
                  {e.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">{e.tags.map(t => <span key={t} className="text-xs font-bold rounded-full bg-mutedblue px-3 py-1">{t}</span>)}</div>
              </article>
            ))}
          </div>

          <div className="reveal mt-4 sm:mt-6 rounded-3xl bg-amberbrand p-6 sm:p-7 shadow-card grid md:grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <div className="text-xs font-extrabold tracking-widest">ORGANISASI • SEP 2024 — NOV 2024</div>
              <h3 className="text-xl sm:text-2xl leading-snug font-extrabold">Electrical Tesla Event — Sponsorship Coordinator Staff</h3>
              <p className="mt-1 text-sm sm:text-base text-ink/80">Menyusun strategi sponsorship, membuat proposal & paket sponsor, koordinasi dengan ketua & panitia, training tim, eksekusi kontrak & pengelolaan keuangan untuk brand identity event.</p>
            </div>
            <div className="text-5xl sm:text-6xl md:justify-self-end">🤝</div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-5 py-12 sm:py-16 scroll-mt-24">
        <p className="reveal text-xs font-extrabold tracking-[0.25em] text-tealdeep">KEAHLIAN</p>
        <h2 className="reveal font-display text-[28px] sm:text-4xl md:text-5xl leading-tight font-bold">Dari relay sampai public speaking.</h2>
        <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {skills.map((s, idx) => (
            <div key={s.title} className={`reveal rounded-3xl p-6 shadow-card ${idx % 2 ? "bg-ink text-cream" : "bg-white"}`}>
              <div className="text-3xl">{["⚡","🤖","🔌","🎤"][idx]}</div>
              <h3 className="font-extrabold text-lg mt-2">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-sm opacity-90">
                {s.items.map(it => <li key={it} className={`rounded-xl px-3 py-2 font-medium ${idx % 2 ? "bg-white/10" : "bg-black/5"}`}>✓ {it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-5 pb-16 sm:pb-20 scroll-mt-24">
        <div className="reveal rounded-[1.5rem] sm:rounded-[2rem] bg-ink text-cream p-6 sm:p-10 text-center shadow-card relative overflow-hidden">
          <h2 className="font-display text-[32px] sm:text-4xl md:text-6xl leading-tight font-bold">Mari terhubung!</h2>
          <p className="mt-3 text-sm sm:text-base opacity-80 max-w-2xl mx-auto">Terbuka untuk magang, proyek control/automation, dan posisi entry-level Electrical Engineering. Domisili Tangerang Selatan, bersedia onsite/hybrid.</p>
          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-3 font-bold">
            <a href="mailto:daffamahardikaauzan@gmail.com" className="rounded-full bg-cream text-ink px-5 sm:px-6 py-3 text-sm sm:text-base break-all">✉️ daffamahardikaauzan@gmail.com</a>
            <a href="tel:+6287876122015" className="rounded-full bg-amberbrand text-ink px-5 sm:px-6 py-3 text-sm sm:text-base">📞 +62 878-7612-2015</a>
            <a href="https://www.linkedin.com/in/daffamap" target="_blank" className="rounded-full border-2 border-cream px-5 sm:px-6 py-3 text-sm sm:text-base">in LinkedIn</a>
          </div>
          <p className="mt-6 text-xs opacity-60">© 2026 Daffa Mahardika Auzan Putra • Built with Next.js + Tailwind • Ready deploy to Vercel</p>
        </div>
      </section>
    </main>
  );
}
