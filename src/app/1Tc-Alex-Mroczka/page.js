import Image from "next/image";
import ProfileLayout from "../../components/general/ProfileLayout";
import StudentDetails from "../../components/1Tc-Alex-Mroczka/StudentDetails";

export const metadata = {
  title: "Alex Mroczka — wizytówka | ZST Koduj",
  description:
    "Wizytówka Alexa Mroczki, ucznia klasy 1Tc zainteresowanego programowaniem i technologiami.",
};

export default function AlexMroczkaPage() {
  return (
    <ProfileLayout>
      <article className="mt-8 overflow-hidden rounded-3xl border border-slate-200 border-t-4 border-t-emerald-700 bg-white shadow-md shadow-slate-200/70">
        <header className="flex flex-col gap-6 bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-950 p-7 sm:flex-row sm:items-center sm:gap-8 sm:p-10">
          <Image
            src="https://avatars.githubusercontent.com/u/340124808?s=400&u=6a6df4faf2b12d485b5e428742bd63be8d9664e6&v=4"
            alt="Zdjęcie profilowe Alexa Mroczki"
            width={144}
            height={144}
            sizes="(max-width: 640px) 112px, 144px"
            className="h-28 w-28 rounded-2xl border-2 border-white object-cover shadow-sm outline outline-1 outline-slate-200 sm:h-36 sm:w-36"
            priority
          />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
              Uczeń klasy 1Tc
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Alex <span className="text-emerald-300">Mroczka</span>
            </h1>
            <p className="mt-2 text-base leading-6 text-slate-200">
              Programowanie, technologie i własne projekty.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/20 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/90">
                Programowanie
              </span>
              <span className="rounded-full border border-white/20 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/90">
                Technologie
              </span>
            </div>
          </div>
        </header>
        <StudentDetails />
      </article>
    </ProfileLayout>
  );
}