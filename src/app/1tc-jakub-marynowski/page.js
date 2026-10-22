import { FiUser } from "react-icons/fi";
import ProfileLayout from "../../components/general/ProfileLayout";
import StudentDetails from "../../components/1tc-jakub-marynowski/StudentDetails";

export const metadata = {
  title: "Wizytówka ucznia — Jakub Marynowski — ZST Koduj",
  description:
    "Wizytówka ucznia Jakub Marynowski z klasy 1TC w warsztatach ZST Koduj.",
};

export default function StudentTemplatePage() {
  return (
    <ProfileLayout>
      <article className="mt-8 overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-lg">
        <div className="bg-violet-700 p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
           <img
              src="pfp.jpg"
              alt="Zdjęcie ucznia Jakub Marynowski"
              width={128}
              height={128}
              className="h-28 w-28 shrink-0 rounded-2xl object-cover"
            />
            <div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                Jakub Marynowski
              </h1>
              <p className="mt-2 font-medium text-violet-100">
                Klasa: 1TC
              </p>
            </div>
          </div>
        </div>
        <StudentDetails />
      </article>
    </ProfileLayout>
  );
}
