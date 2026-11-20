
import Image from "next/image";
import ProfileLayout from "../../components/general/ProfileLayout";
import StudentDetails from "../../components/1tc-maciej-jarosz/StudentDetails";

export const metadata = {
  title: "Wizytówka ucznia — Maciej Jarosz — ZST Koduj",
  description:
    "Wizytówka ucznia Maciej Jarosz z klasy 1 TC w warsztatach ZST Koduj.",
};

export default function StudentTemplatePage() {
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
              src="https://avatars.githubusercontent.com/u/340122521?s=400&v=4"
              alt="Zdjęcie profilowe Macieja Jarosza"
              width={128}
              height={128}
              className="h-28 w-28 rounded-3xl border-4 border-white/20 object-cover sm:h-32 sm:w-32"
              priority
            />
            <div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                Maciej Jarosz
              </h1>
              <p className="mt-2 font-medium text-violet-100">
                Klasa: 1 TC
              </p>
            </div>
          </div>
        </div>
        <StudentDetails />
      </article>
    </ProfileLayout>
  );
}