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
  credentialLink?: string;
  id?: string;
};

export type SkillGroup = { title: string; items: string[] };

export type Org = { eyebrow: string; title: string; body: string };

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  link: string;
  issuerLogo?: string;
};

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
    orgs?: Org[];
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: SkillGroup[];
  };
  certifications: {
    eyebrow: string;
    title: string;
    issued: string;
    expires: string;
    credentialId: string;
    skills: string;
    showCredential: string;
    items: Certificate[];
  };
  contact: {
    title: string;
    subtitle: string;
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
      lead: "Fresh graduate in Electrical Engineering from **Universitas Diponegoro",
      cta: "View Full ATS CV",
      stats: ["Internships", "GPA 4.00", "Certifications"],
      photoTopBadge: "Control System",
      photoBottomBadge: "PLC SCADA Relay",
      location: "Tangerang Selatan, Banten, Indonesia",
      locationSub: "Available for relocation or remote work",
    },
    marquee: "Welcome to my portfolio — Electrical Engineer • Control System Specialist",
    about: {
      eyebrow: "ABOUT",
      title: "Daffa Mahardika Auzan Putra",
      body: "Fresh graduate in Electrical Engineering from Universitas Diponegoro (UNDIP), class of 2026. GPA 3.26/4.00. Hands-on internship experience in airport electrical protection and GIS power stations. Focused on Control System Technology and the evolution of Industry 5.0.",
      chips: ["⚡ Protection & Control", "🤖 Automation", "🔌 Power System", "🎤 Non-Technical"],
      eduEyebrow: "EDUCATION",
      eduSchool: "Universitas Diponegoro (UNDIP)",
      eduMeta: "Semarang · Aug 2022 · Sep 2026 · S1 Teknik Elektro · 3.26/4.00",
      eduCoursesLabel: "Relevant Courses",
      eduCourses: ["Power System Analysis", "Control Systems", "Embedded Systems", "Microcontroller Systems", "Industrial Automation"],
      eduFinalLabel: "Tugas Akhir",
      eduFinalProject: "Centralized Logic Control Design and Fail-Safe Protection Mechanism in a Lift, Rotary, and Slider-Based Vertical Parking System.",
      eduFocus: "🎯 Minat: Control System Technology • Process Control • Automation • Industry 5.0",
    },
    experience: {
      eyebrow: "PROFESSIONAL EXPERIENCE & ORGANIZATION",
      title: "Career & Organizational Journey",
      items: [
        {
          id: "angkasa-pura",
          company: "PT. Angkasa Pura Indonesia",
          location: "Soekarno-Hatta Airport, Tangerang",
          period: "Jan 2025 — Feb 2025",
          role: "Electrical Protection Engineer (Internship)",
          points: [
            "Internship as an Electrical Protection Engineer at Soekarno-Hatta International Airport, Tangerang.",
            "Assisted in the maintenance and inspection of electrical protection systems, including relays, SCADA, PLC, and fiber optic.",
            "Helped implement safety measures, enhancing workplace electrical safety standards.",
            "Participated in routine testing and commissioning of protection devices in compliance with safety regulations.",
            "Collaborated with senior technicians to monitor and optimize power distribution systems.",
          ],
          tags: ["Relay", "SCADA", "PLC", "Fiber Optic", "Power Distribution"],
          credentialLink: "https://drive.google.com/file/d/1OAHo-ZRn1H6bChjrGkaKZ-wKDX9n_Qs6/view?usp=sharing",
        },
        {
          id: "ias-support",
          company: "PT. IAS Support Indonesia",
          location: "Tangerang City, Banten",
          period: "Jul 2025 — Aug 2025",
          role: "Electrical Engineering Intern",
          points: [
            "GIS Substation Division (2 weeks): operational monitoring and routine maintenance of Gas-Insulated Switchgear (GIS) and high-voltage components.",
            "Power Station 1 Division (2 weeks): supervised the power generation process, medium-voltage generator maintenance, and preventive inspection of distribution units.",
            "Electrical Protection Division (1 month): testing, calibration, and troubleshooting of protection relays and control circuits, plus PLC and SCADA monitoring.",
          ],
          tags: ["GIS", "Power Station", "Protection Relay", "PLC", "SCADA"],
          credentialLink: "https://drive.google.com/file/d/1GucV3PzdbTDS_zah5Xy3i50m-VbS6lE9/view?usp=sharing",
        },
        {
          id: "tesla-event",
          company: "Electrical Tesla Event",
          location: "Sponsorship Coordinator Staff",
          period: "ORGANIZATION • SEP 2024 — NOV 2024",
          role: "Sponsorship Coordinator Staff",
          points: [
            "Built the sponsorship strategy, drafted proposals and sponsor packages.",
            "Coordinated with the chair and committees, executed contracts, and managed finances to strengthen the event's brand identity.",
          ],
          tags: [],
          credentialLink: "https://drive.google.com/file/d/1j5yH83KfntDHgsWRkdSdEfbFKC8XjcnY/view?usp=sharing",
        },
        {
          id: "tko",
          company: "Biro Teknik Kontrol Otomat (TKO)",
          location: "Staff Divisi Student Development",
          period: "ORGANIZATION • JAN 2025 — DEC 2025",
          role: "Staff Divisi Student Development",
          points: [
            "Responsible for student development in control systems and automation, managing division programs.",
            "Conducting technical training, and fostering student development in electrical & control engineering.",
          ],
          tags: [],
          credentialLink: "https://drive.google.com/file/d/1j5yH83KfntDHgsWRkdSdEfbFKC8XjcnY/view?usp=sharing",
        },
        {
          id: "toefl-ept",
          company: "TOEFL EPT — Service English Unit UNDIP",
          location: "ACADEMIC QUALIFICATION",
          period: "MAY 2026 — MAY 2028",
          role: "English Proficiency Test (EPT) — TOEFL Score Equivalent 586",
          points: [
            "Service English Unit (SEU), Universitas Diponegoro.",
            "Achieved an equivalent score of 586 on the Online English Proficiency Test (EPT) administered by Diponegoro University.",
          ],
          tags: ["TOEFL", "Technical English"],
          credentialLink: "https://drive.google.com/file/d/1cD3ztY3-uqw7xrXPNtw1Ia5YfdpA-ENs/view?usp=sharing",
        },
      ],
    },
    skills: {
      eyebrow: "SKILLS",
      title: "Technical Expertise & Core Competencies",
      groups: [
        {
          title: "⚡ Protection & Control",
          items: ["Protection Relay", "Relay Coordination", "Control Circuit Troubleshooting", "Electrical Safety Standard"],
        },
        {
          title: "🤖 Automation",
          items: ["PLC Configuration", "SCADA Monitoring", "Motor Protection & Control", "Technical Schematic Reading"],
        },
        {
          title: "🔌 Power System",
          items: ["GIS Maintenance", "Generator Maintenance", "Power Distribution", "Preventive Inspection"],
        },
        {
          title: "🎤 Non-Technical",
          items: ["Teamwork", "Public Speaking", "Sponsorship & Negotiation", "Event Planning"],
        },
      ],
    },
    certifications: {
      eyebrow: "CERTIFICATIONS",
      title: "Licenses & Certifications",
      issued: "Issued",
      expires: "Expires",
      credentialId: "Credential ID",
      skills: "Skills",
      showCredential: "Show credential",
      items: [
        {
          id: "angkasa-pura-cert",
          title: "Electrical Protection Engineering",
          issuer: "PT Angkasa Pura Indonesia",
          date: "Jan 2025 - Feb 2025",
          credentialId: "AP-ENG-2025-001",
          skills: ["Relay", "SCADA", "PLC", "Fiber Optic", "Power Distribution"],
          link: "https://drive.google.com/file/d/1OAHo-ZRn1H6bChjrGkaKZ-wKDX9n_Qs6/view?usp=sharing",
          issuerLogo: "/logos/injourney.png"
        },
        {
          id: "ias-support-cert",
          title: "Electrical Engineering Internship",
          issuer: "PT IAS Support Indonesia",
          date: "Jul 2025 - Aug 2025",
          credentialId: "IAS-INT-2025-007",
          skills: ["GIS", "Power Station", "Protection Relay", "PLC", "SCADA"],
          link: "https://drive.google.com/file/d/1GucV3PzdbTDS_zah5Xy3i50m-VbS6lE9/view?usp=sharing",
          issuerLogo: "/logos/ias.png"
        },
        {
          id: "toefl-ept-cert",
          title: "English Proficiency Test (EPT) — TOEFL Score Equivalent 586",
          issuer: "Service English Unit UNDIP",
          date: "May 2026 - May 2028",
          credentialId: "TOEFL-EPT-586",
          skills: ["TOEFL", "Technical English"],
          link: "https://drive.google.com/file/d/1cD3ztY3-uqw7xrXPNtw1Ia5YfdpA-ENs/view?usp=sharing",
          issuerLogo: "/logos/undip.jpg"
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's Build Something Reliable Together.",
      body: "Open for full-time Engineering opportunities, PLC/SCADA projects, and technical collaborations.",
      copyright: "© 2026 Daffa Mahardika Auzan Putra. All rights reserved.",
    },
  },
  id: {
    nav: {
      about: "Tentang",
      experience: "Pengalaman",
      skills: "Keterampilan",
      certifications: "Sertifikasi & Lisensi",
      contact: "Kontak",
      hire: "Sewa Saya",
    },
    hire: {
      title: "Sewa Saya",
      subtitle: "Isi formulir ini dan pesan akan langsung dikirim ke inbox saya.",
      name: "Nama Anda",
      email: "Email Anda",
      subject: "Subjek",
      message: "Pesan",
      submit: "Kirim Pesan",
      sending: "Mengirim…",
      cancel: "Batal",
      close: "Tutup",
      note: "Pesan Anda langsung ke inbox — tidak perlu aplikasi email.",
      sentTitle: "Pesan Terkirim!",
      sentBody: "Terima kasih — saya akan segera balas.",
      errorBody: "Terjadi kesalahan. Silakan coba lagi.",
      rateLimited: "Terlalu banyak pesan. Silakan tunggu beberapa menit dan coba lagi.",
    },
    hero: {
      badge: "● PORTFOLIO — TEKNIK ELEKTRO",
      lead: "Sarjana Baru Teknik Elektro dari **Universitas Diponegoro",
      cta: "Lihat CV ATS Lengkap",
      stats: ["Magang", "IPK 4.00", "Sertifikasi"],
      photoTopBadge: "Control System",
      photoBottomBadge: "PLC SCADA Relay",
      location: "Tangerang Selatan, Banten, Indonesia",
      locationSub: "Tersedia untuk perpindahan atau kerja remote",
    },
    marquee: "Selamat datang di portofolio saya — Electrical Engineer • Control System Specialist",
    about: {
      eyebrow: "TENTANG",
      title: "Daffa Mahardika Auzan Putra",
      body: "Sarjana Baru Teknik Elektro dari Universitas Diponegoro (UNDIP), keluar tahun 2026. IPK 3.26/4.00. Pengalaman magang di proteksi elektrik bandara & GIS power station. Fokus pada Control System Technology dan perkembangan Industry 5.0.",
      chips: ["⚡ Proteksi & Kontrol", "🤖 Automatisasi", "🔌 Sistem Tenaga", "🎤 Non-Teknis"],
      eduEyebrow: "PENDIDIKAN",
      eduSchool: "Universitas Diponegoro (UNDIP)",
      eduMeta: "Semarang · Agu 2022 · Sep 2026 · S1 Teknik Elektro · 3.26/4.00",
      eduCoursesLabel: "Mata Pelajaran Relevan",
      eduCourses: ["Analisis Sistem Tenaga", "Sistem Kontrol", "Sistem Embaded", "Sistem Mikrokontrol", "Automatisasi Industri"],
      eduFinalLabel: "Tugas Akhir",
      eduFinalProject: "Centralized Logic Control Design and Fail-Safe Protection Mechanism in a Lift, Rotary, and Slider-Based Vertical Parking System.",
      eduFocus: "🎯 Minat: Control System Technology • Process Control • Automation • Industry 5.0",
    },
    experience: {
      eyebrow: "PENGALAMAN PROFESIONAL & ORGANISASI",
      title: "Perjalanan Karir & Organisasi",
      items: [
        {
          id: "angkasa-pura",
          company: "PT. Angkasa Pura Indonesia",
          location: "Soekarno-Hatta Airport, Tangerang",
          period: "Jan 2025 — Feb 2025",
          role: "Electrical Protection Engineer (Magang)",
          points: [
            "Magang sebagai Electrical Protection Engineer di Bandara Internasional Soekarno-Hatta, Tangerang.",
            "Membantu maintenance & inspeksi sistem proteksi elektrik, termasuk relay, SCADA, PLC, dan fiber optic.",
            "Membantu implementasi safety measures untuk meningkatkan standar electrical safety di tempat kerja.",
            "Terlibat routine testing & commissioning perangkat proteksi sesuai regulasi keselamatan.",
            "Berkolaborasi dengan teknisi senior memonitor & mengoptimalkan power distribution system.",
          ],
          tags: ["Relay", "SCADA", "PLC", "Fiber Optic", "Power Distribution"],
          credentialLink: "https://drive.google.com/file/d/1OAHo-ZRn1H6bChjrGkaKZ-wKDX9n_Qs6/view?usp=sharing",
        },
        {
          id: "ias-support",
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
          credentialLink: "https://drive.google.com/file/d/1GucV3PzdbTDS_zah5Xy3i50m-VbS6lE9/view?usp=sharing",
        },
        {
          id: "tesla-event",
          company: "Electrical Tesla Event",
          location: "Sponsorship Coordinator Staff",
          period: "ORGANISASI • SEP 2024 — NOV 2024",
          role: "Sponsorship Coordinator Staff",
          points: [
            "Menyusun strategi sponsorship, membuat proposal & paket sponsor.",
            "Koordinasi dengan ketua & panitia, eksekusi kontrak & pengelolaan keuangan untuk brand identity event.",
          ],
          tags: [],
          credentialLink: "https://drive.google.com/file/d/1j5yH83KfntDHgsWRkdSdEfbFKC8XjcnY/view?usp=sharing",
        },
        {
          id: "tko",
          company: "Biro Teknik Kontrol Otomat (TKO)",
          location: "Staff Divisi Student Development",
          period: "ORGANISASI • JAN 2025 — DES 2025",
          role: "Staff Divisi Student Development",
          points: [
            "Bertanggung jawab pengembangan mahasiswa di bidang sistem kendali & automasi, mengelola program divisi.",
            "Menyelenggarakan technical training, dan memfasilitasi pengembangan mahasiswa di bidang teknik elektro & kendali.",
          ],
          tags: [],
          credentialLink: "https://drive.google.com/file/d/1j5yH83KfntDHgsWRkdSdEfbFKC8XjcnY/view?usp=sharing",
        },
        {
          id: "toefl-ept",
          company: "TOEFL EPT — Service English Unit UNDIP",
          location: "KUALIFIKASI AKADEMIK",
          period: "MEI 2026 — MEI 2028",
          role: "English Proficiency Test (EPT) — Skor TOEFL 586",
          points: [
            "Service English Unit (SEU), Universitas Diponegoro.",
            "Mencapkan skor ekuivalen 586 pada Online English Proficiency Test (EPT) yang diselenggarakan oleh Universitas Diponegoro.",
          ],
          tags: ["TOEFL", "Bahasa Inggris Teknis"],
          credentialLink: "https://drive.google.com/file/d/1cD3ztY3-uqw7xrXPNtw1Ia5YfdpA-ENs/view?usp=sharing",
        },
      ],
    },
    skills: {
      eyebrow: "KEAHLIAN",
      title: "Keahlian Teknis & Kompetensi Utama",
      groups: [
        {
          title: "⚡ Proteksi & Kontrol",
          items: ["Relay Proteksi", "Koordinasi Relay", "Troubleshooting Rangkaian Kontrol", "Standar Keselamatan Listrik"]
        },
        {
          title: "🤖 Automasi",
          items: ["Konfigurasi PLC", "Monitoring SCADA", "Proteksi & Kontrol Motor", "Pembacaan Skema Teknik"]
        },
        {
          title: "🔌 Sistem Tenaga",
          items: ["Pemeliharaan GIS", "Pemeliharaan Generator", "Distribusi Tenaga Listrik", "Inspeksi Preventif"]
        },
        {
          title: "🎤 Non-Teknis",
          items: ["Kerja Sama Tim", "Public Speaking", "Sponsorship & Negosiasi", "Perencanaan Acara"]
        }
      ]
    },
    certifications: {
      eyebrow: "SERTIFIKASI & LISENSI",
      title: "Sertifikat & Lisensi",
      issued: "Diterbitkan",
      expires: "Berlaku hingga",
      credentialId: "ID Kredensial",
      skills: "Keterampilan",
      showCredential: "Lihat kredensial",
      items: [
        {
          id: "angkasa-pura-cert",
          title: "Engineering Proteksi Listrik",
          issuer: "PT Angkasa Pura Indonesia",
          date: "Jan 2025 - Feb 2025",
          credentialId: "AP-ENG-2025-001",
          skills: ["Relay", "SCADA", "PLC", "Fiber Optic", "Power Distribution"],
          link: "https://drive.google.com/file/d/1OAHo-ZRn1H6bChjrGkaKZ-wKDX9n_Qs6/view?usp=sharing",
          issuerLogo: "/logos/injourney.png"
        },
        {
          id: "ias-support-cert",
          title: "Magang Insinyur Listrik",
          issuer: "PT IAS Support Indonesia",
          date: "Jul 2025 - Agu 2025",
          credentialId: "IAS-INT-2025-007",
          skills: ["GIS", "Power Station", "Protection Relay", "PLC", "SCADA"],
          link: "https://drive.google.com/file/d/1GucV3PzdbTDS_zah5Xy3i50m-VbS6lE9/view?usp=sharing",
          issuerLogo: "/logos/ias.png"
        },
        {
          id: "toefl-ept-cert",
          title: "English Proficiency Test (EPT) — TOEFL Score Equivalent 586",
          issuer: "Service English Unit UNDIP",
          date: "May 2026 - Mei 2028",
          credentialId: "TOEFL-EPT-586",
          skills: ["TOEFL", "Bahasa Inggris Teknis"],
          link: "https://drive.google.com/file/d/1cD3ztY3-uqw7xrXPNtw1Ia5YfdpA-ENs/view?usp=sharing",
          issuerLogo: "/logos/undip.jpg"
        },
      ],
    },
    contact: {
      title: "Mari Terhubung",
      subtitle: "Mari Berkolaborasi & Membangun Sistem Terdepan.",
      body: "Terbuka untuk peluang kerja full-time, proyek sistem kontrol, dan kolaborasi teknis.",
      copyright: "© 2026 Daffa Mahardika Auzan Putra. Semua hak dilindungi.",
    },
  },
};



