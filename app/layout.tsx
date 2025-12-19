import "./globals.css";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import { allSchemas } from "./schema";
import integrations from "./config/integrations";
import Script from "next/script";

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
  title: "TrackMySpend | Expense Manager - Smart Expense Tracking & Budget Management App",
  description:
    "TrackMySpend is a powerful expense tracking and budget management mobile application. Track expenses, set budgets, and take control of your personal finances with our Expense Manager app. Download now for Android.",
  keywords: [
    "expense tracker",
    "expense manager",
    "budget management",
    "personal finance",
    "money management",
    "expense tracking app",
    "budget planner",
    "financial management",
    "track expenses",
    "expense app",
  ],
  authors: [{ name: "TrackMySpend" }],
  creator: "TrackMySpend",
  publisher: "TrackMySpend",
  openGraph: {
    title: "TrackMySpend | Expense Manager - Smart Expense Tracking App",
    description: "TrackMySpend helps you monitor spending, stay on budget, and make smarter money moves with ease. Download the best expense tracking app for Android.",
    url: "https://trackmyspend.online",
    siteName: "TrackMySpend",
    images: [
      {
        url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhO3FzMvPTqFW1lJ4Z0A4nXdS6NP_H2bj3DgM4nwAN2PBY4QjTVihO1rmg-KhfqiOKWrM8afQ_2fo7qwc_0Y6Rj0M22Sig_Sc0TjVDsdzv52hKN_LFxYc5WK9M33039cJ8q7p9hBAKsMpDIjLhR0i1c1vsTf8Un-oZNAOlQ_TPzYaU8-Gm4Wjqf0bTYUs0U/s320/Logo.jpg",
        width: 320,
        height: 320,
        alt: "TrackMySpend Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrackMySpend | Expense Manager - Smart Expense Tracking App",
    description: "Track expenses, manage budgets, and take control of your finances with TrackMySpend Expense Manager.",
    images: ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhO3FzMvPTqFW1lJ4Z0A4nXdS6NP_H2bj3DgM4nwAN2PBY4QjTVihO1rmg-KhfqiOKWrM8afQ_2fo7qwc_0Y6Rj0M22Sig_Sc0TjVDsdzv52hKN_LFxYc5WK9M33039cJ8q7p9hBAKsMpDIjLhR0i1c1vsTf8Un-oZNAOlQ_TPzYaU8-Gm4Wjqf0bTYUs0U/s320/Logo.jpg"],
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
  alternates: {
    canonical: "https://trackmyspend.online",
  },
  category: "Finance",
  classification: "Expense Tracking App",
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
      <body className="bg-white text-slate-900 antialiased">
        {/* Google Tag Manager */}
        {integrations.GTM_ID && integrations.GTM_ID !== "TRACK-MY-SPEND" && (
          <>
            <Script
              id="google-tag-manager"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${integrations.GTM_ID}');
                `,
              }}
            />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${integrations.GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}

        {/* Google Analytics */}
        {integrations.GA_MEASUREMENT_ID && integrations.GA_MEASUREMENT_ID !== "TRACK-MY-SPEND" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${integrations.GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${integrations.GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Microsoft Clarity */}
        {integrations.CLARITY_PROJECT_ID && integrations.CLARITY_PROJECT_ID !== "TRACK-MY-SPEND" && (
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${integrations.CLARITY_PROJECT_ID}");
              `,
            }}
          />
        )}

        {/* SEO Schema Markup */}
        {allSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}


