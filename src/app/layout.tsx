import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Huong Tran | Software Engineer",
  description:
    "Software Engineer with 4+ years of experience building scalable, high-traffic web applications with React, Next.js, and TypeScript. Specializing in marketplace architecture, large data rendering, and frontend performance.",
  keywords: [
    "Software Engineer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "Performance Optimization",
    "Web Development",
    "Chợ Tốt",
    "Portfolio",
  ],
  authors: [{ name: "Huong Tran" }],
  creator: "Huong Tran",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.local",
    title: "Huong Tran | Software Engineer",
    description:
      "Software Engineer with 4+ years of experience building scalable web applications with React, Next.js, and TypeScript.",
    siteName: "Huong Tran Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huong Tran | Software Engineer",
    description:
      "Software Engineer with 4+ years of experience building scalable web applications with React, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} min-h-screen bg-[#fafafa] text-[#525252] antialiased selection:bg-blue-600/15 selection:text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
