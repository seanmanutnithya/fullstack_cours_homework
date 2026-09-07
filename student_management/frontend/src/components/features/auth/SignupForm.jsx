import React from "react";

const SignupForm = () => {
  return (
    <form className="auth-panel" id="signupForm" novalidate>
      <h1 className="auth-title">Create your account</h1>
      <p className="auth-subtitle">Set up access for an admin or teacher.</p>

      <div className="role-switch" data-form="signup">
        <span className="role-switch-pill"></span>
        <button
          type="button"
          className="role-option is-active"
          data-role="admin">
          <i data-lucide="shield-check"></i>
          <span>Admin</span>
        </button>
        <button type="button" className="role-option" data-role="teacher">
          <i data-lucide="graduation-cap"></i>
          <span>Teacher</span>
        </button>
      </div>

      <div className="field" data-field="signupName">
        <label for="signupName">Full name</label>
        <div className="input-wrap">
          <i data-lucide="user" className="input-icon"></i>
          <input
            type="text"
            id="signupName"
            placeholder="e.g. Robert Pena"
            autocomplete="name"
          />
          <i
            data-lucide="check-circle-2"
            className="status-icon status-valid"></i>
          <i
            data-lucide="alert-circle"
            className="status-icon status-invalid"></i>
        </div>
        <span className="field-error">Please enter your full name.</span>
      </div>

      <div className="field-grid">
        <div className="field" data-field="signupEmail">
          <label for="signupEmail">Email address</label>
          <div className="input-wrap">
            <i data-lucide="mail" className="input-icon"></i>
            <input
              type="email"
              id="signupEmail"
              placeholder="you@iaacademy.edu"
              autocomplete="email"
              inputmode="email"
            />
            <i
              data-lucide="check-circle-2"
              className="status-icon status-valid"></i>
            <i
              data-lucide="alert-circle"
              className="status-icon status-invalid"></i>
          </div>
          <span className="field-error">Enter a valid email address.</span>
        </div>

        <div className="field" data-field="signupPhone">
          <label for="signupPhone">Phone number</label>
          <div className="input-wrap">
            <i data-lucide="phone" className="input-icon"></i>
            <input
              type="tel"
              id="signupPhone"
              placeholder="+123 6988 567"
              autocomplete="tel"
              inputmode="tel"
            />
            <i
              data-lucide="check-circle-2"
              className="status-icon status-valid"></i>
            <i
              data-lucide="alert-circle"
              className="status-icon status-invalid"></i>
          </div>
          <span className="field-error">
            Enter a valid phone number (7–15 digits).
          </span>
        </div>
      </div>

      <div className="field-grid">
        <div className="field" data-field="signupPassword">
          <label for="signupPassword">Password</label>
          <div className="input-wrap">
            <i data-lucide="lock" className="input-icon"></i>
            <input
              type="password"
              id="signupPassword"
              placeholder="Min. 8 characters"
              autocomplete="new-password"
            />
            <button
              type="button"
              className="visibility-toggle"
              aria-label="Show password">
              <i data-lucide="eye"></i>
            </button>
          </div>
          <span className="field-error">Use at least 8 characters.</span>
        </div>

        <div className="field" data-field="signupConfirm">
          <label for="signupConfirm">Confirm password</label>
          <div className="input-wrap">
            <i data-lucide="lock" className="input-icon"></i>
            <input
              type="password"
              id="signupConfirm"
              placeholder="Re-enter password"
              autocomplete="new-password"
            />
            <button
              type="button"
              className="visibility-toggle"
              aria-label="Show password">
              <i data-lucide="eye"></i>
            </button>
          </div>
          <span className="field-error">Passwords don't match.</span>
        </div>
      </div>

      <div className="password-strength" id="pwStrength">
        <div className="password-strength-bar">
          <span id="pwStrengthFill"></span>
        </div>
        <span className="password-strength-label" id="pwStrengthLabel">
          Password strength
        </span>
      </div>

      <label className="checkbox-field checkbox-field--terms">
        <input type="checkbox" id="agreeTerms" />
        <span>
          I agree to the
          <a href="#" className="auth-link">
            Terms of Service
          </a>{" "}
          and
          <a href="#" className="auth-link">
            Privacy Policy
          </a>
        </span>
      </label>
      <span className="field-error" id="termsError">
        Please accept the terms to continue.
      </span>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        id="signupSubmit">
        <span className="btn-label">Create account</span>
        <span className="btn-spinner"></span>
      </button>

      <p className="auth-switch">
        Already have an account?
        <button type="button" className="auth-link" id="goLogin">
          Log in
        </button>
      </p>
    </form>
  );
};

export default SignupForm;
