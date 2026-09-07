import MobileTopBar from "@/components/layout/MobileTopBar";
import Navbar from "@/components/layout/Navbar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <MobileTopBar />
      <div className="app-shell">
        <div className="sidebar-overlay" id="sidebarOverlay" />
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
