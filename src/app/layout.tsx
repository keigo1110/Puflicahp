import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Puflica | 4ZIGEN",
  description: "4ZIGENチームが制作したPuflica作品のポートフォリオサイトです。東京大学大学院学際情報学府先端表現情報学コースの入試説明会ティザー画像として使用されました。",
  keywords: ["Puflica", "4ZIGEN", "メディアアート", "インタラクティブアート", "東京大学", "学際情報学府", "先端表現情報学"],
  authors: [
    { name: "岡空来" },
    { name: "金澤政宜" },
    { name: "中田裕紀" },
    { name: "南田桂吾" }
  ],
  creator: "4ZIGEN",
  publisher: "4ZIGEN",
  openGraph: {
    title: "Puflica | 4ZIGEN",
    description: "4ZIGENチームが制作したPuflica作品のポートフォリオサイト",
    url: "https://puflica.vercel.app",
    siteName: "Puflica",
    images: [
      {
        url: "/images_reduce/image_0086.png",
        width: 1200,
        height: 630,
        alt: "Puflica作品イメージ",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Puflica | 4ZIGEN",
    description: "4ZIGENチームが制作したPuflica作品のポートフォリオサイト",
    images: ["/images_reduce/image_0086.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png' }
    ],
    apple: [
      { url: '/favicon.png' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="canonical" href="https://puflica.vercel.app" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "Puflica",
              "description": "4ZIGENチームが制作したPuflica作品のポートフォリオサイトです。東京大学大学院学際情報学府先端表現情報学コースの入試説明会ティザー画像として使用されました。",
              "image": "https://puflica.vercel.app/images_reduce/image_0086.png",
              "creator": {
                "@type": "Organization",
                "name": "4ZIGEN",
                "member": [
                  {
                    "@type": "Person",
                    "name": "岡空来",
                    "jobTitle": "パシャパシャ"
                  },
                  {
                    "@type": "Person",
                    "name": "金澤政宜",
                    "jobTitle": "プカプカ"
                  },
                  {
                    "@type": "Person",
                    "name": "中田裕紀",
                    "jobTitle": "グワグワ"
                  },
                  {
                    "@type": "Person",
                    "name": "南田桂吾",
                    "jobTitle": "カタカタ"
                  }
                ]
              },
              "url": "https://puflica.vercel.app",
              "datePublished": new Date().toISOString().split('T')[0]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
