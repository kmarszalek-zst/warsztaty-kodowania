import { FiArrowUpRight, FiCode, FiMusic } from "react-icons/fi";

export default function StudentDetails() {
  return (
    <div className="p-8 sm:p-10">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-10">
        <section>
          <p className="text-sm font-bold uppercase tracking-wider text-violet-800">
            Kilka słów o mnie
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
            Lubię odkrywać, jak działają nowe rzeczy.
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Interesuję się informatyką, programowaniem i nowymi technologiami.
            Lubię podejmować nowe wyzwania i rozwijać swoje umiejętności —
            warsztaty kodowania to świetne miejsce, żeby próbować i tworzyć.
          </p>
        </section>

        <aside className="rounded-2xl border border-violet-100 bg-violet-50/70 p-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-violet-900">
            Po godzinach
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
              <span className="rounded-lg bg-violet-100 p-2 text-violet-800">
                <FiMusic aria-hidden="true" />
              </span>
              Gitara klasyczna i muzyka
            </li>
            <li className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
              <span className="rounded-lg bg-violet-100 p-2 text-violet-800">
                <FiCode aria-hidden="true" />
              </span>
              Gry komputerowe i technologia
            </li>
          </ul>
        </aside>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          Aktualnie: uczę się, eksperymentuję i rozwijam nowe pomysły.
        </p>
        <a
          href="https://github.com/piszfiliptc-dot"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-950 px-5 py-3 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
        >
          Mój profil GitHub <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
