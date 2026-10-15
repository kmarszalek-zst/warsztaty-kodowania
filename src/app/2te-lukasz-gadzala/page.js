import { FiUser } from "react-icons/fi";
import ProfileLayout from "../../components/general/ProfileLayout";
import StudentDetails from "../../components/2te-lukasz-gadzala/StudentDetails";

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
          <img
              src="/zdjecie.jpg"
              alt="Zdjęcie ucznia Łukasza Gadzały"
              width={128}
              height={128}
              className="h-28 w-28 shrink-0 rounded-2xl object-cover"
            />
            <div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                Łukasz Gadzała
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
