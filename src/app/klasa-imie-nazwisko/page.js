import { FiUser } from "react-icons/fi";
import Image from "next/image";
import ProfileLayout from "../../components/general/ProfileLayout";
import StudentDetails from "../../components/klasa-imie-nazwisko/StudentDetails";

export const metadata = {
  title: "Wizytówka ucznia — Twoje imię i nazwisko — ZST Koduj",
  description:
    "Wizytówka ucznia Twoje imię i nazwisko z klasy Twoja klasa w warsztatach ZST Koduj.",
};

export default function StudentTemplatePage() {
  return (
    <ProfileLayout>
      <article className="mt-8 overflow-hidden rounded-3xl border border-black bg-white shadow-lg">
        <div className="bg-gradient-to-r from-green-500 via-yellow-200 to-red-300  p-8 text-black sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <Image
              src="https://avatars.githubusercontent.com/u/78901316?v=4"
              alt="Zdjęcie profilowe Alana Łąckiego"
              width={128}
              height={128}
              className="h-28 w-28 rounded-3xl border-4 border-white/20 object-cover sm:h-32 sm:w-32"
              priority
            />
            <div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                Alan Łącki
              </h1>
              <p className="mt-2 font-medium text-black">
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
