import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";

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
    <html lang="en">
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}