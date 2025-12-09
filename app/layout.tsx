import "./globals.css";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrackMySpend | Smart. Simple. Seamless.",
  description:
    "TrackMySpend helps you monitor spending, stay on budget, and make smarter money moves with ease.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.className} ${playfair.variable}`}
    >
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}


