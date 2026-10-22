import Image from "next/image";
import { FiCode } from "react-icons/fi";
import ProfileLayout from "../../components/general/ProfileLayout";
import TeacherDetails from "../../components/nauczyciel/TeacherDetails";

export const metadata = {
  title: "Nauczyciel — ZST Koduj",
  description: "Profil nauczyciela prowadzącego warsztaty ZST Koduj.",
};

export default function TeacherPage() {
  return (
    <ProfileLayout>
      <article className="mt-8 overflow-hidden rounded-3xl bg-white shadow-xl">
        <div className="bg-slate-900 p-8 text-white sm:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Image
              src="https://avatars.githubusercontent.com/u/57961329?v=4"
              alt="Zdjęcie profilowe Klaudiusza Marszałka"
              width={128}
              height={128}
              className="h-28 w-28 rounded-3xl border-4 border-white/20 object-cover sm:h-32 sm:w-32"
              priority
            />
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-lime-200">
                <FiCode aria-hidden="true" /> PROWADZĄCY WARSZTATY
              </p>
              <h1 className="mt-2 text-4xl font-black tracking-tight">
                Klaudiusz Marszałek
              </h1>
              <p className="mt-2 text-slate-300">
                Inżynier oprogramowania · Jasło
              </p>
            </div>
          </div>
        </div>
        <TeacherDetails />
      </article>
    </ProfileLayout>
  );
}
