import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "../components/Head";
import Footer from "../components/Footer";
import GravityParticles from "../components/GravityParticles";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CryptoBrains",
  description: "CryptoBrains",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="">
        <Head />
        <GravityParticles />
        {children}
        <Footer />
      </body>
    </html>
  );
}
