import { useState } from "react";
import PageHeader from "../components/layout/PageHeader";
import NavBar from "../components/navigation/NavBar";
import QueuePage from "../pages/QueuePage";

function MainLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className={`flex h-dvh min-h-[480px] flex-col overflow-hidden bg-aizen-bg text-aizen-text transition-colors duration-300 ${darkMode ? "theme-dark" : ""}`}>
      <PageHeader darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} />

      <div className="flex min-h-0 flex-1 gap-3 p-3 sm:gap-4 sm:p-4">
        <aside className="w-16 shrink-0 overflow-y-auto rounded-xl border border-aizen-border bg-aizen-panel p-2 transition-colors sm:w-56 sm:p-3">
          <NavBar activePage={activePage} onNavigate={setActivePage} />
        </aside>

        <main className="min-h-0 min-w-0 flex-1 overflow-y-auto rounded-xl border border-aizen-border bg-aizen-panel p-5 transition-colors sm:p-8">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-aizen-purple">AIZEN</p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{activePage}</h1>
            </div>

            {activePage === "Queue" ? (
              <QueuePage />
            ) : (
              <section className="grid gap-4 md:grid-cols-2">
                <article className="rounded-xl border border-aizen-border bg-aizen-bg p-6">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-aizen-surface text-sm font-bold text-aizen-purple">01</div>
                  <h2 className="font-semibold">Workspace</h2>
                  <p className="mt-2 text-sm leading-6 text-aizen-muted">Page content goes here. Replace this example with the component for your selected page.</p>
                </article>
                <article className="rounded-xl border border-aizen-border bg-aizen-bg p-6">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-aizen-surface text-sm font-bold text-aizen-fuchsia">02</div>
                  <h2 className="font-semibold">Quick start</h2>
                  <p className="mt-2 text-sm leading-6 text-aizen-muted">Choose a page from the sidebar to change the heading, then build its content here.</p>
                </article>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
