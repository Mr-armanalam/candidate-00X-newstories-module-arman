import "./globals.css";
import { Playfair_Display, Merriweather } from "next/font/google";
import type { Metadata } from "next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--playfair",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NewStoriesAndTales",
  description: "A community platform for impact storytelling",
  keywords: [
    "stories",
    "storytelling",
    "community",
    "impact",
    "inspiration",
    "changemakers", ]
    ,
  authors: [{ name: "NewStoriesAndTales Team" }],
  creator: "NewStoriesAndTales Team",
  openGraph: {
    title: "NewStoriesAndTales",
    description: "A community platform for impact storytelling",
    url: "https://candidate-00-x-newstories-module-ar.vercel.app/",
    siteName: "NewStoriesAndTales",
    images: [
      {
        url: "https://candidate-00-x-newstories-module-ar.vercel.app/images/opengraphImage.png",
        width: 1200,
        height: 630,
        alt: "NewStoriesAndTales OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NewStoriesAndTales",
    description: "A community platform for impact storytelling",
    creator: "@NewStoriesAndTales",
    images: ["https://candidate-00-x-newstories-module-ar.vercel.app/images/opengraphImage.png"],
  },
  // icons: {
  //   icon: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  //   shortcut: "/favicon-16x16.png",
  //   other: [
  //     {
  //       rel: "mask-icon",
  //       url: "/safari-pinned-tab.svg",
  //       color: "#5bbad5",
  //     },
  //   ],
  // },
  // themeColor: "#ffffff",
  // manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,     
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
      className={`${playfair.variable} ${merriweather.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

