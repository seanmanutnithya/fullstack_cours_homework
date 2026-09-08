import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { EMAIL_RE, PHONE_RE } from "@/lib/validations";

const AuthContext = createContext(null);

const STRENGTH_LABELS = [
  "Too short",
  "Weak",
  "Fair",
  "Good",
  "Strong",
  "Very strong",
];
const STRENGTH_COLORS = [
  "var(--color-danger)",
  "var(--color-danger)",
  "var(--color-warning)",
  "var(--color-warning)",
  "var(--color-success)",
  "var(--color-success)",
];

// validator
function isEmailValid(value) {
  return EMAIL_RE.test(value.trim());
}
function isPhoneValid(value) {
  const digit = value.replace(/[^\d]/g, "");
  return PHONE_RE.test(value.trim() && digit >= 7 && digit <= 15);
}

// password strength
function scorePassword(value) {
  let score = 0;
  if (value.length >= 8) score++;
  if (value.length >= 12) score++;
  if (/[A-Z]/.test(value)) score++;
  if (/[0-9]/.test(value)) score++;
  if (/[^A-Za-z0-9]/.test(value)) score++;
  return score;
}

export function AuthProvider({ children }) {
  const [loginLoading, setLoginLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  // password strength
  const getPasswordStrength = useCallback((value) => {
    const score = scorePassword(value);
    return {
      score,
      percent: value ? Math.min(100, (score / 5) * 100) : 0,
      label: value ? STRENGTH_LABELS[score] : "password strength",
      color: STRENGTH_COLORS[score],
    };
  }, []);
  const clearAuthError = useCallback(() => setAuthError(null), []);
  const value = useMemo(
    () => ({
      loginLoading,
      signupLoading,
      authError,
      isEmailValid,
      isPhoneValid,
      getPasswordStrength,
      clearAuthError,
    }),
    [
      loginLoading,
      signupLoading,
      authError,
      isEmailValid,
      isPhoneValid,
      getPasswordStrength,
      clearAuthError,
    ],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuther() {
  const ctx = useContext(AuthContext);

  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider/>");
  return ctx;
}
