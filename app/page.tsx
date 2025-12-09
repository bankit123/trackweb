"use client";

import Image from "next/image";

const assets = {
  logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhO3FzMvPTqFW1lJ4Z0A4nXdS6NP_H2bj3DgM4nwAN2PBY4QjTVihO1rmg-KhfqiOKWrM8afQ_2fo7qwc_0Y6Rj0M22Sig_Sc0TjVDsdzv52hKN_LFxYc5WK9M33039cJ8q7p9hBAKsMpDIjLhR0i1c1vsTf8Un-oZNAOlQ_TPzYaU8-Gm4Wjqf0bTYUs0U/s320/Logo.jpg",
  hero:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYU8pETkVKueZJjan5WQYVQFqm140g6w4eyUaQ5xpwvk5CdKO8AShNA1mPIqU0cVv_ayBitvRpfKrK5wKBWam1w_xY-YmYOBoZaj8IWa4FWN2NHDdD1lJR4qH1exBc50M1GXihK4jxOC_k_ZOyukaQ9NDq0PH_AWyOxsxfM1SeJJDJjJaxxuw9Clgc7CbQ/s16000/heroimg.png",
  screen:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6eg5kTJNS3rgTRnDk0jPS3XnfPqNgJzMWofqKaEAQVEQos996A_KA9gNZbwAThxbxvktYbKpB7A5B8oXahVfO6HWWx1VvScknyuNqgiL8AEnNBU1PUPzRAevtBw2iS7Mc8B1Lh6GK7gY7Q_h99vyuCg-zbXWnBTjF1Xc-Os8XqtvszqhoRf5EzRxQ1GHq/s16000/Group%201000003243.png",
};

const highlights = [
  { label: "User rating", value: "4.8", suffix: "/5" },
  { label: "Total downloads", value: "5k+", suffix: "" },
];

const pillars = [
  {
    title: "Smart spending clarity",
    body: "AI-assisted insights spotlight where your money goes and how to optimize it.",
  },
  {
    title: "Customizable controls",
    body: "Tailor categories, alerts, and limits so TrackMySpend matches your lifestyle.",
  },
  {
    title: "Secure by design",
    body: "Bank-grade encryption, biometric sign-ins, and privacy-first data handling.",
  },
];

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
];

const footerLinks = {
  quick: ["Home", "About", "Features", "Latest blog", "Contact us"],
  support: [
    "Help Center",
    "FAQs",
    "Terms & Conditions",
    "Privacy Policy",
    "Refund Policy",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-hero-gradient text-slate-900">
      <header className="relative overflow-hidden pb-12 md:pb-16">
        <div className="w-full border border-white/60 bg-white/70 px-4 md:px-8 py-3 shadow-soft backdrop-blur-xl">
          <div className="flex w-full items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-slate-200 bg-white">
                <Image
                  src={assets.logo}
                  alt="TrackMySpend logo"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="text-xl font-semibold text-slate-900">
                TrackMySpend
              </div>
            </div>
            <div className="hidden items-center gap-3 sm:flex">
              <nav className="flex items-center gap-4 text-sm font-medium text-slate-600">
                <a href="#why" className="hover:text-brand-700">
                  Why us
                </a>
                <a href="#testimonials" className="hover:text-brand-700">
                  Testimonials
                </a>
                <a href="#contact" className="hover:text-brand-700">
                  Contact
                </a>
              </nav>
              <a
                href="https://play.google.com/store/apps/details?id=trackmyspend.budgetplanner.expensemanager"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-soft"
              >
                Download
              </a>
            </div>
          </div>
        </div>

        <div className="section-shell mt-10 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex-1">
            <span className="accent-pill">Smart. Simple. Seamless.</span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Experience the future of spending clarity in your hands
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600 md:text-xl">
              TrackMySpend is crafted for comfort, speed, and seamless
              connectivity. Monitor expenses, stay on budget, and act faster
              with live insights.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
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
                  className="h-14 w-auto"
                  priority
                />
              </a>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-2xl px-4 py-5 border-b border-slate-200 pb-2"
                >
                  <div className="text-3xl font-semibold text-slate-900 ">
                    {item.value}
                    <span className="text-lg text-slate-500">
                      {" "}
                      {item.suffix}
                    </span>
                  </div>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex-1">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={assets.hero}
                alt="TrackMySpend hero"
                width={1200}
                height={700}
                className="mx-auto w-full max-h-[100vh] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      <section id="why" className="section-shell py-16 md:py-20">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="accent-pill">Why choose us</span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              Your reliable partner for seamless spend experiences
            </h2>
          </div>
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:border-brand-200 hover:text-brand-800">
            Start your journey
          </button>
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
              <div className="mt-4 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
                View details
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="testimonials"
        className="section-shell py-16 md:py-20"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="accent-pill">Testimonials</span>
          <div className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            4.9/5 • 4200+ reviews
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          <div className="glass-card flex-1 rounded-3xl p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-brand-700">
              Hear what our users say
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-slate-900">
              Real stories. Real results.
            </h3>
            <p className="mt-3 text-slate-600">
              Discover why thousands trust TrackMySpend to keep spending simple,
              transparent, and actionable.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[
                { label: "User rating", value: "4.8" },
                { label: "Installs", value: "5000+" },
                { label: "Countries", value: "40+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <div className="text-2xl font-semibold text-slate-900">
                    {stat.value}
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-6">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="glass-card rounded-3xl border-slate-200 bg-white p-6"
              >
                <p className="text-lg text-slate-800">“{item.quote}”</p>
                <div className="mt-4 text-sm font-semibold text-slate-900">
                  {item.name}
                  <span className="ml-2 text-slate-500">• {item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="mt-12 bg-slate-50 py-12">
        <div className="section-shell flex flex-col gap-6 text-slate-700 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <div className="text-2xl font-semibold text-slate-900">TrackMySpend</div>
            <p>
              Smarter spending, clearer insights, and effortless control—all in one app.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <span>© {new Date().getFullYear()} TrackMySpend</span>
              <span className="hidden h-4 w-px bg-slate-300 md:inline-block" />
              <a
                className="text-brand-700 hover:text-brand-800"
                href="mailto:info@trackmyspend.com"
              >
                info@trackmyspend.com
              </a>
              <span className="hidden h-4 w-px bg-slate-300 md:inline-block" />
              <span>+1 (123) 456-789</span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
              Stay in sync
            </div>
            <p className="max-w-xs text-sm text-slate-600 text-left md:text-right">
              Get product updates and budgeting tips—no spam, just what helps you spend smarter.
            </p>
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
                className="h-12 w-auto"
                priority
              />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}


