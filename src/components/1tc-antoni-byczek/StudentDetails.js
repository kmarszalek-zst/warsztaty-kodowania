import { FiArrowUpRight } from "react-icons/fi";

export default function StudentDetails() {
  return (
    <div className="p-8 sm:p-10">
      <h2 className="text-sm font-bold uppercase tracking-wide text-violet-700">
        O mnie
      </h2>
      <p className="mt-3 text-lg leading-8 text-slate-600">
        Jestem uczniem szkoły średniej w jaśle imienia Bohaterów września klasy 1 Tc.
        <br />
        Interesuje się programowanie a w szczególności tworzeniem prostych gier.
        <br />
        Lubie uczestoniczyć w <a href="https://itch.io/jams"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-violet-700 underline decoration-violet-300 underline-offset-4 transition hover:text-violet-900"
        >Game jams
        </a> i uczestiniczyłem w np. <a href="https://itch.io/jam/mini-jame-gam-55"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-violet-300 underline decoration-violet-300 underline-offset-4 transition hover:text-violet-500"
        >'Mini Jame Gam #55'
        </a>
        <br />
        <a href="https://itch.io/jams"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-gray-300 decoration-violet-300 underline-offset-4 transition hover:text-violet-900"
        >ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤGra którą stworzyłem
        </a>
      </p>
      <a
        href="https://github.com/ByQ001"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-700"
      >
        Mój profil GitHub <FiArrowUpRight aria-hidden="true" />
      </a>
      <a href="https://byqab.itch.io/"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-700"
      >
      Mój profil Itch.io <FiArrowUpRight aria-hidden="true" />
      </a>
    </div>
  );
}
