import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/content";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://timothy-okuda-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tim Okuda — Data Analyst & Analytics Engineer",
  description: profile.about,
  authors: [{ name: profile.name }],
  keywords: [
    "Tim Okuda",
    "Timothy Okuda",
    "Data Analyst",
    "Analytics Engineer",
    "Data Engineer",
    "Automation Engineer",
    "Python",
    "SQL",
    "dbt",
    "Power BI",
    "Databricks",
  ],
  openGraph: {
    title: "Tim Okuda — Data Analyst & Analytics Engineer",
    description: profile.subTagline,
    type: "website",
    url: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Timothy Okuda",
  alternateName: "Tim Okuda",
  url: siteUrl,
  email: profile.email,
  jobTitle: "Data Analyst & Analytics Engineer",
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
