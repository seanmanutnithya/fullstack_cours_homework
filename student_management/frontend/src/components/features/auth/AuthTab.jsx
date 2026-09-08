const AuthTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="auth-tabs" role="tablist">
      <button
        className={`auth-tab${activeTab === "login" ? " is-active" : ""}`}
        role="tab"
        aria-selected={activeTab === "login"}
        onClick={() => onTabChange("login")}
      >
        Log in
      </button>
      <button
        className={`auth-tab${activeTab === "signup" ? " is-active" : ""}`}
        role="tab"
        aria-selected={activeTab === "signup"}
        onClick={() => onTabChange("signup")}
      >
        Sign up
      </button>
      <span className="auth-tab-indicator" />
    </div>
  );
};

export default AuthTabs;
