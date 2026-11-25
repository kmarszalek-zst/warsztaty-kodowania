import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

export default function StudentDetails() {
  return (
    <div className="p-8 sm:p-10">
      <h6 className="text-sm font-bold uppercase tracking-wide text-slate-900">
        O mnie
      </h6>
      <p className="mt-3 leading-7 text-slate-700">
        Jestem uczniem klasy 1 TC w zespole szkół technicznych w Jaśle. Interesuję się programowaniem i nowymi technologiami.Staram się rozwijać swoje umiejętności w dziedzinie tworzenia aplikacji webowych i mobilnych. W wolnym czasie lubię grać w gry komputerowe oraz eksperymentować z różnymi językami programowania.
      </p>
      <p className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-600">
                  <FiMapPin aria-hidden="true" /> Brzostek
                </p>
      <a
        href="https://github.com/jaroszmaciejtc-cyber"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-fit center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-700"
      >
        Mój profil GitHub <FiArrowUpRight aria-hidden="true" />
      </a>
    </div>
  );
}