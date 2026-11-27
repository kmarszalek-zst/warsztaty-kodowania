import { FiArrowUpRight } from "react-icons/fi";

const interests = ["Programowanie", "Informatyka", "Muzyka"];

export default function StudentDetails() {
  return (
    <div className="p-8 sm:p-10">
      <div className="grid gap-8 sm:grid-cols-2 sm:items-start">
        <section>
          <h2 className="text-sm font-bold uppercase tracking-wide text-[#f2cc13]">
            O mnie
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Jestem uczniem klasy 1TC i lubię programować. W swojej wolnej chwili eksperymentuję z nowymi technologiami webowymi.
          </p>
        </section>

        <aside className="rounded-2xl bg-[#f2cc13]/15 p-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#816721]">
            Zainteresowania
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {interests.map((interest) => (
              <li
                key={interest}
                className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#816721]"
              >
                {interest}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <a
        href="https://github.com/marynowskijakub"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#6b7280] px-5 py-3 font-bold text-white transition hover:bg-[#6b7280]-700"
      >
        Mój profil GitHub <FiArrowUpRight aria-hidden="true" />
      </a>
    </div>
  );
}