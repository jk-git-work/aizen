interface NavItemProps {
  text: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

function NavItem({ text, icon, isActive, onClick }: NavItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      title={text}
      className={`group relative flex h-10 w-full items-center justify-center gap-3 rounded-lg px-2 text-sm font-medium transition-colors sm:justify-start sm:px-3 ${
        isActive
          ? "bg-aizen-surface text-aizen-purple"
          : "text-aizen-muted hover:bg-aizen-surface hover:text-aizen-text"
      }`}
    >
      {isActive && <span className="absolute bottom-2 left-0 top-2 w-0.5 rounded-full bg-aizen-fuchsia" aria-hidden="true" />}
      <span
        aria-hidden="true"
        className={`h-5 w-5 shrink-0 ${isActive ? "bg-aizen-purple" : "bg-aizen-muted group-hover:bg-aizen-purple"}`}
        style={{
          maskImage: `url("${icon}")`,
          WebkitMaskImage: `url("${icon}")`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskSize: "contain",
          WebkitMaskSize: "contain",
        }}
      />
      <span className="hidden sm:inline">{text}</span>
    </button>
  );
}

export default NavItem;
