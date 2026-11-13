import { FiArrowUpRight } from "react-icons/fi";

const programy = ["Godot", "VS code", "Intellij IDEA"];

export default function StudentDetails() {
  return (
    <div className="p-8 sm:p-10">
      <div className="grid gap-8 sm:grid-cols-2 sm:items-start">
        <section>
          <h2 className="text-sm font-bold uppercase tracking-wide text-violet-700">
            O mnie
          </h2>
          <p className="mt-3 text-lg leading-8 text-slate-600">
            Jestem uczniem szkoły średniej w jaśle imienia Bohaterów września klasy 1 Tc.
            <br />
            Interesuje się programowanie a w szczególności tworzeniem prostych gier.
            <br />
            Jestem członkiem klubu 
            <a href="https://hackclub.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-red-700 underline decoration-red-300 underline-offset-4 transition hover:text-red-900"
            > Hack Club
            </a>
            {' '}niedochodowa organizacja dla młodzieży, która uczy programowania i technologii.
            <br />
            Lubie uczestoniczyć w <a href="https://itch.io/jams"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-violet-00 underline decoration-violet-300 underline-offset-4 transition hover:text-violet-900"
            >Game jams
            </a> i uczestiniczyłem w np. <a href="https://itch.io/jam/mini-jame-gam-55"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-violet-300 underline decoration-violet-300 underline-offset-4 transition hover:text-violet-500"
            >'Mini Jame Gam #55'
            </a>
            .
            <a href="https://itch.io/jams"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-gray-300 decoration-violet-300 underline-offset-4 transition hover:text-violet-900"
            >ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤGra którą stworzyłem
            </a>
          </p>
          </section>
          <aside className="rounded-2xl bg-lime-100 p-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-lime-800">
              programy
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {programy.map((programy) => (
                <li
                  key={programy}
                  className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-lime-900"
                >
                  {programy}
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <></>
        <p className="mt-6 text-sm text-slate-600">
        Publiczne projekty na GitHubie: 12 · Obserwujący: 5
        </p>
      <a
        href="https://github.com/ByQ001"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-700"
      >
        Mój profil GitHub <FiArrowUpRight aria-hidden="true" />
      </a>
      ㅤ
      <a href="https://byqab.itch.io/"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-700"
      >
      Mój profil Itch.io <FiArrowUpRight aria-hidden="true" />
      </a>
      ㅤ
      <a href="https://hackatime.hackclub.com/@ByQ"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-700"
      >
      Mój profil Hack Time <FiArrowUpRight aria-hidden="true" />
      </a>
    </div>
  );
}
