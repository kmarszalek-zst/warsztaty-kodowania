import { FiUser } from "react-icons/fi";
import ProfileLayout from "../../components/general/ProfileLayout";
import Image from "next/image";
import StudentDetails from "../../components/1tc-tobiasz-ryznar/StudentDetails";

export const metadata = {
  title: "Wizytówka ucznia — Tobiasz Ryznar — ZST Koduj",
  description:
    "Wizytówka ucznia Tobiasz Ryznar z klasy 1Tc w warsztatach ZST Koduj.",
};

export default function StudentTemplatePage() {
  return (
    <ProfileLayout>
      <article className="mt-8 overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-lg">
        <div className="bg-gradient-to-r from-slate-900 to-slate-600 p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Image
              src="https://avatars.githubusercontent.com/u/340120984?s=400&u=39c8ec70ddbf3576ab6828ad842ae2c0f20db1c0&v=4"
              alt="Zdjęcie profilowe Tobiasza Ryznara"
              width={128}
              height={128}
              className="h-28 w-28 rounded-3xl border-4 border-white/20 object-cover sm:h-32 sm:w-32"
              priority
            />
            <div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                Tobiasz Ryznar
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
