import Image from "next/image";

const logoUrl = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhO3FzMvPTqFW1lJ4Z0A4nXdS6NP_H2bj3DgM4nwAN2PBY4QjTVihO1rmg-KhfqiOKWrM8afQ_2fo7qwc_0Y6Rj0M22Sig_Sc0TjVDsdzv52hKN_LFxYc5WK9M33039cJ8q7p9hBAKsMpDIjLhR0i1c1vsTf8Un-oZNAOlQ_TPzYaU8-Gm4Wjqf0bTYUs0U/s320/Logo.jpg";

export default function Navbar() {
  return (
    <header className="w-full border border-white/60 bg-white/70 px-4 md:px-8 py-3 shadow-soft backdrop-blur-xl">
      <div className="flex w-full items-center justify-between gap-4 max-w-7xl mx-auto">
        <a href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full border border-slate-200 bg-white">
            <Image
              src={logoUrl}
              alt="TrackMySpend logo"
              width={80}
              height={80}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="text-xl font-semibold text-slate-900">
            TrackMySpend - Expense Manager
          </div>
        </a>
        <div className="hidden items-center gap-3 sm:flex">
          <nav className="flex items-center gap-4 text-sm font-medium text-slate-600">
            <a href="/#why" className="hover:text-brand-700 transition">
              Why us
            </a>
            <a href="/#testimonials" className="hover:text-brand-700 transition">
              Testimonials
            </a>
            <a href="/#contact" className="hover:text-brand-700 transition">
              Contact Us
            </a>
          </nav>
          <a
            href="https://play.google.com/store/apps/details?id=trackmyspend.budgetplanner.expensemanager"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:opacity-95"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
}

