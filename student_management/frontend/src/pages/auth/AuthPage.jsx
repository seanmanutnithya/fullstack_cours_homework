import { useState } from "react";
import LoginForm from "@/components/features/auth/LoginForm";
import SignupForm from "@/components/features/auth/SignupForm";
import AuthTabs from "@/components/features/auth/AuthTab";
import AuthBanner from "@/components/features/auth/AuthBanner";
import "./AuthPage.css";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="auth-shell">
      <div className="sidebar-overlay" />
      <AuthBanner />
      <main className="auth-main">
        <div className="auth-card">
          <AuthTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="auth-panels">
            <LoginForm
              isActive={activeTab === "login"}
              onSwitchToSignup={() => setActiveTab("signup")}
            />
            <SignupForm
              isActive={activeTab === "signup"}
              onSwitchToLogin={() => setActiveTab("login")}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
