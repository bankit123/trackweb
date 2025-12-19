import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-12 bg-slate-50 py-12">
      <div className="section-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <div className="text-2xl font-semibold text-slate-900">TrackMySpend</div>
            <p className="text-slate-600 max-w-md">
            TrackMySpend helps you monitor every expense, set budgets that work, and make smarter financial decisions.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span>© {new Date().getFullYear()} TrackMySpend</span>
              <span className="hidden h-4 w-px bg-slate-300 md:inline-block" />
              <a
                href="/privacy-policy"
                className="text-brand-700 hover:text-brand-800 transition"
              >
                Privacy Policy
              </a>
              <span className="hidden h-4 w-px bg-slate-300 md:inline-block" />
              <a
                href="/terms-of-service"
                className="text-brand-700 hover:text-brand-800 transition"
              >
                Terms of Service
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
              Stay in sync
            </div>
            <p className="max-w-xs text-sm text-slate-600 text-left md:text-right">
            Join thousands of users who are taking control of their money. Download the app now!
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
      </div>
    </footer>
  );
}

