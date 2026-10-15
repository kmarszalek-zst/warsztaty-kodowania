import Image from "next/image";
import ProfileLayout from "../../components/general/ProfileLayout";
import StudentDetails from "../../components/2te-aleks-kirilov/StudentDetails";

export const metadata = {
<<<<<<< Updated upstream:src/app/klasa-imie-nazwisko/page.js
  title: "Wizytówka ucznia — Twoje imię i nazwisko — ZST Koduj",
  description:
    "Wizytówka ucznia Twoje imię i nazwisko z klasy Twoja klasa w warsztatach ZST Koduj.",
=======
  title: "Wizytówka ucznia – Aleks Kirilov – ZST Koduj",
  description:
    "Wizytówka ucznia Aleks Kirilov z klasy 2Te w warsztatach ZST Koduj.",
>>>>>>> Stashed changes:src/app/2te-aleks-kirilov/page.js
};

export default function StudentTemplatePage() {
  return (
    <ProfileLayout>
      <article className="mt-8 overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-lg">
        <div className="bg-violet-700 p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Image
              src="/images.jpg"
              alt="Zdjęcie ucznia Aleks Kirilov"
              width={128}
              height={128}
              className="h-28 w-28 shrink-0 rounded-2xl object-cover"
            />
            <div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                Twoje imię i nazwisko
              </h1>
              <p className="mt-2 font-medium text-violet-100">
<<<<<<< Updated upstream:src/app/klasa-imie-nazwisko/page.js
                Klasa: [Twoja klasa]
=======
                Klasa: 2Te
>>>>>>> Stashed changes:src/app/2te-aleks-kirilov/page.js
              </p>
            </div>
          </div>
        </div>
        <StudentDetails />
      </article>
    </ProfileLayout>
  );
}