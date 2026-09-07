import {
  AlertCircle,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  Lock,
  Eye,
  Mail,
} from "lucide-react";
import React from "react";

const LoginForm = () => {
  return (
    <>
      <form className="auth-panel is-active" id="loginForm" novalidate>
        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-subtitle">Log in to your ia Academy workspace.</p>

        <div className="role-switch" data-form="login">
          <span className="role-switch-pill"></span>
          <button
            type="button"
            className="role-option is-active"
            data-role="admin">
            <ShieldCheck />
            <span>Admin</span>
          </button>
          <button type="button" className="role-option" data-role="teacher">
            <GraduationCap />
            <span>Teacher</span>
          </button>
        </div>

        <div className="field" data-field="loginEmail">
          <label for="loginEmail">Email address</label>
          <div className="input-wrap">
            <Mail className="input-icon" />
            <input
              type="email"
              id="loginEmail"
              placeholder="you@iaacademy.edu"
              autocomplete="email"
              inputmode="email"
            />
            <CheckCircle2 className="status-icon status-valid" />
            <AlertCircle className="status-icon status-invalid" />
          </div>
          <span className="field-error">Enter a valid email address.</span>
        </div>

        <div className="field" data-field="loginPassword">
          <label for="loginPassword">Password</label>
          <div className="input-wrap">
            <Lock className="input-icon" />
            <input
              type="password"
              id="loginPassword"
              placeholder="Enter your password"
              autocomplete="current-password"
            />
            <button
              type="button"
              className="visibility-toggle"
              aria-label="Show password">
              <Eye />
            </button>
          </div>
          <span className="field-error">Password is required.</span>
        </div>

        <div className="auth-row">
          <label className="checkbox-field">
            <input type="checkbox" id="rememberMe" />
            <span>Remember me</span>
          </label>
          <a
            href="./forgotPassowrd/forgot-password.html"
            className="auth-link"
            id="auth-link">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          id="loginSubmit">
          <span className="btn-label">Log in</span>
          <span className="btn-spinner"></span>
        </button>

        <p className="auth-switch">
          Don't have an account?
          <button type="button" className="auth-link" id="goSignup">
            Sign up
          </button>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
