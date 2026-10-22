import { FiArrowRight, FiZap } from "react-icons/fi";

export default function ChallengeInstructions() {
  return (
    <section
      id="wyzwanie"
      className="mx-4 mb-16 rounded-3xl bg-lime-100 px-6 py-12 sm:mx-8 sm:px-12 sm:py-14 lg:mx-auto lg:mb-20 lg:max-w-6xl lg:px-16"
    >
      <div>
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-lime-800">
          <FiZap aria-hidden="true" /> Wyzwanie #1
        </p>
        <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
          Dodaj swoją wizytówkę!
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
          Najpierw utwórz własny branch, a potem przygotuj stronę i dodaj jej
          link na stronie głównej. Poniżej znajdziesz przykład fikcyjnego ucznia
          oraz listę plików do zmiany.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-violet-200 bg-white p-5 shadow-sm sm:p-6">
        <p className="text-sm font-bold uppercase tracking-wider text-violet-700">
          Krok 1 · Utwórz własny branch
        </p>
        <p className="mt-2 leading-7 text-slate-700">
          Zanim zaczniesz edytować pliki, utwórz branch według wzoru{" "}
          <code className="rounded bg-violet-50 px-1.5 py-1 font-mono text-sm text-violet-800">
            wyzwanie_1/klasa-imie-nazwisko
          </code>
          . Użyj małych liter, bez polskich znaków i spacji.
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Przykład dla Jana Kowalskiego z klasy 2A:
        </p>
        <code className="mt-2 inline-block max-w-full break-all rounded-lg bg-slate-900 px-3 py-2 font-mono text-sm text-lime-200">
          git switch -c wyzwanie_1/2a-jan-kowalski
        </code>
      </div>

      <div className="mt-8 rounded-3xl bg-slate-900 p-6 text-white shadow-xl sm:p-8">
        <p className="text-sm font-bold uppercase tracking-wider text-lime-200">
          Przykład — fikcyjny uczeń
        </p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm text-slate-400">Imię i nazwisko</p>
            <p className="mt-1 font-bold">Jan Kowalski</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Klasa</p>
            <p className="mt-1 font-bold">2A</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Nazwa folderu / adres</p>
            <p className="mt-1 break-all font-mono text-sm font-bold text-lime-200">
              2a-jan-kowalski
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Login GitHub</p>
            <p className="mt-1 font-bold">jankowalski</p>
          </div>
        </div>
        <p className="mt-5 border-t border-slate-700 pt-4 text-sm leading-6 text-slate-300">
          To tylko przykład. Wstaw swoje dane, a folder nazwij małymi literami,
          bez polskich znaków i spacji.
        </p>
      </div>

      <h3 className="mt-10 text-xl font-bold text-slate-900">
        Co zmienić i w którym pliku?
      </h3>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm font-bold text-violet-700">02 · Adres strony</p>
          <p className="mt-2 leading-6 text-slate-700">
            Zmień nazwę folderu strony{" "}
            <code className="break-all rounded bg-violet-50 px-1 text-violet-800">
              src/app/klasa-imie-nazwisko
            </code>{" "}
            na swoją klasę i imię, np.{" "}
            <code className="break-all rounded bg-violet-50 px-1 text-violet-800">
              src/app/2a-jan-kowalski
            </code>
            . Plik <code>page.js</code> zostaje w tym folderze. Analogicznie
            zmień nazwę folderu komponentów{" "}
            <code className="break-all rounded bg-violet-50 px-1 text-violet-800">
              src/components/klasa-imie-nazwisko
            </code>{" "}
            na{" "}
            <code className="break-all rounded bg-violet-50 px-1 text-violet-800">
              src/components/2a-jan-kowalski
            </code>
            .
          </p>
        </article>

        <article className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm font-bold text-violet-700">03 · Wizytówka</p>
          <p className="mt-2 leading-6 text-slate-700">
            W pliku{" "}
            <code className="break-all rounded bg-violet-50 px-1 text-violet-800">
              src/app/2a-jan-kowalski/page.js
            </code>{" "}
            wpisz imię, klasę i dodaj zdjęcie. Zmień import komponentu, aby
            wskazywał na Twój folder. Skopiuj plik{" "}
            <code className="break-all rounded bg-violet-50 px-1 text-violet-800">
              StudentDetails.js
            </code>{" "}
            do swojego folderu komponentów:{" "}
            <code className="break-all rounded bg-violet-50 px-1 text-violet-800">
              src/components/2a-jan-kowalski/StudentDetails.js
            </code>
            . Następnie uzupełnij w nim opis i login GitHub.
          </p>
        </article>

        <article className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm font-bold text-violet-700">
            04 · Strona główna
          </p>
          <p className="mt-2 leading-6 text-slate-700">
            W pliku{" "}
            <code className="break-all rounded bg-violet-50 px-1 text-violet-800">
              src/app/page.js
            </code>{" "}
            zmień tekst swojej karty na imię i nazwisko oraz klasę, a jej adres na{" "}
            <code className="break-all rounded bg-violet-50 px-1 text-violet-800">
              /2a-jan-kowalski
            </code>
            . Nie edytuj wspólnego folderu{" "}
            <code className="break-all rounded bg-violet-50 px-1 text-violet-800">
              src/components/klasa-imie-nazwisko
            </code>
            — każdy uczeń pracuje we własnym folderze komponentów.
          </p>
        </article>
      </div>

      <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-lime-300 bg-lime-50 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl leading-7 text-slate-700">
          Wszystkie zmiany wykonuj na utworzonym branchu. Na koniec sprawdź, czy
          adres otwiera Twoją wizytówkę, a potem zapisz i wyślij zmiany do
          repozytorium.
        </p>
        <a
          href="#ekipa"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-lime-300 px-5 py-3 font-bold text-slate-900 transition hover:bg-lime-400"
        >
          Zobacz listę uczniów <FiArrowRight aria-hidden="true" />
        </a>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
        <p className="text-sm font-bold uppercase tracking-wider text-violet-700">
          Krok 5 · Zapisz i wyślij zadanie
        </p>
        <p className="mt-2 leading-7 text-slate-700">
          Po sprawdzeniu wizytówki zapisz zmiany w commicie, a następnie wypchnij
          swój branch do repozytorium. Poniższe polecenia pokazują przykład dla
          Jana — użyj swojej nazwy brancha.
        </p>
        <ol className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-3">
          <li className="rounded-xl bg-slate-50 p-4">
            <span className="block font-bold text-slate-900">
              1. Dodaj zmiany
            </span>
            <code className="mt-2 block break-all font-mono text-violet-800">
              git add .
            </code>
          </li>
          <li className="rounded-xl bg-slate-50 p-4">
            <span className="block font-bold text-slate-900">
              2. Utwórz commit
            </span>
            <code className="mt-2 block break-all font-mono text-violet-800">
              git commit -m &quot;Dodaj wizytowke Jana Kowalskiego&quot;
            </code>
          </li>
          <li className="rounded-xl bg-slate-50 p-4">
            <span className="block font-bold text-slate-900">
              3. Wyślij branch
            </span>
            <code className="mt-2 block break-all font-mono text-violet-800">
              git push -u origin wyzwanie_1/2a-jan-kowalski
            </code>
          </li>
        </ol>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          Zastąp w poleceniach Jana swoim imieniem, nazwiskiem i nazwą brancha.
          Po wysłaniu zmian na GitHubie utwórz pull request, aby można było
          scalić Twoje zadanie z główną wersją projektu.
        </p>
      </div>
    </section>
  );
}
