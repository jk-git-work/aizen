# AIZEN layout — przewodnik po Tailwind CSS

Ten dokument opisuje układ AIZEN krok po kroku. Jest przeznaczony dla osoby, która dopiero poznaje Tailwind CSS, React i TypeScript. Strona aplikacji jest po angielsku, a wyjaśnienia poniżej po polsku.

## 1. Co zbudowaliśmy

Układ składa się z trzech głównych części:

1. **Header** u góry z nazwą AIZEN i przyciskiem motywu.
2. **Sidebar** po lewej z nawigacją.
3. **Main content** po prawej, gdzie później możesz renderować strony aplikacji.

Motyw jasny nazywa się **Arancar Arc** i używa bieli, jasnych szarości oraz delikatnych liliowych powierzchni. Motyw ciemny nazywa się **Muken** i używa niemal czerni, ciemnych szarości oraz jasnego tekstu. Fiolet i fuksja są akcentami w obu trybach.

Ważne: motyw jest inspiracją kolorystyczną. Nazwy Arancar Arc i Muken opisują warianty UI, nie są osobnymi funkcjami aplikacji.

## 2. Gdzie szukać kodu

| Plik | Odpowiedzialność |
| --- | --- |
| `src/index.css` | Import Tailwinda, kolory projektu i wariant ciemny. |
| `src/layouts/MainLayout.tsx` | Główny szkielet, stan motywu, aktywna strona i treść przykładowa. |
| `src/components/layout/PageHeader.tsx` | Pasek u góry oraz przycisk zmiany motywu. |
| `src/components/navigation/NavBar.tsx` | Lista dostępnych pozycji menu. |
| `src/components/navigation/NavItem.tsx` | Wygląd i zachowanie pojedynczej pozycji menu. |
| `src/components/ui/JobCard.tsx` | Podsumowanie pojedynczego joba na liście. |
| `src/components/ui/DataField.tsx` | Tytuł i wartość jednego pola danych. |
| `src/components/ui/JobAddModal.tsx` | Modal formularza dodawania jednego joba lub wielu jobów. |
| `src/app/app.tsx` | Główny komponent React, który renderuje layout. |
| `src/main.tsx` | Punkt wejścia aplikacji oraz import globalnego CSS. |
| `index.html` | Tytuł karty przeglądarki i początkowy HTML. |

## 3. Jak Tailwind trafia do aplikacji

Projekt używa Tailwind CSS 4 z integracją Vite. W `src/index.css` znajduje się:

```css
@import "tailwindcss";
```

`src/main.tsx` importuje ten plik CSS. Vite uruchamia Tailwind podczas pracy aplikacji i kompilacji, a klasy użyte w plikach React są zamieniane na CSS.

Na przykład:

```tsx
<div className="flex gap-4 p-4">
```

`flex`, `gap-4` oraz `p-4` to gotowe klasy Tailwinda. W zwykłym CSS odpowiednikiem byłoby ustawienie `display: flex`, odstępu między elementami i wewnętrznego marginesu.

W React używamy atrybutu `className`, a nie `class`, ponieważ `class` jest zarezerwowanym słowem JavaScript.

## 4. Kolory przez `@theme`

Kolory projektu są nazwane semantycznie w `src/index.css`:

```css
@theme {
  --color-aizen-bg: #faf9fc;
  --color-aizen-panel: #ffffff;
  --color-aizen-surface: #f3f0f7;
  --color-aizen-border: #e7e2ed;
  --color-aizen-text: #211b2b;
  --color-aizen-muted: #766f80;
  --color-aizen-purple: #7c3aed;
  --color-aizen-purple-hover: #6d28d9;
  --color-aizen-fuchsia: #d946ef;
}
```

Tailwind CSS 4 tworzy z tych tokenów klasy. Przykłady:

| Token | Przykładowa klasa | Zastosowanie |
| --- | --- | --- |
| `--color-aizen-bg` | `bg-aizen-bg` | Tło strony lub karty. |
| `--color-aizen-panel` | `bg-aizen-panel` | Tło panelu, np. sidebaru. |
| `--color-aizen-surface` | `bg-aizen-surface` | Subtelnie wyróżniona powierzchnia. |
| `--color-aizen-border` | `border-aizen-border` | Obramowania. |
| `--color-aizen-text` | `text-aizen-text` | Główny kolor tekstu. |
| `--color-aizen-muted` | `text-aizen-muted` | Opisy i tekst drugorzędny. |
| `--color-aizen-purple` | `text-aizen-purple`, `bg-aizen-purple` | Główny akcent. |
| `--color-aizen-fuchsia` | `text-aizen-fuchsia`, `bg-aizen-fuchsia` | Dodatkowy akcent. |

Nazwy są celowo opisowe. `text-aizen-muted` mówi, do czego kolor służy, zamiast wiązać komponent z konkretną wartością typu `text-gray-500`. Dzięki temu możesz zmienić paletę w jednym miejscu.

### Paleta motywów

| Rola | Arancar Arc — jasny | Muken — ciemny |
| --- | --- | --- |
| Tło aplikacji | `#faf9fc` | `#09080c` |
| Panel | `#ffffff` | `#111015` |
| Wyróżniona powierzchnia | `#f3f0f7` | `#19171f` |
| Obramowanie | `#e7e2ed` | `#2a2731` |
| Główny tekst | `#211b2b` | `#f6f3f8` |
| Tekst drugorzędny | `#766f80` | `#aaa4b2` |
| Fioletowy akcent | `#7c3aed` | `#7c3aed` |
| Fuksjowy akcent | `#d946ef` | `#d946ef` |

## 5. Jak działa zmiana motywu

W `MainLayout.tsx` stan React przechowuje informację, czy włączony jest motyw ciemny:

```tsx
const [darkMode, setDarkMode] = useState(false);
```

- `useState(false)` oznacza, że strona zaczyna w jasnym motywie.
- `darkMode` to bieżąca wartość: `true` albo `false`.
- `setDarkMode(...)` aktualizuje tę wartość i każe Reactowi narysować komponent ponownie.

Główny element dodaje klasę `theme-dark` tylko wtedy, gdy `darkMode` ma wartość `true`:

```tsx
<div className={`... ${darkMode ? "theme-dark" : ""}`}>
```

To wyrażenie używa operatora warunkowego: `warunek ? wartość_gdy_prawda : wartość_gdy_fałsz`.

W CSS `.theme-dark` nadpisuje tokeny kolorów, na przykład:

```css
.theme-dark {
  --color-aizen-bg: #09080c;
  --color-aizen-panel: #111015;
  --color-aizen-text: #f6f3f8;
}
```

Ważne jest, że nadpisujemy te same zmienne `--color-aizen-*`, z których korzystają klasy Tailwinda. Dzięki temu element z `bg-aizen-panel` automatycznie zmienia kolor, kiedy jego przodek dostanie `theme-dark`.

Przycisk znajduje się w `PageHeader`. Otrzymuje `darkMode` oraz funkcję `onToggleTheme` jako propsy. Kliknięcie uruchamia:

```tsx
setDarkMode((current) => !current)
```

Funkcja odwraca poprzednią wartość. `false` zmienia na `true`, a `true` na `false`. Użycie poprzedniej wartości (`current`) jest bezpiecznym sposobem na zmianę stanu zależną od jego poprzedniej wartości.

Wariant `@custom-variant theme-dark` w CSS umożliwia też klasy typu `theme-dark:...`, gdy komponent potrzebuje pojedynczej, dodatkowej zmiany. Większość interfejsu nie potrzebuje takich wyjątków, bo korzysta z tokenów semantycznych.

## 6. Szkielet układu i przydatne klasy

Najważniejsze klasy głównego kontenera:

```text
flex flex-col h-dvh min-h-[480px] overflow-hidden
```

- `flex` włącza układ Flexbox.
- `flex-col` układa dzieci pionowo: najpierw header, potem reszta strony.
- `h-dvh` ustawia wysokość na wysokość widocznego okna przeglądarki.
- `min-h-[480px]` ustawia minimalną wysokość 480 pikseli. Nawiasy pozwalają wpisać własną wartość.
- `overflow-hidden` ukrywa przewijanie całego dokumentu; przewijanie jest wewnątrz panelu treści.

Obszar pod headerem ma klasy `flex min-h-0 flex-1`:

- `flex-1` wypełnia pozostałą wysokość.
- `min-h-0` pozwala dziecku zmniejszyć się poniżej domyślnej wysokości treści Flexboxa. Bez tego `overflow-y-auto` często nie tworzy oczekiwanego wewnętrznego przewijania.
- `gap-3` dodaje odstęp między sidebar i treść.

Sidebar ma `w-16 sm:w-56`. Na wąskim ekranie zajmuje mało miejsca i pokazuje inicjały ikon. Od breakpointu `sm` ma szerokość 56 jednostek Tailwinda i pokazuje etykiety.

Main content używa `min-w-0 flex-1 overflow-y-auto`:

- `flex-1` zabiera pozostałą szerokość obok sidebaru.
- `min-w-0` pozwala zawartości zwęzić się bez wypychania całego layoutu poza ekran.
- `overflow-y-auto` dodaje pionowy scrollbar tylko wtedy, gdy treść jest za wysoka.

## 7. Responsywność: prefiksy `sm:` i `md:`

Tailwind stosuje klasy bez prefiksu na wszystkich rozmiarach, a klasy z prefiksem od danego breakpointu wzwyż.

Przykład:

```text
grid gap-4 md:grid-cols-2
```

Domyślnie karty układają się w jednej kolumnie. Od breakpointu `md` układają się w dwie kolumny.

Inny przykład:

```text
w-16 sm:w-56
```

Sidebar jest wąski na telefonie, a szerszy od breakpointu `sm`. W `NavItem.tsx` klasa `hidden sm:inline` ukrywa tekst pozycji menu na telefonie, ale pokazuje go na większych ekranach.

## 8. Komponenty i propsy React

Layout składa się z mniejszych komponentów:

```text
App
└── MainLayout
    ├── PageHeader
    ├── NavBar
    │   └── NavItem (wiele pozycji)
    └── main (treść strony)
```

**Propsy** to dane lub funkcje przekazywane z komponentu rodzica do dziecka. `PageHeader` dostaje:

- `darkMode: boolean` — czy aktywny jest motyw ciemny;
- `onToggleTheme: () => void` — funkcję wywoływaną po kliknięciu przycisku.

Typy propsów są opisane interfejsem TypeScript, np. `PageHeaderProps`. To pomaga wykryć błędne dane jeszcze podczas kompilacji.

## 9. Jak działa nawigacja

Lista pozycji menu znajduje się na początku `NavBar.tsx`:

```tsx
const navigationItems = [
  { text: "Dashboard", icon: IconDashboard },
  { text: "Generate", icon: IconGenerate },
];
```

Każdy obiekt ma etykietę oraz adres SVG zaimportowany na początku `NavBar.tsx`. `map` zamienia każdy element tablicy w komponent `NavItem`:

```tsx
navigationItems.map((item) => (
  <NavItem key={item.text} ... />
))
```

`key` pomaga Reactowi rozpoznawać elementy listy, gdy lista się zmienia. Stan `activePage` w `MainLayout` zawiera nazwę aktualnie wybranej pozycji. Po kliknięciu `onNavigate` aktualizuje ten stan, a nagłówek treści pokazuje wybraną nazwę.

Ta wersja przełącza wyłącznie lokalny stan i nagłówek. Nie jest jeszcze routingiem URL. Gdy dodasz prawdziwe strony, możesz zastąpić ten mechanizm routerem lub warunkowo renderować komponenty stron.

### Dodawanie pozycji menu

Dodaj kolejny obiekt w `navigationItems`:

```tsx
{ text: "Settings", icon: "S" },
```

Lista zostanie automatycznie wyrenderowana. Nie musisz ręcznie kopiować przycisku.

### Kolorowanie ikon SVG w nawigacji

`NavItem.tsx` dostaje `icon` jako adres SVG i pokazuje go jako maskę CSS. Maska wykorzystuje kształt SVG, a kolor pochodzi z klasy Tailwinda na elemencie `span`, np. `bg-aizen-purple`. Dzięki temu ikona może reagować na stan aktywny lub hover.

Zwykły `<img src={icon}>` wyświetla plik jako obraz. Klasa `text-aizen-purple` nie zmienia wypełnienia wpisanego na stałe w SVG. Maskowanie rozdziela te dwie rzeczy: SVG określa kształt, a `bg-*` kolor. Dekoracyjny element ma `aria-hidden="true"`, a przycisk zachowuje widoczną etykietę.

## 10. Jak czytać klasy jednego elementu

Przykład przycisku menu:

```text
flex h-10 w-full items-center justify-center gap-3 rounded-lg px-2
```

- `flex` — dzieci są układane Flexboxem;
- `h-10` — wysokość;
- `w-full` — pełna szerokość rodzica;
- `items-center` — wyrównanie w pionie;
- `justify-center` — wyrównanie w poziomie;
- `gap-3` — odstęp między ikoną i tekstem;
- `rounded-lg` — zaokrąglone rogi;
- `px-2` — poziomy padding.

Klasy `hover:bg-aizen-surface` i `focus-visible:outline-*` są wariantami stanu:

- `hover:` działa, gdy wskaźnik myszy znajduje się nad elementem;
- `focus-visible:` pokazuje obrys klawiaturowy, kiedy użytkownik przechodzi po stronie klawiszem Tab.

## 11. Jak zmienić wygląd

### Zmiana kolorów

Edytuj wartości w `@theme` dla Arancar Arc i wartości w `.theme-dark` dla Muken. Zachowaj te same nazwy `--color-aizen-*`, aby klasy w komponentach nadal działały.

### Zmiana głównego akcentu

Zmień `--color-aizen-purple` w `@theme`. Ponieważ fiolet jest używany przez klasy `text-aizen-purple`, `bg-aizen-purple` oraz obrysy fokusowe, zmiana tokenu obejmie wszystkie te miejsca.

### Zmiana szerokości sidebaru

W `MainLayout.tsx` zmień `w-16` lub `sm:w-56`. Skala Tailwinda używa remów: `w-56` to 14 rem. Możesz też użyć wartości własnej, np. `w-[15rem]`.

### Zmiana odstępów i zaokrągleń

`p-5` to padding ze skali Tailwinda, `gap-4` to odstęp pomiędzy dziećmi, a `rounded-xl` ustawia większe zaokrąglenie. Zmieniając te klasy, możesz szybko dopasować gęstość layoutu.

### Zastąpienie przykładowej treści

W `MainLayout.tsx` zamień sekcję z kartami na komponent strony. Jeśli strona ma się zmieniać wraz z pozycją menu, możesz utworzyć mapę nazw do komponentów albo wprowadzić router.

## 12. Dostępność i dobre nawyki

- `<header>`, `<aside>`, `<nav>` i `<main>` opisują role części strony przeglądarce i technologiom asystującym.
- Przycisk motywu ma `aria-label` i `aria-pressed`, więc jego cel i stan są dostępne dla czytnika ekranu.
- Aktywna pozycja menu ma `aria-current="page"`.
- Przyciski są prawdziwymi elementami `<button>`, więc działają z klawiaturą bez dodatkowego kodu.
- `focus-visible` sprawia, że użytkownik klawiatury widzi, który element jest zaznaczony.
- Powtarzające się kolory są tokenami, a powtarzające się elementy menu są komponentem. To ułatwia późniejsze zmiany.

## 13. Jak uruchomić aplikację

W terminalu, w katalogu projektu, uruchom:

```bash
npm run dev
```

Vite pokaże lokalny adres, zwykle `http://localhost:5173`. Zatrzymasz serwer skrótem `Ctrl+C`.

Kompilację produkcyjną uruchomisz przez:

```bash
npm run build
```

W tym repozytorium kompilacja TypeScript może zgłosić istniejące błędy importów w `src/JobPage.tsx` (`./Dtos/JobDto` i `./Components/JobItem`), które nie są częścią layoutu. Samą kompilację widoków Vite można sprawdzić przez:

```bash
node_modules/.bin/vite build
```

## 14. Słowniczek

| Termin | Znaczenie |
| --- | --- |
| Utility class | Mała klasa Tailwinda opisująca jedną właściwość, np. `p-4` albo `flex`. |
| Token | Nazwana wartość projektu, np. `aizen-purple`, z której generowane są klasy. |
| Breakpoint | Granica szerokości ekranu, np. `sm` lub `md`. |
| Variant | Modyfikator klasy zależny od stanu lub ekranu, np. `hover:` i `sm:`. |
| Component | Reużywalny fragment interfejsu zapisany jako funkcja React. |
| Props | Dane przekazywane komponentowi przez rodzica. |
| State | Dane, które mogą się zmieniać i powodują ponowne renderowanie Reacta. |
| Semantic HTML | Znaczniki takie jak `header`, `nav` i `main`, które opisują rolę treści. |

## 15. Lista z rozwijanymi szczegółami: jak ją nazwać

To, co opisujesz, najczęściej nazywa się **expandable list** albo **list with expandable details** — listą elementów, w której można rozwinąć szczegóły. Ponieważ elementem jest zadanie generowania, dobra nazwa dla strony to **Jobs** albo **Job history**, a nazwa pojedynczego komponentu to **JobCard** lub **ExpandableJobCard**.

Termin **disclosure** opisuje zachowanie: kontrolka pokazuje lub ukrywa dodatkową treść. Termin **accordion** jest właściwy, gdy kilka takich elementów współdzieli zasadę „otwarty może być tylko jeden naraz”. Jeśli wiele zadań może być rozwiniętych jednocześnie, masz expandable list, ale nie klasyczny accordion.

Jeśli wiersze mają prawdziwe kolumny, np. Job ID, Status, Model i Created, nazwij widok **expandable data table**. Jeśli każdy zwinięty element jest bardziej kartą z kilkoma polami, nazwij go **expandable card list**. Na start dla Twoich jobów polecam układ:

> **Jobs page → expandable job list → jeden JobCard na każdy job.**

### Co powinno być widoczne przed rozwinięciem

Zwiń widok do najważniejszych informacji, które pomagają znaleźć element:

- status, np. Running, Completed albo Failed;
- krótki prompt lub nazwę zadania;
- model;
- datę utworzenia;
- przycisk lub chevron pokazujący, że wiersz można rozwinąć.

Po rozwinięciu pokaż dalsze szczegóły, np. pełny prompt, seed, liczbę kroków, czas rozpoczęcia i zakończenia, plik wynikowy oraz komunikat błędu. Nie musisz dodawać modala do samego rozwijania — dodatkowa treść może pojawić się pod wierszem.

### Dwa różne zachowania rozwijania

**Niezależne karty:** każdy `JobCard` ma własny stan `isExpanded`. Użytkownik może rozwinąć kilka jobów równocześnie. To najprostszy wzorzec.

**Accordion:** komponent rodzica przechowuje `expandedJobId`. Kliknięcie nowego wiersza zastępuje poprzednie ID, więc otwarty jest maksymalnie jeden job. Wybierz ten wariant, jeżeli lista jest długa i chcesz ograniczyć jej wysokość.

## 16. Jak powiązać listę z danymi backendu

Backend zwykle zwraca tablicę obiektów. Frontend przechodzi po niej przez `map` i tworzy po jednej karcie na każdy obiekt. Schemat myślowy wygląda tak:

```text
Backend response → React state → jobs.map(...) → JobCard
```

Przykładowy typ danych po stronie UI może wyglądać tak:

```tsx
type JobStatus = "Queued" | "Running" | "Completed" | "Failed";

interface Job {
  id: string;
  status: JobStatus;
  prompt: string;
  model: string;
  createdAt: string;
  seed: number;
  steps: number;
  resultUrl?: string;
  errorMessage?: string;
}
```

`id` identyfikuje rekord i służy jako stabilny React `key`. `status` jest union type: może przyjmować jedną z czterech jawnie wymienionych wartości. Znak `?` przy `resultUrl` oznacza pole opcjonalne — nie każdy job musi mieć gotowy plik. Dostosuj nazwy oraz typy do prawdziwego kontraktu API.

Przykład renderowania listy:

```tsx
{jobs.map((job) => (
  <JobCard key={job.id} job={job} />
))}
```

`JobCard` dostaje tylko jeden obiekt `job`, więc nie musi wiedzieć, skąd dane pochodzą ani jak pobiera się je z serwera. To rozdziela odpowiedzialności:

- `JobsPage` pobiera dane i obsługuje loading, error oraz pustą listę;
- `JobList` układa wiele elementów i nadaje każdemu `key`;
- `JobCard` pokazuje jeden rekord i jego szczegóły.

Warto zaplanować cztery stany strony: **loading** (pobieranie), **error** (błąd), **empty** (brak jobów) i **success** (lista danych). Wiersz nie powinien próbować udawać poprawnej listy, gdy zapytanie jeszcze trwa albo zakończyło się błędem.

### Uwaga o danych API

Backend może zwracać nazwy w formacie `created_at`, a frontend używać `createdAt`. To normalne. Możesz odwzorować DTO z API na prostszy model UI w jednym miejscu, gdy odbierzesz odpowiedź. Dzięki temu komponenty widoku nie muszą zawierać logiki konwersji nazw i formatowania dat.

## 17. Przykład pojedynczego rozwijanego JobCard

Poniższy przykład pokazuje podstawowy wzorzec. To kod do nauki, nie jest jeszcze implementacją w projekcie:

```tsx
import { useState } from "react";

interface Job {
  id: string;
  status: "Queued" | "Running" | "Completed" | "Failed";
  prompt: string;
  model: string;
  seed: number;
  steps: number;
}

interface JobCardProps {
  job: Job;
}

function JobCard({ job }: JobCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = `job-details-${job.id}`;

  return (
    <article className="overflow-hidden rounded-xl border border-aizen-border bg-aizen-panel">
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={detailsId}
        onClick={() => setIsExpanded((current) => !current)}
        className="flex w-full items-center justify-between gap-4 p-4 text-left hover:bg-aizen-surface focus-visible:outline-2 focus-visible:outline-aizen-purple"
      >
        <span className="min-w-0">
          <span className="block truncate font-medium">{job.prompt}</span>
          <span className="mt-1 block text-sm text-aizen-muted">
            {job.status} · {job.model}
          </span>
        </span>
        <span aria-hidden="true" className="shrink-0 text-aizen-purple">
          {isExpanded ? "−" : "+"}
        </span>
      </button>

      {isExpanded && (
        <div id={detailsId} className="grid gap-3 border-t border-aizen-border p-4 text-sm sm:grid-cols-2">
          <p><span className="text-aizen-muted">Seed:</span> {job.seed}</p>
          <p><span className="text-aizen-muted">Steps:</span> {job.steps}</p>
          <p className="sm:col-span-2"><span className="text-aizen-muted">Job ID:</span> {job.id}</p>
        </div>
      )}
    </article>
  );
}
```

Co tu się dzieje:

1. `useState(false)` ustawia kartę na początku jako zwiniętą.
2. Przycisk jest nagłówkiem karty. Kliknięcie odwraca `isExpanded`.
3. `aria-expanded` informuje technologie asystujące, czy sekcja jest otwarta.
4. `aria-controls` wskazuje ID sekcji ze szczegółami.
5. `{isExpanded && (...)}` renderuje detale tylko wtedy, kiedy są potrzebne.
6. `min-w-0` i `truncate` zapobiegają wypchnięciu układu przez długi prompt.
7. `grid ... sm:grid-cols-2` pokazuje szczegóły w jednej kolumnie na telefonie i dwóch na większym ekranie.

### Gdzie powinien znajdować się stan rozwinięcia?

Jeżeli każda karta otwiera się niezależnie, stan może być w `JobCard`. Jeżeli budujesz accordion, stan `expandedJobId` powinien być w komponencie rodzica, bo rodzic musi porównać ID wszystkich kart.

Nie mieszaj stanu UI (`isExpanded`) z danymi backendu (`job.status`). Rozwinięcie to tymczasowa decyzja użytkownika, a status jest informacją o rekordzie.

## 18. Modale: do czego służą i kiedy ich używać

Modal, czyli **modal dialog**, to okno nad stroną, które skupia uwagę i blokuje interakcję z resztą widoku do czasu zamknięcia. Typowe zastosowania:

- potwierdzenie usunięcia joba;
- formularz edycji ustawień lub szczegółów;
- formularz tworzenia nowego elementu;
- ważna decyzja, której użytkownik nie powinien przeoczyć.

Modal zwykle nie jest najlepszym sposobem na rozwinięcie każdego wiersza. Jeśli użytkownik ma szybko przeglądać wiele rekordów, użyj rozwijanych szczegółów inline. Jeśli potrzebuje pełnego widoku jednego joba, rozważ osobną stronę albo panel boczny (drawer). Modal zostaw dla krótkiego, skupionego zadania.

### Jak modal współpracuje z Reactem

Rodzic przechowuje boolean `isModalOpen`. Kliknięcie przycisku ustawia go na `true`. Modal renderuje się warunkowo i po zamknięciu wywołuje callback rodzica, który ustawia `false`.

```tsx
const [isDeleteOpen, setIsDeleteOpen] = useState(false);

<button type="button" onClick={() => setIsDeleteOpen(true)}>
  Delete job
</button>

{isDeleteOpen && (
  <DeleteJobModal
    onCancel={() => setIsDeleteOpen(false)}
    onConfirm={handleDelete}
  />
)}
```

Modal nie powinien usuwać danych tylko dlatego, że został otwarty. Potwierdzenie zamyka dialog dopiero po wykonaniu akcji albo wyraźnym anulowaniu.

### Minimalny komponent dialogu z natywnym `<dialog>`

Natywny element HTML `<dialog>` ma metodę `showModal()`, która umieszcza go nad stroną i udostępnia semantykę dialogu przeglądarce. W React możesz sterować nim przez `ref` i `useEffect`:

W aplikacji znajduje się już działający przykład w `JobAddModal.tsx`. `QueuePage.tsx` przechowuje tryb modala (`single` lub `batch`) i tablicę jobów. `+ Add` otwiera formularz jednego promptu. `+ Batch Add` przyjmuje wiele promptów, po jednym w każdym wierszu. Po zatwierdzeniu komponent tworzy obiekty `JobType` i przekazuje je do strony przez callback `onAdd`.

Obecnie dodawanie aktualizuje wyłącznie stan frontendu — dane znikną po odświeżeniu strony. Po podłączeniu API handler `onAdd` należy zastąpić funkcją wysyłającą joby na backend, a listę odświeżyć danymi zwróconymi przez serwer.

```tsx
import { useEffect, useId, useRef } from "react";
import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ isOpen, title, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-xl border border-aizen-border bg-aizen-panel p-0 text-aizen-text backdrop:bg-black/60"
    >
      <div className="p-6">
        <h2 id={titleId} className="text-lg font-semibold">{title}</h2>
        <div className="mt-4 text-sm text-aizen-muted">{children}</div>
        <button type="button" onClick={onClose} className="mt-6 rounded-lg bg-aizen-purple px-4 py-2 text-sm font-medium text-white hover:bg-aizen-purple-hover">
          Close
        </button>
      </div>
    </dialog>
  );
}
```

Jak czytać ten przykład:

- `useRef` daje dostęp do prawdziwego elementu DOM `<dialog>`.
- `useEffect` synchronizuje DOM z Reactowym `isOpen` po renderowaniu.
- `showModal()` otwiera dialog w trybie modalnym.
- `onClose` aktualizuje stan rodzica po zamknięciu, również po Escape.
- `aria-labelledby` łączy dialog z jego nagłówkiem.
- `backdrop:bg-black/60` styluje przyciemnioną warstwę za dialogiem.

Przy dialogu produkcyjnym dodaj jasny przycisk anulowania, przycisk akcji z konkretnym opisem (np. `Delete job`) oraz obsługę stanu ładowania podczas zapisu. Nie zamykaj modala, jeśli operacja API się nie powiedzie — pokaż błąd i pozwól użytkownikowi spróbować ponownie.

### Modal z potwierdzeniem usunięcia

Potwierdzenie powinno jasno opisać konsekwencję, np. „Delete this job? This action cannot be undone.” Dwa przyciski powinny mieć różne znaczenie:

- `Cancel` zamyka dialog bez zmiany danych;
- `Delete job` wywołuje handler, który usuwa rekord przez API.

Akcja destrukcyjna powinna być wizualnie odróżniona (np. czerwonym kolorem), ale czerwony przycisk nie zastępuje jasnego opisu.

### Dostępność modala

- Każdy dialog powinien mieć widoczny tytuł powiązany przez `aria-labelledby`.
- Użytkownik powinien móc zamknąć go klawiaturą, zwykle klawiszem Escape.
- Po otwarciu fokus powinien znaleźć się w dialogu; po zamknięciu wrócić do przycisku, który go otworzył. Natywne `showModal()` pomaga w obsłudze fokusu.
- Nie używaj samego `div` z wysokim `z-index` jako zamiennika dostępnego dialogu bez dodania obsługi fokusu, klawiatury i semantyki.
- Przy usuwaniu lub wysyłaniu formularza pokaż, co się dzieje, i zabezpiecz przed wielokrotnym kliknięciem.

## 19. Plan komponentów dla Jobs page

Proponowany podział, gdy zaczniesz podłączać endpoint:

```text
JobsPage
├── JobsToolbar (search, filters, refresh)
├── JobsList
│   ├── JobCard
│   ├── JobCard
│   └── JobCard
└── DeleteJobModal (only when a delete action is requested)
```

- `JobsPage` odpowiada za pobranie danych, loading/error/empty i akcje API.
- `JobsToolbar` zawiera kontrolki filtrowania i wyszukiwania, jeśli będą potrzebne.
- `JobsList` układa listę i pokazuje stan pusty.
- `JobCard` prezentuje jeden job i rozwija jego informacje.
- `DeleteJobModal` jest osobnym dialogiem potwierdzającym konkretną akcję.

To nazwy opisujące odpowiedzialność. Możesz zacząć prościej i rozdzielać komponenty dopiero wtedy, gdy plik staje się trudny do czytania.

### Obecny zakres `JobCard.tsx`

`JobCard` wyświetla teraz podstawowe dane joba jako pola w `DataField`. Szczegóły nie są jeszcze rozwijane. Później możesz dodać stan `isExpanded` oraz dodatkowy blok z promptami, seedem i innymi polami. `PageHeader` i `NavBar` pozostają w `MainLayout`, a nie w `JobCard`.

## 20. Nazwy, których warto używać w kodzie

| Co nazywasz | Proponowana nazwa | Dlaczego |
| --- | --- | --- |
| Strona wszystkich zadań | `JobsPage` | Opisuje całą stronę, w tym pobieranie danych i stany. |
| Lista zadań | `JobsList` | Układa wiele kart. |
| Jeden zwinięty/rozwinięty rekord | `JobCard` | Prosty i naturalny komponent domenowy. |
| Stan otwarcia karty | `isExpanded` | Boolean odpowiada na pytanie, czy szczegóły są widoczne. |
| Id otwartego elementu w accordionie | `expandedJobId` | Wartość wskazuje, która karta jest otwarta. |
| Dialog potwierdzający usunięcie | `DeleteJobModal` albo `DeleteJobDialog` | Nazwa mówi, do jakiej akcji służy dialog. |
| Ogólny dialog wielokrotnego użytku | `Modal` | Używaj go jako powłoki, a treść i akcje przekazuj przez propsy. |

Słowa **row**, **card** i **item** opisują kształt danych w interfejsie, nie format odpowiedzi backendu. Wybierz `row`, gdy faktycznie masz układ kolumn tabeli; wybierz `card`, gdy rekord jest osobnym panelem z podsumowaniem i rozwijaną treścią.
