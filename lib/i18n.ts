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

export type Org = { eyebrow: string; title: string; body: string };

export type CertItem = { icon: string; title: string; meta: string };

type Dict = {
  nav: { about: string; experience: string; skills: string; certifications: string; contact: string; hire: string };
  hire: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    submit: string;
    sending: string;
    cancel: string;
    close: string;
    note: string;
    sentTitle: string;
    sentBody: string;
    errorBody: string;
    rateLimited: string;
  };
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
    eduCoursesLabel: string;
    eduCourses: string[];
    eduFinalLabel: string;
    eduFinalProject: string;
    eduFocus: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    items: Experience[];
    orgs: Org[];
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: SkillGroup[];
  };
  certifications: {
    eyebrow: string;
    title: string;
    items: CertItem[];
  };
  contact: {
    title: string;
    body: string;
    copyright: string;
  };
};

export const dictionaries: Record<Locale, Dict> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      certifications: "Certifications",
      contact: "Contact",
      hire: "Hire Me",
    },
    hire: {
      title: "Hire Me",
      subtitle: "Fill in this form and your message will be sent directly to my inbox.",
      name: "Your name",
      email: "Your email",
      subject: "Subject",
      message: "Message",
      submit: "Send message",
      sending: "Sending…",
      cancel: "Cancel",
      close: "Close",
      note: "Your message goes straight to my inbox — no email app needed.",
      sentTitle: "Message sent!",
      sentBody: "Thanks — I'll get back to you soon.",
      errorBody: "Something went wrong. Please try again.",
      rateLimited: "Too many messages. Please wait a few minutes and try again.",
    },
    hero: {
      badge: "● PORTFOLIO — ELECTRICAL ENGINEERING",
      lead: "Fresh graduate in Electrical Engineering from **Universitas Diponegoro** (2022–2026, GPA 3.26). Hands-on internship experience in airport electrical protection and GIS / power stations. Focused on **Control System Technology** and the evolution of **Industry 5.0**.",
      cta: "View Experience",
      stats: ["Internships\nBUMN / Support", "GPA / 4.00\nUNDIP", "Certifications\n2024 — 2026"],
      photoTopBadge: "⚡ Control System",
      photoBottomBadge: "PLC • SCADA • Relay",
      location: "South Tangerang, Banten",
      locationSub: "Open for full-time / entry-level roles",
    },
    marquee:
      "PLC • SCADA • PROTECTION RELAY • GIS • POWER DISTRIBUTION • CONTROL SYSTEM • FIBER OPTIC • INDUSTRY 5.0 • PLC • SCADA • PROTECTION RELAY • GIS • POWER DISTRIBUTION • ",
    about: {
      eyebrow: "ABOUT ME",
      title: "An engineer who loves learning & working in a team.",
      body: "I am a fresh graduate in Electrical Engineering from UNDIP with a strong enthusiasm for developing soft skills while deepening my knowledge of **Process Control Engineering**. Experienced in teamwork, public speaking, and event organising. I am drawn to control system technology and keep pace with Industry 5.0 developments, including control system coursework.",
      chips: ["Teamwork", "Public Speaking", "Problem Solving", "Willingness to Learn"],
      eduEyebrow: "EDUCATION",
      eduSchool: "Universitas Diponegoro",
      eduMeta: "Semarang • Aug 2022 — Sep 2026 • B.S. Electrical Engineering • 3.26/4.00",
      eduCoursesLabel: "RELEVANT COURSEWORK",
      eduCourses: [
        "Electrical Protection Systems",
        "SCADA & PLC Systems",
        "Power Distribution",
        "Control Systems",
        "Industrial Automation",
        "Embedded Systems",
        "Microcontroller Systems",
        "Power System Analysis",
      ],
      eduFinalLabel: "Final Project",
      eduFinalProject:
        "Centralized Logic Control Design and Fail-Safe Protection Mechanism in a Lift, Rotary, and Slider-Based Vertical Parking System.",
      eduFocus: "🎯 Focus: Control System Technology • Process Control • Automation • Industry 5.0",
    },
    experience: {
      eyebrow: "PROFESSIONAL EXPERIENCE",
      title: "Internships in critical infrastructure.",
      items: [
        {
          company: "PT. Angkasa Pura Indonesia",
          location: "Soekarno-Hatta Airport, Tangerang",
          period: "Jan 2025 — Feb 2025",
          role: "Electrical Protection Engineer (Internship)",
          points: [
            "Internship as an Electrical Protection Engineer at Soekarno-Hatta International Airport, Tangerang.",
            "Assisted in the maintenance and inspection of electrical protection systems, including relays, SCADA, PLC, and fiber optic.",
            "Helped implement safety measures, enhancing workplace electrical safety standards.",
            "Participated in routine testing and commissioning of protection devices in compliance with safety regulations.",
            "Collaborated with senior technicians to monitor and optimize power distribution systems; learned to interpret schematics and relay coordination diagrams.",
          ],
          tags: ["Relay", "SCADA", "PLC", "Fiber Optic", "Power Distribution"],
        },
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
      ],
      orgs: [
        {
          eyebrow: "ORGANISATION • SEP 2024 — NOV 2024",
          title: "Electrical Tesla Event — Sponsorship Coordinator Staff",
          body: "Built the sponsorship strategy, drafted proposals and sponsor packages, coordinated with the chair and committees, trained the team, executed contracts, and managed finances to strengthen the event's brand identity.",
        },
        {
          eyebrow: "ORGANISATION • JAN 2025 — DEC 2025",
          title: "Biro Teknik Kontrol Otomat (TKO) — Student Development Division Staff",
          body: "Organised and facilitated technical training sessions, workshops, and skill development programmes in control engineering and automation for electrical engineering students; coordinated competency enhancement initiatives within the department.",
        },
      ],
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
    certifications: {
      eyebrow: "CERTIFICATIONS",
      title: "Certified & tested.",
      items: [
        { icon: "🎥", title: "Automation Clinic — Motor Protection and Control", meta: "Webinar • 2024" },
        { icon: "📜", title: "Internship Certificate — Electrical Protection Unit", meta: "PT. Angkasa Pura Indonesia • 2025" },
        { icon: "📜", title: "Internship Certificate — Electrical Engineering Intern", meta: "PT. IAS Support Indonesia • 2026" },
        { icon: "🌍", title: "TOEFL EPT — Score 586/677", meta: "SEU Diponegoro University • 2026" },
      ],
    },
    contact: {
      title: "Let’s connect!",
      body: "Open to full-time Electrical Engineering roles and control/automation projects. Based in South Tangerang, available for on-site or hybrid work.",
      copyright: "© 2026 Daffa Mahardika Auzan Putra",
    },
  },

  id: {
    nav: {
      about: "Tentang",
      experience: "Pengalaman",
      skills: "Keahlian",
      certifications: "Sertifikasi",
      contact: "Kontak",
      hire: "Hire Me",
    },
    hire: {
      title: "Hire Me",
      subtitle: "Isi form ini dan pesan Anda akan langsung terkirim ke inbox saya.",
      name: "Nama Anda",
      email: "Email Anda",
      subject: "Subjek",
      message: "Pesan",
      submit: "Kirim pesan",
      sending: "Mengirim…",
      cancel: "Batal",
      close: "Tutup",
      note: "Pesan langsung masuk ke inbox saya — tanpa perlu aplikasi email.",
      sentTitle: "Pesan terkirim!",
      sentBody: "Terima kasih — saya akan segera membalas.",
      errorBody: "Terjadi kesalahan. Silakan coba lagi.",
      rateLimited: "Terlalu banyak pesan. Tunggu beberapa menit lalu coba lagi.",
    },
    hero: {
      badge: "● PORTOFOLIO — TEKNIK ELEKTRO",
      lead: "Fresh graduate Teknik Elektro **Universitas Diponegoro** (2022–2026, IPK 3.26). Berpengalaman magang proteksi elektrik bandara & GIS / power station. Fokus pada **Control System Technology** dan perkembangan **Industry 5.0**.",
      cta: "Lihat Pengalaman",
      stats: ["Magang\nBUMN / Support", "IPK / 4.00\nUNDIP", "Sertifikasi\n2024 — 2026"],
      photoTopBadge: "⚡ Control System",
      photoBottomBadge: "PLC • SCADA • Relay",
      location: "Tangerang Selatan, Banten",
      locationSub: "Terbuka untuk full-time / entry-level",
    },
    marquee:
      "PLC • SCADA • PROTECTION RELAY • GIS • POWER DISTRIBUTION • CONTROL SYSTEM • FIBER OPTIC • INDUSTRY 5.0 • PLC • SCADA • PROTECTION RELAY • GIS • POWER DISTRIBUTION • ",
    about: {
      eyebrow: "TENTANG SAYA",
      title: "Engineer yang suka belajar & kerja tim.",
      body: "Saya fresh graduate Teknik Elektro UNDIP dengan antusiasme tinggi untuk mengembangkan skill non-teknis dan memperdalam **Process Control Engineering**. Terbiasa teamwork, public speaking, dan kepanitiaan. Tertarik pada teknologi sistem kontrol dan mengikuti perkembangan Industry 5.0, termasuk course sistem kontrol.",
      chips: ["Teamwork", "Public Speaking", "Problem Solving", "Willingness to Learn"],
      eduEyebrow: "PENDIDIKAN",
      eduSchool: "Universitas Diponegoro",
      eduMeta: "Semarang • Agu 2022 — Sep 2026 • S1 Teknik Elektro • 3.26/4.00",
      eduCoursesLabel: "MATA KULIAH RELEVAN",
      eduCourses: [
        "Electrical Protection Systems",
        "SCADA & PLC Systems",
        "Power Distribution",
        "Control Systems",
        "Industrial Automation",
        "Embedded Systems",
        "Microcontroller Systems",
        "Power System Analysis",
      ],
      eduFinalLabel: "Tugas Akhir",
      eduFinalProject:
        "Centralized Logic Control Design and Fail-Safe Protection Mechanism in a Lift, Rotary, and Slider-Based Vertical Parking System.",
      eduFocus: "🎯 Minat: Control System Technology • Process Control • Automation • Industry 5.0",
    },
    experience: {
      eyebrow: "PENGALAMAN PROFESIONAL",
      title: "Magang di infrastruktur kritikal.",
      items: [
        {
          company: "PT. Angkasa Pura Indonesia",
          location: "Soekarno-Hatta Airport, Tangerang",
          period: "Jan 2025 — Feb 2025",
          role: "Electrical Protection Engineer (Internship)",
          points: [
            "Magang sebagai Electrical Protection Engineer di Bandara Internasional Soekarno-Hatta, Tangerang.",
            "Membantu maintenance & inspeksi sistem proteksi elektrik, termasuk relay, SCADA, PLC, dan fiber optic.",
            "Membantu implementasi safety measures untuk meningkatkan standar electrical safety di tempat kerja.",
            "Terlibat routine testing & commissioning perangkat proteksi sesuai regulasi keselamatan.",
            "Berkolaborasi dengan teknisi senior memonitor & mengoptimalkan power distribution system; belajar membaca schematic dan relay coordination diagram.",
          ],
          tags: ["Relay", "SCADA", "PLC", "Fiber Optic", "Power Distribution"],
        },
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
      ],
      orgs: [
        {
          eyebrow: "ORGANISASI • SEP 2024 — NOV 2024",
          title: "Electrical Tesla Event — Sponsorship Coordinator Staff",
          body: "Menyusun strategi sponsorship, membuat proposal & paket sponsor, koordinasi dengan ketua & panitia, training tim, eksekusi kontrak & pengelolaan keuangan untuk brand identity event.",
        },
        {
          eyebrow: "ORGANISASI • JAN 2025 — DES 2025",
          title: "Biro Teknik Kontrol Otomat (TKO) — Staff Divisi Student Development",
          body: "Mengorganisasi dan memfasilitasi technical training, workshop, dan program pengembangan skill di bidang control engineering dan automation untuk mahasiswa teknik elektro; mengoordinasikan inisiatif peningkatan kompetensi di jurusan.",
        },
      ],
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
    certifications: {
      eyebrow: "SERTIFIKASI",
      title: "Tersertifikasi & teruji.",
      items: [
        { icon: "🎥", title: "Automation Clinic — Motor Protection and Control", meta: "Webinar • 2024" },
        { icon: "📜", title: "Sertifikat Magang — Electrical Protection Unit", meta: "PT. Angkasa Pura Indonesia • 2025" },
        { icon: "📜", title: "Sertifikat Magang — Electrical Engineering Intern", meta: "PT. IAS Support Indonesia • 2026" },
        { icon: "🌍", title: "TOEFL EPT — Skor 586/677", meta: "SEU Universitas Diponegoro • 2026" },
      ],
    },
    contact: {
      title: "Mari terhubung!",
      body: "Terbuka untuk posisi full-time Electrical Engineering dan proyek control/automation. Domisili Tangerang Selatan, bersedia onsite/hybrid.",
      copyright: "© 2026 Daffa Mahardika Auzan Putra",
    },
  },
};