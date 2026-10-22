import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

const technologies = ["React", "Node.js", "Google Cloud"];

export default function TeacherDetails() {
  return (
    <div className="p-8 sm:p-12">
      <div className="grid gap-8 sm:grid-cols-2 sm:items-start">
        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-lime-800">
            O mnie
          </h2>
          <p className="mt-3 text-lg leading-8 text-slate-600">
            Jestem inżynierem full-stack i tworzę skalowalne, wysokiej jakości
            aplikacje. Pracuję z Reactem, Node.js i Google Cloud. Mam
            doświadczenie w projektach z branży finansowej, e-commerce oraz
            przemysłowej.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-600">
            <FiMapPin aria-hidden="true" /> Jasło
          </p>
        </section>
        <aside className="rounded-2xl bg-lime-100 p-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-lime-800">
            Technologie
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-lime-900"
              >
                {technology}
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <p className="mt-6 text-sm text-slate-600">
        Publiczne projekty na GitHubie: 12 · Obserwujący: 5
      </p>
      <a
        href="https://github.com/ja-klaudiusz"
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3.5 font-bold text-white transition hover:bg-slate-700"
      >
        Zobacz profil na GitHubie <FiArrowUpRight aria-hidden="true" />
      </a>
    </div>
  );
}
