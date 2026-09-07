import React from "react";

const AuthTabs = () => {
  return (
    <div className="auth-tabs" role="tablist">
      <button
        className="auth-tab is-active"
        id="tabLogin"
        role="tab"
        aria-selected="true">
        Log in
      </button>
      <button
        className="auth-tab"
        id="tabSignup"
        role="tab"
        aria-selected="false">
        Sign up
      </button>
      <span className="auth-tab-indicator" id="tabIndicator"></span>
    </div>
  );
};

export default AuthTabs;
