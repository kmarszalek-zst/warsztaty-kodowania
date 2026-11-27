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
      <article className="mt-8 overflow-hidden rounded-3xl border border-black bg-white shadow-lg">
        <div className="bg-gradient-to-r from-indigo-500 via-cyan-200 to-indigo-300  p-8 text-black sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
           <img
              src="https://avatars.githubusercontent.com/u/340120171?v=4"
              alt="Zdjęcie ucznia Jakub Marynowski"
              width={128}
              height={128}
              className="h-28 w-28 rounded-3xl border-4 border-white/20 object-cover sm:h-32 sm:w-32"
              fetchPriority="high" 
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white [text-shadow:_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_2px_2px_0_#000,_0_-2px_0_#000,_0_2px_0_#000,_-2px_0_0_#000,_2px_0_0_#000] sm:text-4xl">
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
