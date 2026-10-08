import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daffa Mahardika Auzan Putra — Electrical Engineer Portfolio",
  description: "Portfolio Daffa Mahardika Auzan Putra, Electrical Engineering UNDIP. Fokus Control System, PLC, SCADA, Electrical Protection, GIS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
