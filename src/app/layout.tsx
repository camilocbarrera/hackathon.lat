import type { Metadata } from "next";
import { Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";


const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "The Hackathon Company - Building the Future Through Innovation",
    template: "%s | The Hackathon Company",
  },
  description:
    "Empowering entrepreneurs and developers to build groundbreaking products through strategic hackathons, innovation workshops, and collaborative development.",
  keywords: [
    "hackathon",
    "innovation",
    "startup",
    "technology",
    "development",
    "entrepreneurship",
    "software",
    "collaboration",
  ],
  authors: [{ name: "The Hackathon Company" }],
  creator: "The Hackathon Company",
  publisher: "The Hackathon Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hackathon.lat"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hackathon.lat",
    title: "The Hackathon Company - Building the Future Through Innovation",
    description:
      "Empowering entrepreneurs and developers to build groundbreaking products through strategic hackathons, innovation workshops, and collaborative development.",
    siteName: "The Hackathon Company",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Hackathon Company - Building the Future Through Innovation",
    description:
      "Empowering entrepreneurs and developers to build groundbreaking products through strategic hackathons, innovation workshops, and collaborative development.",
    creator: "@hackathonlat",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body
        className={`${figtree.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
