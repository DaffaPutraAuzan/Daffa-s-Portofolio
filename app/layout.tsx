import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daffa Mahardika Auzan Putra | Electrical Engineer & Control System Specialist",
  description: "Lulusan S1 Teknik Elektro Universitas Diponegoro (2022–2026) dengan fokus pada Sistem Kontrol, Otomasi Industri, dan Proteksi Tenaga Listrik.",
  openGraph: {
    title: "Daffa Mahardika Auzan Putra | Electrical Engineer & Control System Specialist",
    description: "Lulusan S1 Teknik Elektro Universitas Diponegoro (2022–2026) dengan fokus pada Sistem Kontrol, Otomasi Industri, dan Proteksi Tenaga Listrik.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}