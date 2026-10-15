import { FiArrowUpRight } from "react-icons/fi";

export default function StudentDetails() {
  return (
    <div className="p-8 sm:p-10">
      <h2 className="text-sm font-bold uppercase tracking-wide text-violet-700">
        O mnie
      </h2>
      <p className="mt-3 leading-7 text-slate-600">
        Pasjonuję się grami komputerowymi i tworzeniem gier, kocham zwierzęta i uwielbiam rysować. Uczę się języków: HTML, CSS, JavaScript, C# i GDScript. Uczę się także korzystać z aplikacji: Aseprite i Gimp do tworzenia grafik 2D oraz Blender do tworzenia modeli 3D.
      </p>
      <a
        href="https://github.com/zajachubertte"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-700"
      >
        Mój profil GitHub <FiArrowUpRight aria-hidden="true" />
      </a>
    </div>
  );
}
