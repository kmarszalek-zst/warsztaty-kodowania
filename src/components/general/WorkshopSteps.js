import { FiCode, FiExternalLink, FiLayers } from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "Poznajemy HTML",
    description:
      "Budujemy strukturę strony i dodajemy do niej pierwsze treści.",
    icon: FiCode,
  },
  {
    number: "02",
    title: "Nadajemy styl",
    description:
      "Kolory, układ i własne pomysły — tu strona nabiera charakteru.",
    icon: FiLayers,
  },
  {
    number: "03",
    title: "Pokazujemy efekt",
    description: "Każdy publikuje swoją stronę i prezentuje ją całej klasie.",
    icon: FiExternalLink,
  },
];

export default function WorkshopSteps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
      <div className="mb-8 max-w-xl">
        <p className="text-sm font-bold uppercase tracking-widest text-violet-700">
          Nasza droga
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Małe kroki, wielkie pomysły.
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.number}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-100 text-lime-800">
                <step.icon aria-hidden="true" size={22} />
              </span>
              <span className="font-mono text-sm font-bold text-slate-400">
                {step.number}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
            <p className="mt-2 leading-7 text-slate-600">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
