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
      <article className="mt-8 overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-lg">
        <div className="bg-gradient-to-r from-violet-900 to-violet-500 p-8 text-black sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <Image
  src="https://avatars.githubusercontent.com/u/340131343?s=400&u=0626f0cd5dac334c18bd72ed011972b8ce3cff9a&v=4"
  alt="Moje zdjęcie profilowe"
  width={128}
  height={128}
/>
            <div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                Filip Pisz
              </h1>
              <p className="mt-2 font-medium text-black-100">
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
