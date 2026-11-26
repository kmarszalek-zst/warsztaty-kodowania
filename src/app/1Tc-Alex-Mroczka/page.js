import { FiUser } from "react-icons/fi";
import ProfileLayout from "../../components/general/ProfileLayout";
import StudentDetails from "../../components/1Tc-Alex-Mroczka/StudentDetails";
import Image from "next/image";

export const metadata = {
  title: "Wizytówka ucznia — Alex Mroczka — ZST Koduj",
  description:
    "Wizytówka ucznia Alex Mroczka z klasy 1Tc w warsztatach ZST Koduj.",
};

export default function AlexMroczkaPage() {
  return (
    <ProfileLayout>
      <article className="mt-8 overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-lg">
        <div className="bg-violet-700 p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div
              aria-label="Miejsce na zdjęcie ucznia"
              className="flex h-28 w-28 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-violet-200 bg-violet-600 text-violet-100"
            >
 <Image
              src="https://avatars.githubusercontent.com/u/340124808?s=400&u=6a6df4faf2b12d485b5e428742bd63be8d9664e6&v=4"
              alt="Zdjęcie profilowe Alexa Mroczki"
              width={128}
              height={128}
              className="h-28 w-28 rounded-3xl border-4 border-white/20 object-cover sm:h-32 sm:w-32"
              priority
            />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                Alex Mroczka
              </h1>
              <p className="mt-2 font-medium text-violet-100">
                Klasa: 1Tc
              </p>
            </div>
          </div>
        </div>
        <StudentDetails />
      </article>
    </ProfileLayout>
  );
}
