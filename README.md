# ZST Koduj

Projekt strony internetowej tworzony podczas warsztatów kodowania w ZST.

## Uruchomienie projektu

### 1. Zainstaluj potrzebne narzędzia

Na komputerze muszą być zainstalowane:

- [Node.js](https://nodejs.org/) w wersji 20.9 lub nowszej,
- [Git](https://git-scm.com/),
- edytor kodu, na przykład [Visual Studio Code](https://code.visualstudio.com/).

### 2. Otwórz projekt

Otwórz folder projektu w Visual Studio Code, a następnie wybierz **Terminal → Nowy terminal**. Jako terminala użyj **Git Bash** albo **Wiersza polecenia (cmd)**. Upewnij się, że terminal jest otwarty w głównym folderze projektu — tym, w którym znajduje się plik `package.json`.

### 3. Zainstaluj zależności

W terminalu uruchom:

```bash
npm install
```

Ten krok wykonuje się po pobraniu projektu lub po zmianach w jego zależnościach.

### 4. Uruchom stronę

Wpisz:

```bash
npm run dev
```

Gdy serwer się uruchomi, otwórz w przeglądarce adres:

[http://localhost:3000](http://localhost:3000)

Nie zamykaj terminala podczas pracy. Aby zatrzymać serwer, kliknij terminal i naciśnij **Ctrl+C**.

## Przydatne polecenia

```bash
npm run dev     # uruchamia stronę w trybie pracy
npm run lint    # sprawdza kod pod kątem błędów
npm run build   # przygotowuje produkcyjną wersję strony
```

## Gdzie edytować stronę?

- `src/app/page.js` — strona główna,
- `src/components/general/` — wspólne sekcje strony głównej, w tym opis wyzwania i konfigurację GitHub,
- `src/app/nauczyciel/page.js` — wizytówka nauczyciela,
- `src/app/klasa-imie-nazwisko/page.js` — szablon wizytówki ucznia; uczeń zmienia nazwę folderu na własną,
- `src/components/klasa-imie-nazwisko/` — komponenty szablonu; uczeń zmienia nazwę folderu na taką samą jak folder strony,
- `src/components/general/ProfileLayout.js` — wspólny układ wizytówek, którego nie trzeba kopiować do folderu ucznia,
- `src/app/globals.css` — style globalne.

Projekt korzysta z Next.js, Reacta i Tailwinda CSS. Po zapisaniu zmian w trybie `npm run dev` przeglądarka odświeża stronę automatycznie.
