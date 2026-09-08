import gsap from "gsap";
import { createContext, useCallback, useContext, useMemo, useRef } from "react";

const SidebarContext = createContext(null);

export function SidebarProvider({ children }) {
  const overlayRef = useRef(null);
  const sidebarRef = useRef(null);

  const openSidebar = useCallback(() => {
    const overlay = overlayRef.current;
    const sidebar = sidebarRef.current;
    gsap.set(overlay, { display: "block" });
    gsap.to(overlay, { opacity: 1, pointerEvents: "auto", duration: 0.25 });
    gsap.fromTo(
      sidebar,
      { x: "-100%" },
      { x: "0%", duration: 0.35, ease: "power3.out" },
    );
  }, []);
  const closeSidebar = useCallback(() => {
    const overlay = overlayRef.current;
    const sidebar = sidebarRef.current;
    gsap.to(sidebar, {
      x: "-100%",
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => gsap.set(sidebar, { clearProps: "transform" }),
    });
    gsap.to(overlay, {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.25,
      onComplete: () => gsap.set(overlay, { display: "none" }),
    });
  }, []);
  const value = useMemo(
    () => ({
      overlayRef,
      sidebarRef,
      closeSidebar,
      openSidebar,
    }),
    [closeSidebar, openSidebar],
  );
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}
export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be inside <Sidebarprovider>");

  return ctx;
}
