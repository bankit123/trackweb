"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const assets = {
  logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhO3FzMvPTqFW1lJ4Z0A4nXdS6NP_H2bj3DgM4nwAN2PBY4QjTVihO1rmg-KhfqiOKWrM8afQ_2fo7qwc_0Y6Rj0M22Sig_Sc0TjVDsdzv52hKN_LFxYc5WK9M33039cJ8q7p9hBAKsMpDIjLhR0i1c1vsTf8Un-oZNAOlQ_TPzYaU8-Gm4Wjqf0bTYUs0U/s320/Logo.jpg",
  hero:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYU8pETkVKueZJjan5WQYVQFqm140g6w4eyUaQ5xpwvk5CdKO8AShNA1mPIqU0cVv_ayBitvRpfKrK5wKBWam1w_xY-YmYOBoZaj8IWa4FWN2NHDdD1lJR4qH1exBc50M1GXihK4jxOC_k_ZOyukaQ9NDq0PH_AWyOxsxfM1SeJJDJjJaxxuw9Clgc7CbQ/s16000/heroimg.png",
  screen:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6eg5kTJNS3rgTRnDk0jPS3XnfPqNgJzMWofqKaEAQVEQos996A_KA9gNZbwAThxbxvktYbKpB7A5B8oXahVfO6HWWx1VvScknyuNqgiL8AEnNBU1PUPzRAevtBw2iS7Mc8B1Lh6GK7gY7Q_h99vyuCg-zbXWnBTjF1Xc-Os8XqtvszqhoRf5EzRxQ1GHq/s16000/Group%201000003243.png",
};

const reasons = [
  {
    title: "Cutting-edge tech",
    detail:
      "Built with modern tooling, real-time sync, and cloud redundancy for reliability.",
  },
  {
    title: "Always-on support",
    detail:
      "Guides, live chat, and a dedicated team to keep you moving anytime, anywhere.",
  },
  {
    title: "Works with your stack",
    detail:
      "Connect banks, cards, exports, and integrations so all your spend lives together.",
  },
  {
    title: "Smart budget planning",
    detail:
      "Create custom budgets for different categories and get alerts when you're approaching limits.",
  },
  {
    title: "Secure & private",
    detail:
      "Bank-grade encryption and privacy-first approach to keep your financial data safe and secure.",
  },
  {
    title: "Offline functionality",
    detail:
      "Track expenses and manage budgets even without internet connection, with automatic sync when online.",
  },
];

const testimonials = [
  {
    quote:
      "Within minutes I had my spend organized and alerts tuned. Updates land fast and support actually listens.",
    name: "Sophia L",
    role: "Digital Marketer",
  },
  {
    quote:
      "The balance between automation and control is perfect. My team finally understands where every dollar flows.",
    name: "Marcus R",
    role: "Ops Lead",
  },
  {
    quote:
      "Best expense tracking app I've used! The interface is clean, features are powerful, and it actually helps me save money.",
    name: "David K",
    role: "Freelancer",
  },
  {
    quote:
      "TrackMySpend has completely transformed how I manage my finances. The budget alerts keep me on track every month.",
    name: "Emma W",
    role: "Student",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const [isContactLoading, setIsContactLoading] = useState(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail("");
      setIsLoading(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    setIsContactLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsContactSubmitted(true);
      setContactForm({ name: "", email: "", message: "" });
      setIsContactLoading(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsContactSubmitted(false);
      }, 5000);
    }, 1000);
  };

  // Carousel images - exclude BR.webp files
  const carouselImages = [
    { src: "/images/SS1.webp", alt: "TrackMySpend Expense Tracking App Screenshot - Dashboard and Budget Overview" },
    { src: "/images/SS2.webp", alt: "TrackMySpend App Screenshot - Expense Categories and Spending Analysis" },
    { src: "/images/SS3.webp", alt: "TrackMySpend Personal Finance App - Transaction History and Expense Tracking" },
    { src: "/images/SS4.webp", alt: "TrackMySpend Budget Management App - Monthly Budget Planning and Reports" },
    { src: "/images/SS5.webp", alt: "TrackMySpend Expense Tracker - Financial Insights and Spending Trends" },
    { src: "/images/SS6.webp", alt: "TrackMySpend Money Management App - Settings and Customization Features" },
  ];

  // Create infinite loop by duplicating images multiple times for seamless scrolling
  const infiniteImages = [
    ...carouselImages, // First set
    ...carouselImages, // Second set (for seamless loop)
    ...carouselImages, // Third set (for seamless loop)
    ...carouselImages, // Fourth set (buffer)
  ];

  // Detect mobile/desktop
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-play carousel - continuous scroll, no jumps
  useEffect(() => {
    // Initialize to start of second set for seamless looping
    setCurrentSlide(carouselImages.length);
  }, [carouselImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        let nextSlide = prev + 1;
        
        // Continuous scroll: when we reach the end, continue to first image seamlessly
        // Reset happens when showing the same images from duplicated set
        if (isMobile) {
          // Mobile: after showing all 6 images, continue to first (seamless reset)
          if (nextSlide >= carouselImages.length * 2) {
            // Reset to start of second set (will show SS1 next)
            nextSlide = carouselImages.length;
          }
        } else {
          // Desktop: Infinite loop - reset when showing identical images
          // Position 6:  [SS1][SS2][SS3] (2nd set)
          // Position 7:  [SS2][SS3][SS4]
          // Position 8:  [SS3][SS4][SS5]
          // Position 9:  [SS4][SS5][SS6]
          // Position 10: [SS5][SS6][SS1]
          // Position 11: [SS6][SS1][SS2]
          // Position 12: [SS1][SS2][SS3] (3rd set - identical to position 6!)
          // Reset at position 12 to position 6 - invisible because images are identical
          const resetPoint = carouselImages.length * 2; // Position 12 (showing [SS1][SS2][SS3])
          if (nextSlide >= resetPoint) {
            // Reset to position 6 (showing [SS1][SS2][SS3] - identical visual, no jump!)
            nextSlide = carouselImages.length;
          }
        }
        
        return nextSlide;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isMobile, carouselImages.length]);

  return (
    <main className="min-h-screen bg-hero-gradient text-slate-900">
      <Navbar />
      <header className="relative overflow-hidden pb-12 md:pb-16">

        <div className="section-shell mt-10 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex-1">
            <span className="accent-pill">Track Your Money, Master Your Future</span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-5xl">
              Take control of your finances with smart <span className="text-brand-700">Expense Manager</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600 md:text-xl">
              TrackMySpend helps you monitor every expense, set budgets that work, and make smarter financial decisions. Join thousands of users who are taking control of their money today.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center rounded-full p-2 gap-2">
                <p className="text-sm font-medium text-slate-600">Available on</p>
                <a
                  href="https://play.google.com/store/apps/details?id=trackmyspend.budgetplanner.expensemanager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Image
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcEodm368HNvTfg9m6RG8_yjYDnGggZ4Aeobh1It8-R5YO4yO9NCG53JVpprfSAq9U5h11ZPIJL2DEP3LNhfgV3Apf0JsnN1wYh9fm273AQ0HeRcvdJ3QxoH-HGtCvOfvLYIrDl1fLJFG6i-VEhLyihemctE0w3ewYmZ6mo7hnX_FAZvloE2qTcVUxK6oC/s320/Google_Play_Store_badge_EN.svg.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={54}
                    className="h-8 w-auto"
                    priority
                  />
                </a>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=trackmyspend.budgetplanner.expensemanager"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-95 w-fit"
              >
                Download App
              </a>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={assets.hero}
                alt="TrackMySpend - Personal Finance and Expense Tracking App for Android"
                width={1200}
                height={700}
                className="mx-auto w-full max-h-[80vh] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* What is TrackMySpend Section */}
      <section className="section-shell py-16 md:py-20">
        <div className="glass-card rounded-3xl p-8">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="flex-1">
              <span className="accent-pill">What is TrackMySpend</span>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                Your Personal Finance <span className="text-brand-700">Expense Manager</span> for Smart Money Management
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                TrackMySpend is a powerful expense tracking and budget management app that helps you take complete control of your finances. With intuitive expense tracking, smart budgeting tools, and real-time insights, this Expense Manager makes managing your money easier and more effective.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  
                  <div className="text-3xl font-semibold text-slate-900">
                    4.8<span className="text-lg text-slate-500">/5</span>
                  </div>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                    User rating
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  
                  <div className="text-3xl font-semibold text-slate-900">
                    5k<span className="text-lg text-slate-500">+</span>
                  </div>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                    Total downloads
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex-1">
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/About.webp"
                  alt="TrackMySpend Expense Tracking App - Budget Management and Personal Finance Features"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="section-shell py-16 md:py-20">
        <div className="mb-10">
          <span className="accent-pill">Why Choose TrackMySpend</span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            Your Reliable <span className="text-brand-700">Expense Manager</span> for Seamless Financial Control
          </h2>
          <p className="mt-3 text-lg text-slate-600 max-w-3xl">
            Discover why thousands of users trust TrackMySpend for their personal finance and expense tracking needs. Our Expense Manager app combines cutting-edge technology with user-friendly design to deliver the best expense management experience.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="glass-card rounded-2xl p-6 transition hover:-translate-y-1 hover:border-brand-200"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {reason.title}
              </h3>
              <p className="mt-3 text-slate-600">{reason.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="section-shell py-16 md:py-20">
        <div className="mb-10">
          <span className="accent-pill">App Screenshots & Features</span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
          Explore TrackMySpend <span className="text-brand-700">Expense Manager</span> App Features
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Explore the powerful features and intuitive interface of our expense tracking and budget management app through these screenshots from the Google Play Store. See how TrackMySpend makes personal finance management simple and effective.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-2 overflow-hidden">
          <div className="relative overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (isMobile ? 100 : 33.333)}%)`,
              }}
            >
              {infiniteImages.map((image, index) => (
                <a
                  key={index}
                  href="https://play.google.com/store/apps/details?id=trackmyspend.budgetplanner.expensemanager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden cursor-pointer flex-shrink-0"
                  style={{
                    width: isMobile ? "100%" : "33.333%",
                  }}
                >
                  <div className="relative aspect-[9/16] w-full overflow-hidden bg-slate-50">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="section-shell py-16 md:py-20"
      >
        <div className="mb-10">
          <span className="accent-pill">User Testimonials & Reviews</span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            Real Stories, Real Results from Our <span className="text-brand-700">Expense Manager</span> Users
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Discover why thousands of users trust TrackMySpend Expense Manager for their expense tracking and budget management needs. Read authentic reviews and testimonials from people who have transformed their financial habits with our app.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="glass-card rounded-3xl border-slate-200 bg-white p-6"
            >
              <p className="text-lg text-slate-800">"{item.quote}"</p>
              <div className="mt-4 text-sm font-semibold text-slate-900">
                {item.name}
                <span className="ml-2 text-slate-500">• {item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-shell py-16 md:py-20">
        <div className="glass-card rounded-3xl px-6 py-10 md:px-12 md:py-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex-1 max-w-xl">
              <span className="accent-pill">Newsletter & Financial Tips</span>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                Get Smarter with <span className="text-brand-700">Expense Manager</span> Tips, Every Week
              </h2>
              <p className="mt-3 text-slate-600">
                Join our newsletter for budgeting tips, feature updates, and practical insights to help you spend better.
              </p>
            </div>

            <div className="flex-1 max-w-md">
              {isSubmitted ? (
                <div className="rounded-2xl bg-green-50 border border-green-200 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-green-900">
                        Successfully subscribed!
                      </p>
                      <p className="text-sm text-green-700">
                        Thank you for joining our newsletter.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email address"
                      className="flex-1 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {isLoading ? "Subscribing..." : "Subscribe"}
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 px-1">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-shell py-16 md:py-20">
        <div className="mb-10">
          <span className="accent-pill">Frequently Asked Questions</span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            Common Questions About <span className="text-brand-700">TrackMySpend</span> App
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Find comprehensive answers to common questions about TrackMySpend, our expense tracking app, budget management features, and how it can help you take control of your personal finances and achieve your financial goals.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              question: "What is TrackMySpend?",
              answer: "TrackMySpend is a powerful mobile application designed to help you take control of your finances. With intuitive expense tracking, smart budgeting tools, and real-time insights, managing your money has never been easier. Whether you're tracking daily expenses, setting monthly budgets, or analyzing spending patterns, TrackMySpend provides the clarity and control you need to make smarter financial decisions."
            },
            {
              question: "How do I start tracking my expenses?",
              answer: "Getting started with TrackMySpend is simple! Download the app from the Google Play Store, create your account, and start adding your expenses. You can categorize your spending, set budgets, and track your progress in real-time. The app's intuitive interface makes it easy to log expenses on the go."
            },
            {
              question: "Is my financial data secure?",
              answer: "Yes, your privacy and security are our top priorities. TrackMySpend uses industry-standard encryption to protect your financial data. We never share your personal information with third parties, and all data is stored securely on your device with optional cloud backup."
            },
            {
              question: "Can I set budgets for different categories?",
              answer: "Absolutely! TrackMySpend allows you to create custom budgets for different spending categories such as groceries, entertainment, transportation, and more. You can set monthly or weekly budgets and receive notifications when you're approaching your limits."
            },
            {
              question: "Does TrackMySpend work offline?",
              answer: "Yes, TrackMySpend works offline! You can add expenses, view your spending history, and check your budgets without an internet connection. Your data will sync automatically when you're back online."
            },
            {
              question: "How can I export my expense data?",
              answer: "TrackMySpend allows you to export your expense data in various formats including CSV and PDF. You can export data for specific date ranges or categories, making it easy to share with accountants or use in other financial planning tools."
            }
          ].map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`h-5 w-5 text-slate-500 flex-shrink-0 transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-5">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="section-shell py-16 md:py-20">
        <div className="mb-10">
          <span className="accent-pill">Contact & Support</span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            Get in Touch with <span className="text-brand-700">TrackMySpend</span> Support Team
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Have questions about our expense tracking app, need help with budget management features, or want to share feedback? We'd love to hear from you. Send us a message and our support team will respond as soon as possible.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Send us a message
            </h3>
            {isContactSubmitted ? (
              <div className="rounded-2xl bg-green-50 border border-green-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-green-900">
                      Message sent successfully!
                    </p>
                    <p className="text-sm text-green-700">
                      Thank you for contacting us. We'll get back to you shortly.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                    placeholder="Your name"
                    className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                    placeholder="your.email@example.com"
                    className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isContactLoading}
                  className="w-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isContactLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50">
                  <svg className="h-6 w-6 text-brand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Email Support
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Reach out via email for any inquiries or support needs.
                  </p>
                  <p className="text-brand-700 font-medium mt-2 text-sm">
                    support@trackmyspend.online
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50">
                  <svg className="h-6 w-6 text-brand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Response Time
                  </h3>
                  <p className="text-slate-600 text-sm">
                    We typically respond within 24-48 hours during business days.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50">
                  <svg className="h-6 w-6 text-brand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Help Center
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Check out our app's help section for quick answers to common questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


