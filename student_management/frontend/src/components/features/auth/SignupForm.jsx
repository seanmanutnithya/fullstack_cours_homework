import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AlertCircle,
  CheckCircle2,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
  ShieldCheck,
  User,
  Mail,
  Phone,
} from "lucide-react";
import { useAuther } from "@/context/AuthContext";

const SignupForm = ({ isActive, onSwitchToLogin }) => {
  const navigate = useNavigate();
  const {
    handleSignup,
    signupLoading,
    authError,
    clearAuthError,
    isEmailValid,
    isPhoneValid,
    getPasswordStrength,
  } = useAuther();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [role, setRole] = useState("admin");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    password: false,
    confirm: false,
    terms: false,
  });

  const strength = getPasswordStrength(password);
  const nameValid = name.trim().length > 0;
  const emailValid = isEmailValid(email);
  const phoneValid = isPhoneValid(phone);
  const passwordValid = password.length >= 8;
  const confirmValid = confirm.length > 0 && confirm === password;

  const fieldClass = (key, valid) =>
    `field${touched[key] && !valid ? " is-invalid" : touched[key] && valid ? " is-valid" : ""}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      phone: true,
      password: true,
      confirm: true,
      terms: true,
    });
    if (
      !nameValid ||
      !emailValid ||
      !phoneValid ||
      !passwordValid ||
      !confirmValid ||
      !agreedToTerms
    )
      return;
    const success = await handleSignup(name, email, phone, password, role);
    if (success) navigate("/");
  };

  return (
    <form
      className={`auth-panel${isActive ? " is-active" : ""}`}
      noValidate
      onSubmit={handleSubmit}
    >
      <h1 className="auth-title">Create your account</h1>
      <p className="auth-subtitle">Set up access for an admin or teacher.</p>

      <div className="role-switch" data-form="signup">
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

      <div className={fieldClass("name", nameValid)}>
        <label htmlFor="signupName">Full name</label>
        <div className="input-wrap">
          <User className="input-icon" />
          <input
            type="text"
            id="signupName"
            placeholder="e.g. Robert Pena"
            autoComplete="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              clearAuthError();
            }}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
          />
          <CheckCircle2 className="status-icon status-valid" />
          <AlertCircle className="status-icon status-invalid" />
        </div>
        <span className="field-error">Please enter your full name.</span>
      </div>

      <div className="field-grid">
        <div className={fieldClass("email", emailValid)}>
          <label htmlFor="signupEmail">Email address</label>
          <div className="input-wrap">
            <Mail className="input-icon" />
            <input
              type="email"
              id="signupEmail"
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

        <div className={fieldClass("phone", phoneValid)}>
          <label htmlFor="signupPhone">Phone number</label>
          <div className="input-wrap">
            <Phone className="input-icon" />
            <input
              type="tel"
              id="signupPhone"
              placeholder="+123 6988 567"
              autoComplete="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                clearAuthError();
              }}
              onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
            />
            <CheckCircle2 className="status-icon status-valid" />
            <AlertCircle className="status-icon status-invalid" />
          </div>
          <span className="field-error">
            Enter a valid phone number (7–15 digits).
          </span>
        </div>
      </div>

      <div className="field-grid">
        <div className={fieldClass("password", passwordValid)}>
          <label htmlFor="signupPassword">Password</label>
          <div className="input-wrap">
            <Lock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              id="signupPassword"
              placeholder="Min. 8 characters"
              autoComplete="new-password"
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
          <span className="field-error">Use at least 8 characters.</span>
        </div>

        <div className={fieldClass("confirm", confirmValid)}>
          <label htmlFor="signupConfirm">Confirm password</label>
          <div className="input-wrap">
            <Lock className="input-icon" />
            <input
              type={showConfirm ? "text" : "password"}
              id="signupConfirm"
              placeholder="Re-enter password"
              autoComplete="new-password"
              value={confirm}
              onChange={(e) => {
                setConfirm(e.target.value);
                clearAuthError();
              }}
              onBlur={() => setTouched((t) => ({ ...t, confirm: true }))}
            />
            <button
              type="button"
              className="visibility-toggle"
              aria-label={showConfirm ? "Hide password" : "Show password"}
              onClick={() => setShowConfirm((v) => !v)}
            >
              {showConfirm ? <EyeOff /> : <Eye />}
            </button>
          </div>
          <span className="field-error">Passwords don&apos;t match.</span>
        </div>
      </div>

      <div className="password-strength">
        <div className="password-strength-bar">
          <span
            style={{
              width: `${strength.percent}%`,
              backgroundColor: strength.color,
              display: "block",
              height: "100%",
              transition: "width 0.3s, background-color 0.3s",
            }}
          />
        </div>
        <span className="password-strength-label">{strength.label}</span>
      </div>

      <label className="checkbox-field checkbox-field--terms">
        <input
          type="checkbox"
          id="agreeTerms"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
        />
        <span>
          I agree to the{" "}
          <a href="#" className="auth-link">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="auth-link">
            Privacy Policy
          </a>
        </span>
      </label>
      {touched.terms && !agreedToTerms && (
        <span className="field-error" style={{ display: "block" }}>
          Please accept the terms to continue.
        </span>
      )}

      {authError && (
        <p className="field-error" style={{ display: "block" }}>
          {authError}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary btn-block"
        disabled={signupLoading}
      >
        <span className="btn-label">
          {signupLoading ? "Creating account…" : "Create account"}
        </span>
        {signupLoading && <span className="btn-spinner" />}
      </button>

      <p className="auth-switch">
        Already have an account?{" "}
        <button type="button" className="auth-link" onClick={onSwitchToLogin}>
          Log in
        </button>
      </p>
    </form>
  );
};

export default SignupForm;
