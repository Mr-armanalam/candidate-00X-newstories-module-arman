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

