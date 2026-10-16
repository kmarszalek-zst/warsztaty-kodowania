import { FiAlertCircle, FiGitMerge, FiZap } from "react-icons/fi";

export default function ChallengeTwoInstructions() {
  return (
    <section
      id="wyzwanie-2"
      className="mx-4 mb-16 rounded-3xl bg-violet-100 px-6 py-12 sm:mx-8 sm:px-12 sm:py-14 lg:mx-auto lg:mb-20 lg:max-w-6xl lg:px-16"
    >
      <div>
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-violet-800">
          <FiZap aria-hidden="true" /> Wyzwanie #2
        </p>
        <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
          Zmerguj swój branch z aktualnym mainem
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
          W pierwszym wyzwaniu każdy pracował na własnym branchu. Teraz
          najpierw pobierz z GitHuba najnowszą wersję swojego brancha, a potem
          połącz ją z aktualnym branchem <code>main</code>. Każdy uczeń wykonuje
          te kroki samodzielnie i wyłącznie na swoim branchu — nie zmieniaj ani
          nie wysyłaj zmian na branch innej osoby lub bezpośrednio na{" "}
          <code>main</code>.
        </p>
      </div>

      <article className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
        <p className="text-sm font-bold uppercase tracking-wider text-amber-900">
          Zanim zaczniesz · Pracuj spokojnie, krok po kroku
        </p>
        <p className="mt-2 leading-7 text-slate-700">
          Wszystkie polecenia wpisuj w terminalu Git Bash w VS Code, otwartym w
          folderze projektu — nie w pasku wyszukiwania ani w edytorze plików.
          Wykonuj polecenia pojedynczo i sprawdzaj ich wynik przed przejściem
          dalej. W przykładach zawsze zastąp nazwę brancha własną nazwą, np.{" "}
          <code>wyzwanie_1/2a-jan-kowalski</code>. Sprawdź, czy terminal jest
          otwarty w folderze właściwego projektu. Jeśli terminal w VS Code
          pokazuje inny typ niż Git Bash, wybierz Git Bash z menu profilu
          terminala:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-lime-200">
          <code>
            {"git status --short --branch\n"}
            {"git branch --show-current"}
          </code>
        </pre>
        <p className="mt-3 leading-7 text-slate-700">
          Upewnij się, że jesteś na swoim branchu i że nie masz niezapisanych
          zmian. Jeśli widzisz zmienione pliki, nie kontynuuj w ciemno — najpierw
          zapisz swoją pracę albo poproś nauczyciela o pomoc. Jeśli nazwa
          brancha lub wynik polecenia jest inny niż oczekujesz, zatrzymaj się i
          sprawdź to z nauczycielem. Nie używaj poleceń, które nadpisują lub
          usuwają zmiany, takich jak <code>git reset --hard</code> ani{" "}
          <code>git push --force</code>.
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Informacja, że lokalny branch jest „behind” (do tyłu) względem
          GitHuba, jest w tym ćwiczeniu normalna — za chwilę go zaktualizujesz.
        </p>
      </article>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-violet-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-sm font-bold uppercase tracking-wider text-violet-700">
            Krok 1 · Odśwież informacje o branchach
          </p>
          <p className="mt-2 leading-7 text-slate-700">
            W terminalu Git Bash w VS Code pobierz informacje o branchach z
            GitHuba:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-lime-200">
            <code>git fetch origin</code>
          </pre>
          <p className="mt-3 leading-7 text-slate-700">
            To pobiera informacje o nowych zmianach, ale samo nie aktualizuje
            plików projektu.
          </p>
        </article>

        <article className="rounded-2xl border border-violet-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-sm font-bold uppercase tracking-wider text-violet-700">
            Krok 2 · Pobierz najnowszą wersję swojego brancha
          </p>
          <p className="mt-2 leading-7 text-slate-700">
            Jeśli branch jest już lokalnie, przejdź na niego. Sprawdź wynik
            polecenia i upewnij się, że nazwa jest Twoja:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-lime-200">
            <code>
              {"git switch wyzwanie_1/2a-jan-kowalski\n"}
              {"git branch --show-current"}
            </code>
          </pre>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Jeśli nie masz lokalnego brancha, utwórz go na podstawie wersji z
            GitHuba:
          </p>
          <code className="mt-2 inline-block max-w-full break-all rounded-lg bg-slate-900 px-3 py-2 font-mono text-sm text-lime-200">
            git switch --track origin/wyzwanie_1/2a-jan-kowalski
          </code>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Teraz pobierz i połącz ewentualne nowsze zmiany ze swojego brancha
            na GitHubie. Jeśli dopiero co utworzyłeś branch poleceniem powyżej,
            możesz pominąć ten pull:
          </p>
          <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-lime-200">
            <code>
              git pull --no-rebase origin wyzwanie_1/2a-jan-kowalski
            </code>
          </pre>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Polecenie aktualizuje lokalny branch wersją z GitHuba przed
            połączeniem z <code>main</code>. Jeśli pojawi się konflikt, rozwiąż
            go według instrukcji poniżej; jeśli nie wiesz, co wybrać, poproś
            nauczyciela.
          </p>
        </article>

        <article className="rounded-2xl border border-violet-200 bg-white p-5 shadow-sm sm:p-6 md:col-span-2">
          <p className="text-sm font-bold uppercase tracking-wider text-violet-700">
            Krok 3 · Wprowadź ewentualne poprawki i wyślij je
          </p>
          <p className="mt-2 leading-7 text-slate-700">
            Jeśli chcesz poprawić kod, zrób to teraz, zanim połączysz swój
            branch z <code>main</code>. Zapisz i wyślij wyłącznie pliki, które
            zmieniłeś. Jeśli niczego nie poprawiasz, pomiń ten krok.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-lime-200">
            <code>
              {"git status --short --branch\n"}
              {"git add .\n"}
              {'git commit -m "Popraw wizytowke"\n'}
              {"git push origin wyzwanie_1/2a-jan-kowalski"}
            </code>
          </pre>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Przed <code>git add .</code> sprawdź wynik <code>git status</code>:
            polecenie doda wszystkie zmienione i nowe pliki z folderu projektu.
            Upewnij się, że są tam tylko zmiany, które chcesz wysłać. Podmień
            nazwę brancha w poleceniu push na swoją i sprawdź aktywny branch.
          </p>
        </article>

        <article className="rounded-2xl border border-violet-200 bg-white p-5 shadow-sm sm:p-6 md:col-span-2">
          <p className="text-sm font-bold uppercase tracking-wider text-violet-700">
            Krok 4 · Na końcu połącz swój branch z aktualnym main
          </p>
          <p className="mt-2 leading-7 text-slate-700">
            Dopiero po zakończeniu kroku 3 (i wysłaniu ewentualnych poprawek)
            pobierz najnowszy stan repozytorium i upewnij się, że nadal jesteś
            na swoim branchu. Następnie wykonaj merge:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-lime-200">
            <code>
              {"git fetch origin\n"}
              {"git branch --show-current\n"}
              {"git merge origin/main"}
            </code>
          </pre>
          <p className="mt-3 leading-7 text-slate-700">
            Sprawdź, czy projekt działa i czy wizytówka nadal jest poprawna.
            Jeśli merge przebiegł bez konfliktów, Git zwykle utworzy merge
            automatycznie. Na koniec wyślij na GitHuba swój branch wraz z
            merge’em:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-lime-200">
            <code>
              {"git status --short --branch\n"}
              {"git branch --show-current\n"}
              {"git push origin wyzwanie_1/2a-jan-kowalski"}
            </code>
          </pre>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Przed push sprawdź, że aktywny branch i nazwa w poleceniu są Twoje.
            Nigdy nie wysyłaj zmian na branch innej osoby ani bezpośrednio na{" "}
            <code>main</code>. Jeśli Git zgłosi błąd, zatrzymaj się i pokaż
            komunikat nauczycielowi.
          </p>
        </article>
      </div>

      <article className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
        <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-900">
          <FiAlertCircle aria-hidden="true" /> Jeśli wystąpi konflikt podczas
          aktualizacji lub merge
        </p>
        <ol className="mt-3 list-inside list-decimal space-y-2 leading-7 text-slate-700">
          <li>
            Git pokaże pliki wymagające poprawy. Otwórz je w edytorze i znajdź
            oznaczenia <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>,{" "}
            <code>=======</code> i <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>.
          </li>
          <li>
            Wybierz lub połącz potrzebne fragmenty, usuń oznaczenia konfliktu i
            zapisz plik. Zachowaj swoje zmiany oraz potrzebne zmiany z drugiej
            strony. Jeśli nie wiesz, co wybrać, poproś nauczyciela.
          </li>
          <li>
            Sprawdź <code>git status</code>, a następnie dodaj zmiany i utwórz
            commit:
            <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-lime-200">
              <code>
                {"git add .\n"}
                {'git commit -m "Rozwiaz konflikt"'}
              </code>
            </pre>
          </li>
        </ol>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Jeśli pull lub merge zakończy się bez konfliktów, nie twórz dodatkowego
          commita dla samego merge’a. Po rozwiązaniu konfliktu kontynuuj od
          miejsca, w którym Git się zatrzymał, a po ukończeniu merge wykonaj
          push z kroku 4.
        </p>
      </article>

      <p className="mt-6 flex items-start gap-3 rounded-2xl bg-violet-200/70 p-5 leading-7 text-violet-950">
        <FiGitMerge aria-hidden="true" className="mt-1 shrink-0" />
        <span>
          Kolejność ma znaczenie: najpierw zaktualizuj własny branch, w razie
          potrzeby popraw kod, zacommituj i wypchnij te zmiany, a dopiero na
          końcu połącz branch z <code>origin/main</code> i wypchnij wynik.
          Pracuj uważnie, sprawdzaj wyniki i nie wykonuj merge na{" "}
          <code>main</code>.
        </span>
      </p>

      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-violet-800">
            Ściąga z poleceń
          </p>
          <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
            Co robi każde polecenie?
          </h3>
          <p className="mt-3 leading-7 text-slate-600">
            Polecenia wpisuj w terminalu Git Bash w VS Code, w folderze
            projektu, jedno po drugim. Zastąp przykładowe nazwy własną nazwą
            brancha.
          </p>
        </div>

        <dl className="mt-6 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <dt className="font-mono text-sm font-bold text-violet-800">
              git status --short --branch
            </dt>
            <dd className="mt-2 text-sm leading-6 text-slate-700">
              Pokazuje aktywny branch i stan plików. <code>--short</code>{" "}
              skraca listę zmian, a <code>--branch</code> dodaje informacje o
              branchu i jego relacji z GitHubem. Użyj tego, by sprawdzić, czy
              pracujesz we właściwym miejscu i czy są zmienione pliki.
            </dd>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <dt className="font-mono text-sm font-bold text-violet-800">
              git branch --show-current
            </dt>
            <dd className="mt-2 text-sm leading-6 text-slate-700">
              Wyświetla nazwę aktywnego, lokalnego brancha. Przed merge i push
              sprawdź, czy to Twój branch, a nie <code>main</code> ani branch
              innej osoby.
            </dd>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <dt className="font-mono text-sm font-bold text-violet-800">
              git fetch origin
            </dt>
            <dd className="mt-2 text-sm leading-6 text-slate-700">
              Pobiera zdalne informacje i commity z repozytorium o nazwie{" "}
              <code>origin</code> (zwykle GitHub), ale nie scala ich z Twoim
              aktualnym branchem ani nie zmienia plików roboczych.
            </dd>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <dt className="font-mono text-sm font-bold text-violet-800">
              git switch NAZWA-BRANCHA
            </dt>
            <dd className="mt-2 text-sm leading-6 text-slate-700">
              Przełącza na istniejący lokalnie branch. W miejsce{" "}
              <code>NAZWA-BRANCHA</code> wpisz jego dokładną nazwę, np.{" "}
              <code>wyzwanie_1/2a-jan-kowalski</code>.
            </dd>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <dt className="font-mono text-sm font-bold text-violet-800">
              git switch --track origin/NAZWA-BRANCHA
            </dt>
            <dd className="mt-2 text-sm leading-6 text-slate-700">
              Tworzy lokalny branch na podstawie brancha z GitHuba i przełącza
              na niego. <code>--track</code> ustawia powiązanie, dzięki któremu
              Git wie, z którym zdalnym branchem synchronizować lokalny. Użyj
              tego wariantu, jeśli branch nie istnieje jeszcze lokalnie.
            </dd>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <dt className="font-mono text-sm font-bold text-violet-800">
              git pull --no-rebase origin NAZWA-BRANCHA
            </dt>
            <dd className="mt-2 text-sm leading-6 text-slate-700">
              Pobiera i scala commity z podanego brancha na GitHubie do
              aktualnego lokalnego brancha. <code>origin</code> to nazwa
              zdalnego repozytorium, a <code>--no-rebase</code> oznacza
              połączenie przez merge, zamiast przepisywania historii przez
              rebase. Użyj, gdy lokalny branch może być starszy od wersji na
              GitHubie.
            </dd>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <dt className="font-mono text-sm font-bold text-violet-800">
              git merge origin/main
            </dt>
            <dd className="mt-2 text-sm leading-6 text-slate-700">
              Scala zmiany z pobranego brancha <code>main</code> na GitHubie z
              aktualnym branchem. <code>origin/main</code> oznacza lokalną
              informację o zdalnym branchu <code>main</code>; dlatego przed
              merge wykonaj <code>git fetch origin</code>. Merge odbywa się na
              branchu, na którym aktualnie jesteś.
            </dd>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <dt className="font-mono text-sm font-bold text-violet-800">
              git add .
            </dt>
            <dd className="mt-2 text-sm leading-6 text-slate-700">
              Dodaje do następnego commita wszystkie nowe i zmienione pliki w
              bieżącym folderze projektu. Kropka oznacza „ten folder i jego
              zawartość”. Przed użyciem sprawdź <code>git status</code> i
              upewnij się, że nie dodasz przypadkowych zmian.
            </dd>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <dt className="font-mono text-sm font-bold text-violet-800">
              git commit -m &quot;OPIS&quot;
            </dt>
            <dd className="mt-2 text-sm leading-6 text-slate-700">
              Zapisuje przygotowane zmiany jako commit. Flaga <code>-m</code>{" "}
              pozwala podać jego krótki opis w cudzysłowie. Przy konflikcie
              twórz commit dopiero po poprawieniu i dodaniu plików; przy
              bezkonfliktowym merge Git zwykle tworzy commit samodzielnie.
            </dd>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4 md:col-span-2">
            <dt className="font-mono text-sm font-bold text-violet-800">
              git push origin NAZWA-BRANCHA
            </dt>
            <dd className="mt-2 text-sm leading-6 text-slate-700">
              Wysyła commity lokalnego brancha na GitHuba. <code>origin</code>{" "}
              wskazuje repozytorium, a <code>NAZWA-BRANCHA</code> — dokładnie
              branch, który ma zostać zaktualizowany. Sprawdź nazwę dwa razy i
              nigdy nie wpisuj tu <code>main</code> ani brancha kolegi.
            </dd>
          </div>
        </dl>

        <p className="mt-5 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          <strong>Ważne:</strong> <code>--short</code>, <code>--branch</code>,{" "}
          <code>--show-current</code>, <code>--track</code>,{" "}
          <code>--no-rebase</code> i <code>-m</code> to opcje (flagi)
          zmieniające działanie polecenia Git. Nie dopisuj ich losowo i
          zachowuj spacje oraz kolejność taką, jak w przykładach. Jeśli
          polecenie zgłosi błąd albo wynik jest nieoczekiwany, zatrzymaj się i
          pokaż go nauczycielowi.
        </p>
      </div>
    </section>
  );
}
