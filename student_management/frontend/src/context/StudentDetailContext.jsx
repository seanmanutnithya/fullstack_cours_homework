import { createContext } from "react";

const StudentDetailContext = createContext(null);
export function StudentDetailProvider({ children }) {
  return (
    <StudentDetailContext.Provider value={value}>
      {children}
    </StudentDetailContext.Provider>
  );
}
export function useStudent() {
  const ctx = useContext(StudentDetailContext);
  if (!ctx)
    throw new Error("useStudent must be used inside <StudentDetailProvider>");
  return ctx;
}
