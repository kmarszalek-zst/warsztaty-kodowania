
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
      <article className="mt-8 overflow-hidden rounded-3xl border border-black bg-white shadow-lg">
        <div className="bg-gradient-to-r from-green-500 via-yellow-200 to-red-300  p-8 text-black sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Image
              src="https://avatars.githubusercontent.com/u/340122521?s=400&v=4"
              alt="Zdjęcie profilowe Macieja Jarosza"
              width={128}
              height={128}
              className="h-28 w-28 rounded-3xl border-4 border-white/20 object-cover sm:h-32 sm:w-32"
              priority
            />
            <div>
               <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-2000">
    Uczeń warsztatów kodowania
  </p>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Maciej Jarosz
              </h1>
              <p className="mt-2 font-medium text-black-2000 sm:text-lg">
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