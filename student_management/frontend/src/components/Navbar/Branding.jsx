import { GraduationCap, X } from "lucide-react";
import { IconButton } from "@/components/ui";

const Branding = () => {
  return (
    <>
      <div className="sidebar-brand">
        <div className="brand-icon">
          <GraduationCap />
        </div>
        <span className="brand-name">Ia Academy</span>
        <IconButton
          icon={X}
          className="sidebar-close"
          id="sidebarCloseBtn"
          label="Close menu"
        />
      </div>
    </>
  );
};

export default Branding;
