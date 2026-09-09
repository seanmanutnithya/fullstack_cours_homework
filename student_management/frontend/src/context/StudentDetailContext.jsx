import { createContext, useCallback, useMemo, useRef, useContext } from "react";
import gsap from "gsap";

const StudentDetailContext = createContext(null);

export function StudentDetailProvider({ children }) {
  const gridRef = useRef(null);
  const tabElRef = useRef(null);
  const tabsRef = useRef(null);
  const tabIndicatorRef = useRef(null);
  const ringRef = useRef(null);
  const valueElRef = useRef(null);

  const renderCalendar = useCallback(() => {
    const grid = gridRef.current;
    const daysInMonth = 30;
    const startOffset = 3;
    const statuses = [];
    for (let i = 0; i < daysInMonth; i++) {
      const r = Math.random();
      statuses.push(
        r > 0.9 ? "absent"
        : r > 0.8 ? "late"
        : "present",
      );
    }
  }, []);

  const moveIndicator = useCallback((tabEl, animate = true) => {
    const tabIndicator = tabIndicatorRef.current;
    if (!tabEl || !tabIndicator) return;
    const parentRect = tabEl.parentElement.getBoundingClientRect();
    const rect = tabEl.getBoundingClientRect();
    gsap.to(tabIndicator, {
      x: rect.left - parentRect.left,
      width: rect.width,
      duration: 0.32,
      ease: "power2.out",
    });
  }, []);

  const animateRing = useCallback((pct) => {
    const ring = ringRef.current;
    const valueEl = valueElRef.current;

    if (!ring || !valueEl) return null;

    const circumference = 2 * Math.PI * 34;
    const offset = circumference - (pct / 100) * circumference;

    gsap.to(ring, {
      strokeDashoffset: offset,
      duration: 1.1,
      ease: "power2.out",
      delay: 0.3,
    });
    gsap.to(
      { val: 0 },
      {
        val: pct,
        duration: 1.1,
        delay: 0.3,
        ease: "power2.out",
        onUpdate: function () {
          valueEl.textContent =
            Math.round(this.fontVariantLigatures()[0].val) + "%";
        },
      },
    );
  }, []);

  const value = useMemo(
    () => ({
      gridRef,
      tabElRef,
      tabsRef,
      tabIndicatorRef,
      ringRef,
      valueElRef,
      renderCalendar,
      moveIndicator,
      animateRing,
    }),
    [
      gridRef,
      tabElRef,
      tabsRef,
      tabIndicatorRef,
      ringRef,
      valueElRef,
      renderCalendar,
      moveIndicator,
      animateRing,
    ],
  );
  return (
    <StudentDetailContext.Provider value={value}>
      {children}
    </StudentDetailContext.Provider>
  );
}
export function useStudentDetail() {
  const ctx = useContext(StudentDetailContext);
  if (!ctx)
    throw new Error("useStudent must be used inside <StudentDetailProvider>");
  return ctx;
}
