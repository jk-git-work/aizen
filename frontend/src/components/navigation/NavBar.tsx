import NavItem from "./NavItem";

import IconGenerate from "../../assets/icons/icon_genereate.svg";
import IconFiles from "../../assets/icons/icon_files.svg";
import IconQueue from "../../assets/icons/icon_queue.svg"
import IconDashboard from "../../assets/icons/icon_dashboard.svg";

const navigationItems = [
  { text: "Dashboard", icon: IconDashboard },
  { text: "Generate", icon: IconGenerate },
  { text: "Queue", icon: IconQueue },
  { text: "Files", icon: IconFiles },
  //{ text: "Models", icon: "M" },
  //{ text: "LoRAs", icon: "L" },
  //{ text: "Secrets", icon: "S" },
];

interface NavBarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

function NavBar({ activePage, onNavigate }: NavBarProps) {
  return (
    <nav aria-label="Main navigation" className="flex flex-col gap-1.5">
      {navigationItems.map((item) => (
        <NavItem key={item.text} text={item.text} icon={item.icon} isActive={activePage === item.text} onClick={() => onNavigate(item.text)} />
      ))}
    </nav>
  );
}

export default NavBar;
