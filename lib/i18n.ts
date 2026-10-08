export type Locale = "en" | "id";

export const LOCALES: Locale[] = ["en", "id"];

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "EN",
  id: "ID",
};

/** Nama bahasa untuk tooltip / aria-label */
export const LOCALE_FULL_NAME: Record<Locale, string> = {
  en: "English",
  id: "Bahasa Indonesia",
};

/**
 * Teks yang mengandung **bold** akan di-render sebagai <b> oleh komponen <Rich />.
 */

export type Experience = {
  company: string;
  location: string;
  period: string;
  role: string;
  points: string[];
  tags: string[];
};

export type SkillGroup = { title: string; items: string[] };

type Dict = {
  nav: { about: string; experience: string; skills: string; contact: string; hire: string };
  hero: {
    badge: string;
    lead: string;
    cta: string;
    stats: [string, string, string];
    photoTopBadge: string;
    photoBottomBadge: string;
    location: string;
    locationSub: string;
  };
  marquee: string;
  about: {
    eyebrow: string;
    title: string;
    body: string;
    chips: string[];
    eduEyebrow: string;
    eduSchool: string;
    eduMeta: string;
    eduPoints: string[];
    eduFocus: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    items: Experience[];
    orgEyebrow: string;
    orgTitle: string;
    orgBody: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: SkillGroup[];
  };
  contact: {
    title: string;
    body: string;
    footer: string;
  };
};

export const dictionaries: Record<Locale, Dict> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      hire: "Hire Me",
    },
    hero: {
      badge: "● PORTFOLIO — ELECTRICAL ENGINEERING",
      lead: "Active Electrical Engineering student at **Universitas Diponegoro** (2022–2026, GPA 3.26). Hands-on internship experience in airport electrical protection and GIS / power stations. Focused on **Control System Technology** and the evolution of **Industry 5.0**.",
      cta: "View Experience",
      stats: ["Internships\nBUMN / Support", "GPA / 4.00\nUNDIP", "Skill\nAreas"],
      photoTopBadge: "⚡ Control System",
      photoBottomBadge: "PLC • SCADA • Relay",
      location: "South Tangerang, Banten",
      locationSub: "Open for internship / entry-level",
    },
    marquee:
      "PLC • SCADA • PROTECTION RELAY • GIS • POWER DISTRIBUTION • CONTROL SYSTEM • FIBER OPTIC • INDUSTRY 5.0 • PLC • SCADA • PROTECTION RELAY • GIS • POWER DISTRIBUTION • ",
    about: {
      eyebrow: "ABOUT ME",
      title: "An engineer who loves learning & working in a team.",
      body: "I am an Electrical Engineering student at UNDIP with a strong enthusiasm for developing soft skills while deepening my knowledge of **Process Control Engineering**. Experienced in teamwork, public speaking, and event organising. I am drawn to control system technology and keep pace with Industry 5.0 developments, including control system coursework.",
      chips: ["Teamwork", "Public Speaking", "Problem Solving", "Willingness to Learn"],
      eduEyebrow: "EDUCATION",
      eduSchool: "Universitas Diponegoro",
      eduMeta: "Semarang • Aug 2022 — Sep 2026 • B.S. Electrical Engineering • 3.26/4.00",
      eduPoints: [
        "Helped implement safety measures and electrical safety standards.",
        "Delivered national defence education, conveying Pancasila and Bhinneka Tunggal Ika to new students.",
        "Supported the Merdeka Belajar programme to foster student creativity and innovation.",
        "Facilitated campus workshops on risk management and disaster mitigation.",
      ],
      eduFocus: "🎯 Focus: Control System Technology • Process Control • Automation • Industry 5.0",
    },
    experience: {
      eyebrow: "PROFESSIONAL EXPERIENCE",
      title: "Internships in critical infrastructure.",
      items: [
        {
          company: "PT. IAS Support Indonesia",
          location: "Tangerang City, Banten",
          period: "Jul 2025 — Aug 2025",
          role: "Electrical Engineering Intern",
          points: [
            "GIS Substation Division (2 weeks): operational monitoring and routine maintenance of Gas-Insulated Switchgear (GIS) and high-voltage components.",
            "Power Station 1 Division (2 weeks): supervised the power generation process, medium-voltage generator maintenance, and preventive inspection of distribution units.",
            "Electrical Protection Division (1 month): testing, calibration, and troubleshooting of protection relays and control circuits, plus PLC and SCADA monitoring and configuration.",
          ],
          tags: ["GIS", "Power Station", "Protection Relay", "PLC", "SCADA"],
        },
        {
          company: "PT. Angkasa Pura Indonesia",
          location: "Soekarno-Hatta Airport, Tangerang",
          period: "Jan 2025 — Feb 2025",
          role: "Electrical Protection Engineer (Internship)",
          points: [
            "Maintenance and inspection of electrical protection systems: relays, SCADA, PLC, and fibre optic links.",
            "Routine testing and commissioning of protection equipment in line with safety regulations.",
            "Collaborated on power distribution system optimisation and interpreted schematics and relay coordination diagrams.",
          ],
          tags: ["Relay", "SCADA", "PLC", "Fiber Optic", "Power Distribution"],
        },
      ],
      orgEyebrow: "ORGANISATION • SEP 2024 — NOV 2024",
      orgTitle: "Electrical Tesla Event — Sponsorship Coordinator Staff",
      orgBody:
        "Built the sponsorship strategy, drafted proposals and sponsor packages, coordinated with the chair and committees, trained the team, executed contracts, and managed finances to strengthen the event's brand identity.",
    },
    skills: {
      eyebrow: "SKILLS",
      title: "From relays to public speaking.",
      groups: [
        { title: "Protection & Control", items: ["Protection Relay", "Relay Coordination", "Control Circuit Troubleshooting", "Electrical Safety Standard"] },
        { title: "Automation", items: ["PLC Configuration", "SCADA Monitoring", "Motor Protection & Control", "Technical Schematic Reading"] },
        { title: "Power System", items: ["GIS Maintenance", "Generator Maintenance", "Power Distribution", "Preventive Inspection"] },
        { title: "Non-Technical", items: ["Teamwork", "Public Speaking", "Sponsorship & Negotiation", "Event Planning"] },
      ],
    },
    contact: {
      title: "Let’s connect!",
      body: "Open to internships, control and automation projects, and entry-level Electrical Engineering roles. Based in South Tangerang, available for on-site or hybrid work.",
      footer: "© 2026 Daffa Mahardika Auzan Putra • Built with Next.js + Tailwind • Ready to deploy on Vercel",
    },
  },

  id: {
    nav: {
      about: "Tentang",
      experience: "Pengalaman",
      skills: "Keahlian",
      contact: "Kontak",
      hire: "Hire Me",
    },
    hero: {
      badge: "● PORTOFOLIO — TEKNIK ELEKTRO",
      lead: "Mahasiswa aktif Teknik Elektro **Universitas Diponegoro** (2022–2026, IPK 3.26). Berpengalaman magang proteksi elektrik bandara & GIS / power station. Fokus pada **Control System Technology** dan perkembangan **Industry 5.0**.",
      cta: "Lihat Pengalaman",
      stats: ["Magang\nBUMN / Support", "IPK / 4.00\nUNDIP", "Bidang\nKeahlian"],
      photoTopBadge: "⚡ Control System",
      photoBottomBadge: "PLC • SCADA • Relay",
      location: "Tangerang Selatan, Banten",
      locationSub: "Open for internship / entry-level",
    },
    marquee:
      "PLC • SCADA • PROTECTION RELAY • GIS • POWER DISTRIBUTION • CONTROL SYSTEM • FIBER OPTIC • INDUSTRY 5.0 • PLC • SCADA • PROTECTION RELAY • GIS • POWER DISTRIBUTION • ",
    about: {
      eyebrow: "TENTANG SAYA",
      title: "Engineer yang suka belajar & kerja tim.",
      body: "Saya mahasiswa Teknik Elektro UNDIP dengan antusiasme tinggi untuk mengembangkan skill non-teknis dan memperdalam **Process Control Engineering**. Terbiasa teamwork, public speaking, dan kepanitiaan. Tertarik pada teknologi sistem kontrol dan mengikuti perkembangan Industry 5.0, termasuk course sistem kontrol.",
      chips: ["Teamwork", "Public Speaking", "Problem Solving", "Willingness to Learn"],
      eduEyebrow: "PENDIDIKAN",
      eduSchool: "Universitas Diponegoro",
      eduMeta: "Semarang • Agu 2022 — Sep 2026 • S1 Teknik Elektro • 3.26/4.00",
      eduPoints: [
        "Membantu implementasi safety measures & standar electrical safety.",
        "Edukasi bela negara, nilai Pancasila & Bhinneka Tunggal Ika untuk mahasiswa baru.",
        "Mendukung Merdeka Belajar untuk kreativitas & inovasi mahasiswa.",
        "Fasilitasi workshop risk management & mitigasi bencana di kampus.",
      ],
      eduFocus: "🎯 Minat: Control System Technology • Process Control • Automation • Industry 5.0",
    },
    experience: {
      eyebrow: "PENGALAMAN PROFESIONAL",
      title: "Magang di infrastruktur kritikal.",
      items: [
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
      ],
      orgEyebrow: "ORGANISASI • SEP 2024 — NOV 2024",
      orgTitle: "Electrical Tesla Event — Sponsorship Coordinator Staff",
      orgBody:
        "Menyusun strategi sponsorship, membuat proposal & paket sponsor, koordinasi dengan ketua & panitia, training tim, eksekusi kontrak & pengelolaan keuangan untuk brand identity event.",
    },
    skills: {
      eyebrow: "KEAHLIAN",
      title: "Dari relay sampai public speaking.",
      groups: [
        { title: "Protection & Control", items: ["Protection Relay", "Relay Coordination", "Control Circuit Troubleshooting", "Electrical Safety Standard"] },
        { title: "Automation", items: ["PLC Configuration", "SCADA Monitoring", "Motor Protection & Control", "Technical Schematic Reading"] },
        { title: "Power System", items: ["GIS Maintenance", "Generator Maintenance", "Power Distribution", "Preventive Inspection"] },
        { title: "Non-Technical", items: ["Teamwork", "Public Speaking", "Sponsorship & Negotiation", "Event Planning"] },
      ],
    },
    contact: {
      title: "Mari terhubung!",
      body: "Terbuka untuk magang, proyek control/automation, dan posisi entry-level Electrical Engineering. Domisili Tangerang Selatan, bersedia onsite/hybrid.",
      footer: "© 2026 Daffa Mahardika Auzan Putra • Built with Next.js + Tailwind • Siap deploy ke Vercel",
    },
  },
};