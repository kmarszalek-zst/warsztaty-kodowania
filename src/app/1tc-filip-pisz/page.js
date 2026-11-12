import Image from "next/image";
import ProfileLayout from "../../components/general/ProfileLayout";
import StudentDetails from "../../components/klasa-imie-nazwisko/StudentDetails";

export const metadata = {
  title: "Filip Pisz — ZST Koduj",
  description:
    "Poznaj Filipa Pisza, ucznia klasy 1 TC i uczestnika warsztatów ZST Koduj.",
};

export default function FilipProfilePage() {
  return (
    <ProfileLayout>
      <article className="mt-8 overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-xl shadow-violet-950/5">
        <div className="relative overflow-hidden bg-gradient-to-br from-violet-950 via-violet-800 to-fuchsia-700 p-8 text-white sm:p-12">
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-20 h-64 w-64 rounded-full border-[32px] border-white/10"
          />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
            <Image
              src="https://avatars.githubusercontent.com/u/340131343?s=400&u=0626f0cd5dac334c18bd72ed011972b8ce3cff9a&v=4"
              alt="Zdjęcie profilowe Filipa Pisza"
              width={128}
              height={128}
              className="h-28 w-28 rounded-3xl border-4 border-white/25 object-cover shadow-lg sm:h-32 sm:w-32"
              priority
            />
            <div>
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-violet-100">
                Uczeń · 1 TC
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Filip Pisz
              </h1>
              <p className="mt-2 max-w-lg leading-7 text-violet-100">
                Ciekawość, pomysły i odrobina kodu — tak zaczyna się dobra
                przygoda z technologią.
              </p>
            </div>
          </div>
        </div>
        <StudentDetails />
      </article>
    </ProfileLayout>
  );
}
