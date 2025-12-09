"use client";

const highlights = [
  { label: "App Rating", value: "4.8", suffix: "/5" },
  { label: "Total downloads", value: "1.5m+", suffix: "" },
  { label: "Avg. response", value: "24/7", suffix: " support" },
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
    <main className="min-h-screen bg-hero-gradient text-slate-100">
      <header className="section-shell relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_40%_10%,rgba(63,99,241,0.25),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_25%)]" />
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
          <div className="flex-1">
            <span className="accent-pill">Smart. Simple. Seamless.</span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Experience the future of spending clarity in your hands
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300 md:text-xl">
              TrackMySpend is crafted for comfort, speed, and seamless
              connectivity. Monitor expenses, stay on budget, and act faster
              with live insights.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:translate-y-[-2px]">
                Download the app
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40">
                Need help? Tap support
              </button>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-2xl px-4 py-5"
                >
                  <div className="text-3xl font-semibold text-white">
                    {item.value}
                    <span className="text-lg text-slate-300">
                      {" "}
                      {item.suffix}
                    </span>
                  </div>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex-1">
            <div className="glass-card relative overflow-hidden rounded-3xl border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 shadow-soft">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(94,129,255,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_25%)]" />
              <div className="relative space-y-4 rounded-2xl border border-white/10 bg-slate-900/80 p-6">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Monthly overview</span>
                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-300">
                    +8.2%
                  </span>
                </div>
                <div className="h-48 rounded-xl bg-[linear-gradient(120deg,rgba(63,99,241,0.35),rgba(14,165,233,0.3))] shadow-inner" />
                <div className="grid grid-cols-2 gap-3">
                  {["Budgets", "Alerts", "Reports", "Insights"].map((chip) => (
                    <div
                      key={chip}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90"
                    >
                      {chip}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-300">
                  Built for seamless connectivity and comfort—perfect for daily
                  check-ins or deep dives on demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section-shell grid items-center gap-10 rounded-[32px] border border-white/10 bg-white/5 px-6 py-12 shadow-soft md:grid-cols-2 md:px-10">
        <div className="space-y-4">
          <span className="accent-pill">About the app</span>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Simplifying money through smart app innovations
          </h2>
          <p className="text-lg text-slate-300">
            We make money management effortless. TrackMySpend blends intuitive
            design with powerful automation so you can focus on decisions—not
            spreadsheets.
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-200">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
              >
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <div className="rounded-full bg-green-500/10 px-4 py-2 text-green-200">
              Cutting-edge technology
            </div>
            <div className="rounded-full bg-blue-500/10 px-4 py-2 text-blue-200">
              24/7 support
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-10 blur-3xl" />
          <div className="glass-card h-full rounded-3xl p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Trusted by thousands</p>
                <p className="text-3xl font-bold text-white">2500+</p>
              </div>
              <div className="rounded-full bg-brand-500/20 px-4 py-2 text-sm text-brand-100">
                99.9% uptime
              </div>
            </div>
            <div className="space-y-4 text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Smart notifications keep you ahead with personalized alerts and
                reminders.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Customizable settings adapt to your preferences and spending
                style.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                API and integration support so reports land where your team
                works.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="accent-pill">Why choose us</span>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Your reliable partner for seamless spend experiences
            </h2>
          </div>
          <button className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40">
            Start your journey
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="glass-card rounded-2xl p-6 transition hover:-translate-y-1 hover:border-white/30"
            >
              <h3 className="text-xl font-semibold text-white">
                {reason.title}
              </h3>
              <p className="mt-3 text-slate-300">{reason.detail}</p>
              <div className="mt-4 inline-flex rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-100">
                View details
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="mb-6 flex items-center gap-3">
          <span className="accent-pill">Testimonials</span>
          <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
            4.9/5 • 4200+ reviews
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          <div className="glass-card flex-1 rounded-3xl p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-brand-100">
              Hear what our users say
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-white">
              Real stories. Real results.
            </h3>
            <p className="mt-3 text-slate-300">
              Discover why thousands trust TrackMySpend to keep spending simple,
              transparent, and actionable.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[
                { label: "User rating", value: "4.8" },
                { label: "Installs", value: "1.5m" },
                { label: "Countries", value: "40+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <div className="text-2xl font-semibold text-white">
                    {stat.value}
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
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
                className="glass-card rounded-3xl border-white/10 bg-white/5 p-6"
              >
                <p className="text-lg text-slate-100">“{item.quote}”</p>
                <div className="mt-4 text-sm font-semibold text-white">
                  {item.name}
                  <span className="ml-2 text-slate-400">• {item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-12 bg-[#0a0f1d] py-12">
        <div className="section-shell grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <div className="text-xl font-semibold text-white">TrackMySpend</div>
            <p className="text-slate-400">
              Empowering your financial journey with user-friendly tools that
              make everyday spending smarter and simpler.
            </p>
            <div className="text-sm text-slate-500">
              Copyright © {new Date().getFullYear()} All Rights Reserved.
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-slate-400">
              {footerLinks.quick.map((link) => (
                <li key={link} className="hover:text-white">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="mt-3 space-y-2 text-slate-400">
              {footerLinks.support.map((link) => (
                <li key={link} className="hover:text-white">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section-shell mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500">
          <div className="space-x-4">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
            <span>LinkedIn</span>
          </div>
          <div className="space-y-1 text-right">
            <p>123 Innovation Street, Tech, USA</p>
            <p>+1 (123) 456-789</p>
            <p>info@trackmyspend.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}


