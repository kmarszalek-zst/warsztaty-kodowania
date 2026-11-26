import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function ProfileLayout({ children }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-50 px-5 py-8 text-slate-900 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#ekipa"
          className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-emerald-700 hover:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          <FiArrowLeft aria-hidden="true" /> Powrót do ekipy
        </Link>
        {children}
      </div>
    </main>
  );
}