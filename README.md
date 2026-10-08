# Portofolio — Daffa Mahardika Auzan Putra

Tech stack Vercel-ready: **Next.js 14 (App Router) + React + Tailwind CSS**.
Desain mengacu ke https://shintyaarlitadewi.my.canva.site/ (one-page Canva portfolio: hero arch-photo, kartu rounded, marquee, section Tentang / Pengalaman / Keahlian / Sertifikat / Kontak) — disesuaikan ke profil Electrical Engineering.

## Jalankan lokal (Bun)
```bash
bun install
bun run dev
# buka http://localhost:3000
```

## Build
```bash
bun run build
bun run start
```

## Deploy ke Vercel
1. Push folder ini ke GitHub.
2. Vercel → Add New Project → Import repo.
3. Framework Preset: **Next.js**. Build Command: `bun run build` (atau default `npm run build`). Output: `.next`.
4. Klik Deploy.

Foto: `public/profile.jpg` (dari WhatsApp Image). Ganti file itu saja untuk update foto.
Data diri: edit `app/page.tsx` (experiences, skills, certificates).
Kontak: daffamahardikaauzan@gmail.com / +6287876122015 / linkedin.com/in/daffamap
