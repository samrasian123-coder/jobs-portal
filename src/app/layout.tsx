import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "SaudiJobsHub | Find Jobs in Saudi Arabia (Riyadh, Jeddah, Dammam & KSA)",
    template: "%s | SaudiJobsHub KSA",
  },
  description:
    "Discover legitimate Saudi Arabia job opportunities by city, category, and profession. Browse verified positions in Riyadh, Jeddah, Dammam, Makkah, Madinah & Neom.",
  keywords: [
    "Saudi Arabia Jobs",
    "Jobs in Riyadh",
    "Jobs in Jeddah",
    "Jobs in Dammam",
    "KSA Careers",
    "Engineering Jobs Saudi Arabia",
    "IT Jobs Saudi Arabia",
    "Healthcare Jobs KSA",
    "Vision 2030 Jobs",
    "Saudi Job Vacancies",
  ],
  authors: [{ name: "SaudiJobsHub Portal Team" }],
  openGraph: {
    title: "SaudiJobsHub | Saudi Arabia Job Portal",
    description: "Search and apply for verified Saudi Arabia job opportunities across IT, Engineering, Healthcare, Finance, and Giga-Projects.",
    url: "https://saudijobshub.com",
    siteName: "SaudiJobsHub",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
