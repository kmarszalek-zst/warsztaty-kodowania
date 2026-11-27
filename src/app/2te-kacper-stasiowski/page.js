import { FiUser } from "react-icons/fi";
import Image from "next/image";
import ProfileLayout from "../../components/general/ProfileLayout";
import StudentDetails from "../../components/2te-kacper-stasiowski/StudentDetails";

export const metadata = {
  title: "Wizytówka ucznia — Twoje Kacper Stasiowski — ZST Koduj",
  description:
    "Wizytówka ucznia Kacper Stasiowski z klasy 2Te w warsztatach ZST Koduj.",
};

export default function StudentTemplatePage() {
  return (
    <ProfileLayout>
      <article className="mt-8 overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-lg">
        <div className="bg-violet-700 p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <Image
  src="https://avatars.githubusercontent.com/u/343085314?v=4&size=64"
  alt="Zdjęcie Kacpra Stasiowskiego"
  width={128}
  height={128}
  className="h-28 w-28 shrink-0 rounded-2xl border-2 border-violet-200 object-cover"
/>
            <div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                Kacper Stasiowski
              </h1>
              <p className="mt-2 font-medium text-violet-100">
                Klasa: 2Te
              </p>
            </div>
          </div>
        </div>
        <StudentDetails />
      </article>
    </ProfileLayout>
  );
}
