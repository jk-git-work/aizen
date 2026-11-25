import IconDarkMode from "../../assets/icons/icon_dark_mode.svg";
import IconLightMode from "../../assets/icons/icon_light_mode.svg";

interface PageHeaderProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

function PageHeader({ darkMode, onToggleTheme }: PageHeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-aizen-border px-4 transition-colors sm:px-6">
      <a href="#home" className="flex items-center gap-3" aria-label="AIZEN home">
        <span className="h-3 w-3 rounded-full bg-gradient-to-br from-aizen-purple to-aizen-fuchsia shadow-[0_0_16px_rgba(217,70,239,0.45)]" aria-hidden="true" />
        <span className="text-base font-bold tracking-[0.24em]">AIZEN</span>
      </a>

      <button
        type="button"
        onClick={onToggleTheme}
        aria-label={`Switch to ${darkMode ? "Arancar Arc light theme" : "Muken dark theme"}`}
        aria-pressed={darkMode}
        className="flex h-9 items-center gap-2 rounded-lg border border-aizen-border bg-aizen-panel px-3 text-xs font-medium text-aizen-text transition-colors hover:border-aizen-purple hover:text-aizen-purple focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aizen-purple"
      >
        <img
          src={darkMode ? IconLightMode : IconDarkMode}
          alt=""
          aria-hidden="true"
          className="size-5"
        />
        <span>{darkMode ? "Light theme" : "Dark theme"}</span>
      </button>
    </header>
  );
}

export default PageHeader;
