import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function ProfileLayout({ children }) {
  return (
    <main className="min-h-screen bg-stone-50 px-5 py-8 text-slate-900 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#ekipa"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold transition hover:border-slate-400"
        >
          <FiArrowLeft aria-hidden="true" /> Powrót do ekipy
        </Link>
        {children}
      </div>
    </main>
  );
}
