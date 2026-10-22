import { FiKey, FiShield } from "react-icons/fi";

export default function GitAccountSetup() {
  return (
    <section className="mx-4 mb-16 rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:mx-8 sm:px-10 sm:py-12 lg:mx-auto lg:mb-20 lg:max-w-6xl">
      <div className="max-w-3xl">
        <p className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-800">
          <FiKey aria-hidden="true" /> Konfiguracja Git i GitHuba
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Przygotuj konto do pracy z repozytorium
        </h2>
        <p className="mt-3 leading-7 text-slate-600">
          Te kroki wykonaj raz na swoim komputerze. Instrukcja zakłada pracę w
          Git Bash. Najpierw sklonujesz repozytorium, potem utworzysz własny
          branch i wyślesz go do repozytorium warsztatów.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl bg-slate-50 p-5 sm:p-6">
          <p className="text-sm font-bold text-violet-700">
            1 · Konto i dostęp do repozytorium
          </p>
          <ol className="mt-3 list-inside list-decimal space-y-2 leading-7 text-slate-700">
            <li>Utwórz konto na GitHubie i potwierdź swój adres e-mail.</li>
            <li>
              Przekaż nauczycielowi swój login GitHub i poczekaj na zaproszenie
              do repozytorium.
            </li>
            <li>
              Zaakceptuj zaproszenie. Bez przyznanego dostępu nie będzie można
              wysyłać branchy — sam klucz SSH nie nadaje uprawnień.
            </li>
          </ol>
        </article>

        <article className="rounded-2xl bg-slate-50 p-5 sm:p-6">
          <p className="text-sm font-bold text-violet-700">
            2 · Utwórz osobny klucz SSH dla konta szkolnego
          </p>
          <p className="mt-3 leading-7 text-slate-700">
            Osobny klucz pozwala używać tego konta obok innych profili GitHub
            bez wylogowywania się i bez nadpisywania dotychczasowego klucza.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-lime-200">
            <code>
              {"mkdir -p ~/.ssh\n"}
              {
                'ssh-keygen -t ed25519 -C "jan@example.com" -f ~/.ssh/id_ed25519_warsztaty'
              }
            </code>
          </pre>
          <p className="mt-3 leading-7 text-slate-700">
            Podmień e-mail na swój.             Gdy pojawi się pytanie o hasło do klucza, możesz ustawić hasło i je
            zapamiętać albo nacisnąć Enter dwa razy, aby pominąć hasło. Następnie
            wyświetl klucz publiczny:
          </p>
          <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-lime-200">
            <code>cat ~/.ssh/id_ed25519_warsztaty.pub</code>
          </pre>
          <p className="mt-3 leading-7 text-slate-700">
            Skopiuj cały wynik i dodaj go na GitHubie w{" "}
            <strong>Settings → SSH and GPG keys → New SSH key</strong>. Dodawaj
            tylko plik <code>.pub</code> — prywatnego klucza bez tego rozszerzenia
            nikomu nie udostępniaj.
          </p>
        </article>
      </div>

      <article className="mt-4 rounded-2xl bg-slate-50 p-5 sm:p-6">
        <p className="text-sm font-bold text-violet-700">
          3 · Powiedz Gitowi, którego klucza użyć
        </p>
        <p className="mt-3 leading-7 text-slate-700">
          Otwórz plik <code>~/.ssh/config</code> w edytorze. Jeśli go nie ma,
          utwórz go i dopisz:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-lime-200">
          <code>
            {"Host github-warsztaty\n"}
            {"  HostName github.com\n"}
            {"  User git\n"}
            {"  IdentityFile ~/.ssh/id_ed25519_warsztaty\n"}
            {"  IdentitiesOnly yes"}
          </code>
        </pre>
        <p className="mt-3 leading-7 text-slate-700">
          Sprawdź, czy GitHub rozpoznaje właściwe konto:
        </p>
        <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-lime-200">
          <code>ssh -T git@github-warsztaty</code>
        </pre>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Przy pierwszym połączeniu wpisz <code>yes</code>, jeśli Git zapyta o
          zaufanie do GitHuba. Poprawny wynik powita Cię loginem konta.
        </p>
      </article>

      <article className="mt-4 rounded-2xl bg-slate-50 p-5 sm:p-6">
        <p className="text-sm font-bold text-violet-700">
          4 · Sklonuj repozytorium
        </p>
        <p className="mt-3 leading-7 text-slate-700">
          Wybierz w Git Bash folder, w którym chcesz umieścić projekt. Wpisz
          polecenie klonowania, a następnie przejdź do nowego folderu projektu:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-lime-200">
          <code>
            {"git clone git@github-warsztaty:kmarszalek-zst/warsztaty-kodowania.git\n"}
            {"cd warsztaty-kodowania"}
          </code>
        </pre>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Jeśli repozytorium jest już sklonowane na komputerze, nie klonuj go
          ponownie — przejdź w Git Bash do jego folderu.
        </p>
      </article>

      <article className="mt-4 rounded-2xl bg-slate-50 p-5 sm:p-6">
        <p className="text-sm font-bold text-violet-700">
          5 · Ustaw autora commitów w tym repozytorium
        </p>
        <p className="mt-3 leading-7 text-slate-700">
          Upewnij się, że terminal jest w folderze projektu. Podaj swoje dane.
          Ustawienie dotyczy tylko tego repozytorium i nie zmienia innych kont
          Git:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-lime-200">
          <code>
            {'git config user.name "Jan Kowalski"\n'}
            {'git config user.email "jan@example.com"'}
          </code>
        </pre>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Użyj adresu e-mail dodanego do konta GitHub. To ustawia autora commitów;
          konto używane do połączenia sprawdziłeś w kroku 3.
        </p>
      </article>

      <article className="mt-4 rounded-2xl bg-slate-50 p-5 sm:p-6">
        <p className="text-sm font-bold text-violet-700">
          6 · Utwórz branch, zapisz i wyślij zmiany
        </p>
        <p className="mt-3 leading-7 text-slate-700">
          W folderze projektu utwórz swój branch, a po wykonaniu zadania dodaj
          zmiany, utwórz commit i wyślij branch:
        </p>
        <p className="mt-3 leading-7 text-slate-700">
          Przykład dla Jana Kowalskiego z klasy 2A:
        </p>
        <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-lime-200">
          <code>
            git switch -c wyzwanie_1/2a-jan-kowalski
            {"\n"}git add .
            {"\n"}git commit -m &quot;Dodaj wizytowke Jana Kowalskiego&quot;
            {"\n"}git push -u origin wyzwanie_1/2a-jan-kowalski
          </code>
        </pre>
        <p className="mt-3 leading-7 text-slate-700">
          Zastąp nazwę brancha i treść commita swoimi danymi. Polecenie{" "}
          <code>git switch -c</code> wykonaj tylko raz, przed rozpoczęciem
          pracy.
        </p>
      </article>

      <p className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-5 leading-7 text-amber-950">
        <FiShield aria-hidden="true" className="mt-1 shrink-0" />
        <span>
          Jeśli pojawi się błąd <code>Permission denied</code> lub <code>403</code>,
          sprawdź, czy zaakceptowałeś zaproszenie do repozytorium i czy test SSH
          pokazuje właściwy login GitHub. W razie problemu poproś nauczyciela o
          sprawdzenie dostępu.
        </span>
      </p>
    </section>
  );
}
