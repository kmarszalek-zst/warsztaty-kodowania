import { FiArrowRight, FiZap } from "react-icons/fi";

export default function HomeIntro() {
  return (
    <section
      id="start"
      className="relative mx-4 overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-white sm:mx-8 sm:px-12 sm:py-20 lg:mx-auto lg:max-w-6xl lg:px-20"
    >
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-lime-400 opacity-40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 right-1/3 h-72 w-72 rounded-full bg-orange-500 opacity-30 blur-3xl"
      />
      <div className="relative max-w-2xl">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-lime-200">
          <FiZap aria-hidden="true" />
          Warsztaty kodowania · ZST
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Twój pomysł.
          <br />
          <span className="text-lime-300">Twój kod.</span> Twoja strona.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          Sprawdź, jak działa internet od środka. Krok po kroku stworzymy
          własne strony, dodamy im charakteru i pokażemy je światu.
        </p>
        <a
          href="#wyzwanie"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-lime-300 px-6 py-3.5 font-bold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white"
        >
          Zaczynamy kodować <FiArrowRight aria-hidden="true" />
        </a>
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-12 right-16 hidden rotate-6 rounded-2xl border border-white/15 bg-white/10 p-5 font-mono text-sm leading-7 text-slate-300 shadow-2xl backdrop-blur sm:block"
      >
        <span className="text-lime-300">&lt;pomysł&gt;</span>
        <br />
        &nbsp;&nbsp;zamień w coś super
        <br />
        <span className="text-lime-300">&lt;/pomysł&gt;</span>
        <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-lime-300 align-middle" />
      </div>
    </section>
  );
}
