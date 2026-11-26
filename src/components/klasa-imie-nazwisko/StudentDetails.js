import { FiArrowUpRight } from "react-icons/fi";

export default function StudentDetails() {
  return (
    <div className="p-8 sm:p-10">
      <h2 className="text-sm font-bold uppercase tracking-wide text-violet-700">
        O mnie
      </h2>
      <p className="mt-3 leading-7 text-slate-600">
        [Tutaj wpisz kilka zdań o sobie.]
      </p>
      <a
        href="https://github.com/twoj-login"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-700"
      >
        Mój profil GitHub <FiArrowUpRight aria-hidden="true" />
      </a>
    </div>
  );
}
