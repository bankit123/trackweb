import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-hero-gradient text-slate-900">
      <Navbar />
      <div className="flex min-h-[80vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-brand-700">404</h1>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            Page Not Found
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-md mx-auto">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-95"
            >
              Go Back Home
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=trackmyspend.budgetplanner.expensemanager"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-200 hover:bg-slate-50"
            >
              Download App
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

