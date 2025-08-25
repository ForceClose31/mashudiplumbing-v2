import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mashudi Plumbing - Professional Plumbing Services Malaysia",
  description:
    "Perkhidmatan tukang paip profesional di Kuala Lumpur, Selangor & Seremban. Pengalaman 8 tahun, harga berpatutan, servis 24/7. Hubungi +60-183-791-132",
  keywords: [
    "tukang paip",
    "plumber",
    "Kuala Lumpur",
    "Selangor",
    "Bangi",
    "Kajang",
    "Cheras",
    "paip bocor",
    "sinki tersumbat",
    "emergency plumber",
  ].join(", "),
  authors: [{ name: "Mashudi Plumbing" }],
  openGraph: {
    title: "Mashudi Plumbing - Professional Plumbing Services",
    description:
      "Perkhidmatan tukang paip profesional dengan pengalaman 8 tahun",
    type: "website",
    locale: "ms_MY",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ms" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
