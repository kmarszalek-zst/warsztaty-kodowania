import Image from "next/image";
import ProfileLayout from "@/components/general/ProfileLayout";
import StudentDetails from "@/components/2Te-aleks-kirilov/StudentDetails";

export const metadata = {
  title: "Wizytówka ucznia – Aleks Kirilov – ZST Koduje",
  description:
    "Wizytówka ucznia Aleks Kirilov z klasy 2TE w serwisie ZST Koduje.",
};

export default function StudentPage() {
  return (
    <ProfileLayout>
      <article className="mt-8 overflow-hidden rounded-3xl bg-slate-900 shadow-xl border border-slate-800">
        <div className="bg-violet-700 p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Image
              src="/images.jpg"
              alt="Zdjęcie ucznia Aleks Kirilov"
              width={128}
              height={128}
              className="h-28 w-28 shrink-0 rounded-2xl object-cover"
            />
            <div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                Aleks Kirilov
              </h1>
              <p className="mt-2 font-medium text-violet-100 sm:text-lg">
                Klasa: 2TE
              </p>
            </div>
          </div>
        </div>
      </article>

      <StudentDetails />
    </ProfileLayout>
  );
}