import Image from "next/image";
import { FiArrowRight, FiUserPlus } from "react-icons/fi";
import ChallengeInstructions from "../components/general/ChallengeInstructions";
import GitAccountSetup from "../components/general/GitAccountSetup";
import HomeHeader from "../components/general/HomeHeader";
import HomeIntro from "../components/general/HomeIntro";
import WorkshopSteps from "../components/general/WorkshopSteps";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-stone-50 text-slate-900">
      <HomeHeader />
      <HomeIntro />
      <WorkshopSteps />

      <section
        id="ekipa"
        className="mx-auto max-w-6xl px-6 pb-16 sm:px-10 sm:pb-20"
      >
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-lime-800">
            Nasza ekipa
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Poznaj ludzi za kodem.
          </h2>
          <p className="mt-3 max-w-xl leading-7 text-slate-600">
            Zobacz wizytówki osób, które tworzą ten projekt.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="/nauczyciel"
            className="group flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Image
              src="https://avatars.githubusercontent.com/u/57961329?v=4"
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 rounded-2xl object-cover"
            />
            <span className="min-w-0">
              <span className="block font-bold">Klaudiusz Marszałek</span>
              <span className="mt-1 block text-sm text-slate-600">
                Nauczyciel
              </span>
            </span>
            <FiArrowRight
              aria-hidden="true"
              className="ml-auto transition group-hover:translate-x-1"
            />
          </a>

          {/* Uczniowie: skopiuj kartę i uzupełnij własne dane oraz adres strony. */}
          <a
            href="1tc-tobiasz-ryznar"
            className="group flex items-center gap-4 rounded-3xl border border-violet-300 bg-violet-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-100"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-200 text-violet-900">
              <FiUserPlus aria-hidden="true" size={24} />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-bold">
                Tobiasz Ryznar
              </span>
              <span className="mt-1 block text-sm font-medium text-violet-800">
                Klasa: 1 Tc
              </span>
            </span>
            <FiArrowRight
              aria-hidden="true"
              className="ml-auto shrink-0 transition group-hover:translate-x-1"
            />
          </a>
          {/* Dodaj kolejne karty uczniów powyżej. */}
        </div>
      </section>

      <ChallengeInstructions />
      <GitAccountSetup />

      <footer className="pb-8 text-center text-sm text-slate-500">
        <p>Eksperymentuj, pytaj, poprawiaj. Tak powstaje dobry kod.</p>
      </footer>
    </main>
  );
}
