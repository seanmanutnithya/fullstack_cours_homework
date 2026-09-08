import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AlertCircle,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  Mail,
} from "lucide-react";
import { useAuther } from "@/context/AuthContext";

const LoginForm = ({ isActive, onSwitchToSignup }) => {
  const navigate = useNavigate();
  const { handleLogin, loginLoading, authError, clearAuthError, isEmailValid } =
    useAuther();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });

  const emailValid = isEmailValid(email);
  const passwordValid = password.length > 0;

  const fieldClass = (key, valid) =>
    `field${touched[key] && !valid ? " is-invalid" : touched[key] && valid ? " is-valid" : ""}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!emailValid || !passwordValid) return;
    const success = await handleLogin(email, password, role);
    if (success) navigate("/");
  };

  return (
    <form
      className={`auth-panel${isActive ? " is-active" : ""}`}
      noValidate
      onSubmit={handleSubmit}
    >
      <h1 className="auth-title">Welcome back</h1>
      <p className="auth-subtitle">Log in to your ia Academy workspace.</p>

      <div className="role-switch" data-form="login">
        <span className="role-switch-pill" />
        <button
          type="button"
          className={`role-option${role === "admin" ? " is-active" : ""}`}
          onClick={() => setRole("admin")}
        >
          <ShieldCheck />
          <span>Admin</span>
        </button>
        <button
          type="button"
          className={`role-option${role === "teacher" ? " is-active" : ""}`}
          onClick={() => setRole("teacher")}
        >
          <GraduationCap />
          <span>Teacher</span>
        </button>
      </div>

      <div className={fieldClass("email", emailValid)}>
        <label htmlFor="loginEmail">Email address</label>
        <div className="input-wrap">
          <Mail className="input-icon" />
          <input
            type="email"
            id="loginEmail"
            placeholder="you@iaacademy.edu"
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearAuthError();
            }}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
          />
          <CheckCircle2 className="status-icon status-valid" />
          <AlertCircle className="status-icon status-invalid" />
        </div>
        <span className="field-error">Enter a valid email address.</span>
      </div>

      <div className={fieldClass("password", passwordValid)}>
        <label htmlFor="loginPassword">Password</label>
        <div className="input-wrap">
          <Lock className="input-icon" />
          <input
            type={showPassword ? "text" : "password"}
            id="loginPassword"
            placeholder="Enter your password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              clearAuthError();
            }}
            onBlur={() => setTouched((t) => ({ ...t, password: true }))}
          />
          <button
            type="button"
            className="visibility-toggle"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((v) => !v)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        <span className="field-error">Password is required.</span>
      </div>

      {authError && (
        <p className="field-error" style={{ display: "block" }}>
          {authError}
        </p>
      )}

      <div className="auth-row">
        <label className="checkbox-field">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <span>Remember me</span>
        </label>
        <a href="/forgot-password" className="auth-link">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        disabled={loginLoading}
      >
        <span className="btn-label">
          {loginLoading ? "Logging in…" : "Log in"}
        </span>
        {loginLoading && <span className="btn-spinner" />}
      </button>

      <p className="auth-switch">
        Don&apos;t have an account?{" "}
        <button type="button" className="auth-link" onClick={onSwitchToSignup}>
          Sign up
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
