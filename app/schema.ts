// SEO Schema Markup for TrackMySpend
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TrackMySpend",
  description: "TrackMySpend is a powerful expense tracking and budget management mobile application designed to help you take complete control of your finances.",
  url: "https://trackmyspend.online",
  logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhO3FzMvPTqFW1lJ4Z0A4nXdS6NP_H2bj3DgM4nwAN2PBY4QjTVihO1rmg-KhfqiOKWrM8afQ_2fo7qwc_0Y6Rj0M22Sig_Sc0TjVDsdzv52hKN_LFxYc5WK9M33039cJ8q7p9hBAKsMpDIjLhR0i1c1vsTf8Un-oZNAOlQ_TPzYaU8-Gm4Wjqf0bTYUs0U/s320/Logo.jpg",
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@trackmyspend.online",
    contactType: "Customer Support",
  },
  sameAs: [
    "https://play.google.com/store/apps/details?id=trackmyspend.budgetplanner.expensemanager",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TrackMySpend",
  url: "https://trackmyspend.online",
  description: "TrackMySpend - Your Personal Finance Expense Manager for Smart Money Management. Track expenses, manage budgets, and take control of your finances.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://trackmyspend.online/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TrackMySpend",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "5000",
    bestRating: "5",
    worstRating: "1",
  },
  description: "TrackMySpend is a powerful expense tracking and budget management mobile application. Track expenses, set budgets, and manage your personal finances with ease.",
  screenshot: [
    "https://trackmyspend.online/images/SS1.webp",
    "https://trackmyspend.online/images/SS2.webp",
    "https://trackmyspend.online/images/SS3.webp",
    "https://trackmyspend.online/images/SS4.webp",
    "https://trackmyspend.online/images/SS5.webp",
    "https://trackmyspend.online/images/SS6.webp",
  ],
  downloadUrl: "https://play.google.com/store/apps/details?id=trackmyspend.budgetplanner.expensemanager",
  softwareVersion: "Latest",
  releaseNotes: "TrackMySpend helps you monitor every expense, set budgets that work, and make smarter financial decisions.",
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is TrackMySpend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TrackMySpend is a powerful expense tracking and budget management mobile application designed to help you take complete control of your finances. With intuitive expense tracking, smart budgeting tools, and real-time financial insights, this Expense Manager makes managing your money easier and more effective.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start tracking my expenses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Getting started with TrackMySpend is simple! Download the app from the Google Play Store, create your account, and start adding your expenses. You can categorize your spending, set budgets, and track your progress in real-time. The app's intuitive interface makes it easy to log expenses on the go.",
      },
    },
    {
      "@type": "Question",
      name: "Is my financial data secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, your privacy and security are our top priorities. TrackMySpend uses industry-standard encryption to protect your financial data. We never share your personal information with third parties, and all data is stored securely on your device with optional cloud backup.",
      },
    },
    {
      "@type": "Question",
      name: "Can I set budgets for different categories?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! TrackMySpend allows you to create custom budgets for different spending categories such as groceries, entertainment, transportation, and more. You can set monthly or weekly budgets and receive notifications when you're approaching your limits.",
      },
    },
    {
      "@type": "Question",
      name: "Does TrackMySpend work offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, TrackMySpend works offline! You can add expenses, view your spending history, and check your budgets without an internet connection. Your data will sync automatically when you're back online.",
      },
    },
    {
      "@type": "Question",
      name: "How can I export my expense data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TrackMySpend allows you to export your expense data in various formats including CSV and PDF. You can export data for specific date ranges or categories, making it easy to share with accountants or use in other financial planning tools.",
      },
    },
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://trackmyspend.online",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Privacy Policy",
      item: "https://trackmyspend.online/privacy-policy",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Terms of Service",
      item: "https://trackmyspend.online/terms-of-service",
    },
  ],
};

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "TrackMySpend",
  description: "Expense tracking and budget management mobile application",
  brand: {
    "@type": "Brand",
    name: "TrackMySpend",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "5000",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Sophia L",
      },
      datePublished: "2024-01-01",
      reviewBody: "Within minutes I had my spend organized and alerts tuned. Updates land fast and support actually listens.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Marcus R",
      },
      datePublished: "2024-01-01",
      reviewBody: "The balance between automation and control is perfect. My team finally understands where every dollar flows.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  ],
};

// Product Schema for Merchant Listings
export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "TrackMySpend Expense Manager App",
  description: "TrackMySpend is a powerful expense tracking and budget management mobile application for Android. Track expenses, set budgets, and manage your personal finances with ease.",
  image: [
    "https://trackmyspend.online/images/SS1.webp",
    "https://trackmyspend.online/images/SS2.webp",
    "https://trackmyspend.online/images/SS3.webp",
    "https://trackmyspend.online/images/About.webp",
  ],
  brand: {
    "@type": "Brand",
    name: "TrackMySpend",
  },
  category: "Finance Application",
  offers: {
    "@type": "Offer",
    url: "https://play.google.com/store/apps/details?id=trackmyspend.budgetplanner.expensemanager",
    priceCurrency: "USD",
    price: "0",
    priceValidUntil: "2025-12-31",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "TrackMySpend",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "5000",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Sophia L",
      },
      datePublished: "2024-01-15",
      reviewBody: "Within minutes I had my spend organized and alerts tuned. Updates land fast and support actually listens.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Marcus R",
      },
      datePublished: "2024-01-20",
      reviewBody: "The balance between automation and control is perfect. My team finally understands where every dollar flows.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "David K",
      },
      datePublished: "2024-02-01",
      reviewBody: "Best expense tracking app I've used! The interface is clean, features are powerful, and it actually helps me save money.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Emma W",
      },
      datePublished: "2024-02-10",
      reviewBody: "TrackMySpend has completely transformed how I manage my finances. The budget alerts keep me on track every month.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  ],
};

// LocalBusiness Schema (if applicable)
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TrackMySpend",
  description: "TrackMySpend - Expense Manager App for Android",
  url: "https://trackmyspend.online",
  telephone: "+1-978-777-9241",
  email: "support@trackmyspend.online",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
};

// Combined schema for easy import
export const allSchemas = [
  organizationSchema,
  websiteSchema,
  softwareApplicationSchema,
  productSchema,
  faqSchema,
  breadcrumbSchema,
  reviewSchema,
];

