import { FiArrowUpRight } from "react-icons/fi";

export default function StudentDetails() {
  return (
    <section className="border-t border-slate-200 px-7 py-7 sm:px-10 sm:py-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">
        Kilka słów o mnie
      </p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
        Lubię tworzyć i poznawać nowe rzeczy.
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
        Interesuję się programowaniem i technologiami informatycznymi. Lubię tworzyć
        projekty związane z kodowaniem i rozwijać swoje umiejętności. Chcę zdobywać
        wiedzę, która pomoże mi realizować ciekawe pomysły.
      </p>
      <a
        href="https://github.com/mroczkaalextc-code"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
      >
        Mój profil GitHub <FiArrowUpRight aria-hidden="true" />
      </a>
    </section>
  );
}