import { FiUser } from "react-icons/fi";
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
        <div className="bg-violet-700 p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div
              aria-label="Miejsce na zdjęcie ucznia"
              className="flex h-28 w-28 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-violet-200 bg-violet-600 text-violet-100"
            >
              <FiUser aria-hidden="true" size={32} />
              <span className="text-xs font-medium">Twoje zdjęcie</span>
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                Filip Pisz
              </h1>
              <p className="mt-2 font-medium text-violet-100">
                Klasa: [1Tc]
              </p>
            </div>
          </div>
        </div>
        <StudentDetails />
      </article>
    </ProfileLayout>
  );
}
