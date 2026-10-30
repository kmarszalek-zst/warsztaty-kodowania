import ChallengeInstructions from "../components/general/ChallengeInstructions";
import ChallengeThreePlaceholder from "../components/general/ChallengeThreePlaceholder";
import ChallengeTwoInstructions from "../components/general/ChallengeTwoInstructions";
import GitAccountSetup from "../components/general/GitAccountSetup";
import HomeHeader from "../components/general/HomeHeader";
import HomeIntro from "../components/general/HomeIntro";
import ProfileCard from "../components/general/ProfileCard";
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
          <ProfileCard
            href="/nauczyciel"
            name="Klaudiusz Marszałek"
            description="Nauczyciel"
            image="https://avatars.githubusercontent.com/u/57961329?v=4"
            variant="teacher"
          />
        </div>
        HEAD
          {/* Uczniowie: skopiuj kartę i uzupełnij własne dane oraz adres strony. */}
          <a
            href="/1tc-antoni-byczek"
            className="group flex items-center gap-4 rounded-3xl border border-violet-300 bg-violet-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-100"
          >
            <Image 
              src="https://avatars.githubusercontent.com/u/259967531?v=4"
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 rounded-2xl object-cover"
            />
            <span className="min-w-0">
              <span className="block truncate font-bold">
                Antoni Byczek
              </span>
              <span className="mt-1 block text-sm font-medium text-violet-800">
                Klasa: 1Tc
              </span>
            </span>
            <FiArrowRight
              aria-hidden="true"
              className="ml-auto shrink-0 transition group-hover:translate-x-1"
            />
          </a>
          {/* Dodaj kolejne karty uczniów powyżej. */}
        <h3 className="mt-10 text-xl font-black tracking-tight">Klasa 1 TC</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Uczniowie 1 TC: skopiuj kartę i uzupełnij własne dane oraz adres strony. */}
          <ProfileCard
            href="/klasa-imie-nazwisko"
            name="Twoje imię i nazwisko"
            description="Klasa: 1 TC"
          />
          {/* Dodaj kolejne karty uczniów 1 TC powyżej. */}
        </div>

        <h3 className="mt-10 text-xl font-black tracking-tight">Klasa 2 TE</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Uczniowie 2 TE: skopiuj kartę i uzupełnij własne dane oraz adres strony. */}
          <ProfileCard
            href="/klasa-imie-nazwisko"
            name="Twoje imię i nazwisko"
            description="Klasa: 2 TE"
          />
          {/* Dodaj kolejne karty uczniów 2 TE powyżej. */}
>>>>>>> wyzwanie_3
        </div>
      </section>

      <ChallengeInstructions />
      <ChallengeTwoInstructions />
      <ChallengeThreePlaceholder />
      <GitAccountSetup />

      <footer className="pb-8 text-center text-sm text-slate-500">
        <p>Eksperymentuj, pytaj, poprawiaj. Tak powstaje dobry kod.</p>
      </footer>
    </main>
  );
}
