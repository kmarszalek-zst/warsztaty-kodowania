import { FiArrowUpRight } from "react-icons/fi";

export default function StudentDetails() {
  return (
    <div className="p-8 sm:p-10">
      <h2 className="text-sm font-bold uppercase tracking-wide text-violet-700">
        O mnie
      </h2>
      <p className="mt-3 leading-7 text-slate-600">
        Cześć! Nazywam się Alex Mroczka i jestem uczniem klasy 1Tc. Interesuję się programowaniem i technologiami informatycznymi. W wolnym czasie lubię tworzyć projekty zwiazane z kodowaniem oraz rozwijać swoje umiejętności w dziedzinie IT. Moim celem jest zdobycie wiedzy i doświadczenia, które pozwolą mi w przyszłości realizować ciekawe projekty i rozwijać się zawodowo w branży technologicznej.
      </p>
      <a
        href="https://github.com/mroczkaalextc-code"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-700"
      >
        Mój profil GitHub <FiArrowUpRight aria-hidden="true" />
      </a>
    </div>
  );
}
