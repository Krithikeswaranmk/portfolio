import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | Applied Data Scientist | LLM Research Engineer`,
  description: portfolioData.summary,
  keywords: [
    "Applied Data Scientist",
    "LLM Research Engineer",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Large Language Models",
    "Data Science",
  ],
  authors: [{ name: portfolioData.personal.name }],
  openGraph: {
    title: `${portfolioData.personal.name} | Applied Data Scientist`,
    description: portfolioData.summary,
    type: "website",
    locale: "en_US",
    url: portfolioData.personal.linkedin,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} | Applied Data Scientist`,
    description: portfolioData.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolioData.personal.name,
  email: portfolioData.personal.email,
  telephone: portfolioData.personal.phone,
  url: portfolioData.personal.linkedin,
  jobTitle: "Applied Data Scientist",
  worksFor: {
    "@type": "Organization",
    name: portfolioData.experience.company,
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: portfolioData.education.institution,
  },
  sameAs: [
    portfolioData.personal.linkedin,
    portfolioData.personal.github,
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: portfolioData.personal.location,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}

