import { GraduationCap, Menu, Search } from "lucide-react";
import { IconButton } from "@/components/ui";

const MobileTopBar = () => {
  return (
    <div className="mobile-topbar">
      <IconButton icon={Menu} id="mobileMenuBtn" label="Open menu" />
      <div className="mobile-brand">
        <GraduationCap />
        <span>ia Academy</span>
      </div>
      <IconButton icon={Search} id="mobileSearchBtn" label="Search" />
    </div>
  );
};

export default MobileTopBar;
