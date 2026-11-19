import { FiZap } from "react-icons/fi";

export default function ChallengeThreePlaceholder() {
  return (
    <section
      id="wyzwanie-3"
      className="mx-4 mb-16 rounded-3xl bg-orange-100 px-6 py-12 sm:mx-8 sm:px-12 sm:py-14 lg:mx-auto lg:mb-20 lg:max-w-6xl lg:px-16"
    >
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
          <FiZap aria-hidden="true" className="text-orange-600/80" />
          <span className="text-sm font-bold text-orange-800">Wyzwanie #3</span>
        </div>

        <div className="mt-5 h-10 w-2/3 max-w-xl animate-pulse rounded-xl bg-white/60" />
        <div className="mt-3 h-5 w-full max-w-3xl animate-pulse rounded bg-white/60" />
        <div className="mt-2 h-5 w-5/6 max-w-2xl animate-pulse rounded bg-white/60" />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[0, 1].map((card) => (
          <article
            key={card}
            className="rounded-2xl border border-orange-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="h-5 w-24 animate-pulse rounded bg-orange-200/80" />
            <div className="mt-4 h-4 w-full animate-pulse rounded bg-slate-200/80" />
            <div className="mt-2 h-4 w-11/12 animate-pulse rounded bg-slate-200/80" />
            <div className="mt-2 h-4 w-9/12 animate-pulse rounded bg-slate-200/80" />
            <div className="mt-5 space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-slate-200/80" />
              <div className="h-4 w-full animate-pulse rounded bg-slate-200/80" />
              <div className="h-4 w-7/12 animate-pulse rounded bg-slate-200/80" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
