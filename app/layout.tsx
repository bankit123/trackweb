import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
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
    <html lang="en" className={poppins.variable}>
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}


