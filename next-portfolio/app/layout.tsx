import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Enhancements from "@/components/Enhancements";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Director Portfolio | フリーランス Webディレクター",
  description:
    "10年以上の豊富な経験を持つフリーランスWebディレクター。大規模・多国籍チームでのWebサイト構築を主導。海外アパレルブランドECサイト、大手家電メーカー海外サイトディレクション実績多数。",
  metadataBase: new URL("https://hiroogino.github.io/og-free/"),
  openGraph: {
    title: "Web Director Portfolio | フリーランス Webディレクター",
    description:
      "10年以上の豊富な経験を持つフリーランスWebディレクター。大規模・多国籍チームでのWebサイト構築を主導。",
    type: "website",
    url: "https://hiroogino.github.io/og-free/",
  },
  twitter: {
    card: "summary",
    title: "Web Director Portfolio | フリーランス Webディレクター",
    description:
      "10年以上の豊富な経験を持つフリーランスWebディレクター。大規模・多国籍チームでのWebサイト構築を主導。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Enhancements />
      </body>
    </html>
  );
}
