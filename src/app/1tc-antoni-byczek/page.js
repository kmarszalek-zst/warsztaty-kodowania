import Image from "next/image";
import ProfileLayout from "../../components/general/ProfileLayout";
import StudentDetails from "../../components/klasa-imie-nazwisko/StudentDetails";

export const metadata = {
  title: "Wizytówka ucznia — Antoni Byczek — ZST Koduj",
  description:
    "Wizytówka ucznia Antonigo Byczka z klasy Twoja klasa w warsztatach ZST Koduj.",
};

export default function StudentTemplatePage() {
  return (
    <ProfileLayout>
      <article className="mt-8 overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-lg">
        <div className="bg-gradient-to-r from-red-600 to-violet-600 p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Image
              src="https://avatars.githubusercontent.com/u/259967531?v=4"
              alt="Zdjęcie profilowe Antniego Byczka"
              width={512}
              height={512}
              
              className="h-28 w-28 rounded-3xl border-4 border-white/20 object-cover sm:h-32 sm:w-32"
              priority
            />
            <div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                Antoni Byczek
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
