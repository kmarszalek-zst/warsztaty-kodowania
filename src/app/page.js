import { FiArrowRight } from "react-icons/fi";
import ChallengeInstructions from "../components/general/ChallengeInstructions";
import ChallengeThreePlaceholder from "../components/general/ChallengeThreePlaceholder";
import ChallengeTwoInstructions from "../components/general/ChallengeTwoInstructions";
import GitAccountSetup from "../components/general/GitAccountSetup";
import HomeHeader from "../components/general/HomeHeader";
import HomeIntro from "../components/general/HomeIntro";
import ProfileCard from "../components/general/ProfileCard";
import WorkshopSteps from "../components/general/WorkshopSteps";
import Image from "next/image";

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

          {/* Dodaj kolejne karty uczniów powyżej. */}
        <h3 className="mt-10 text-xl font-black tracking-tight">Klasa 1 TC</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Uczniowie 1 TC: skopiuj kartę i uzupełnij własne dane oraz adres strony. */}
          <ProfileCard
            href="/1tc-tobiasz-ryznar"
            name="Tobiasz Ryznar"
            description="Klasa: 1 TC"
            image="https://avatars.githubusercontent.com/u/340120984?s=400&u=39c8ec70ddbf3576ab6828ad842ae2c0f20db1c0&v=4"
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
