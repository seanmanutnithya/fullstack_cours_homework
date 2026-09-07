import LoginForm from "@/components/features/auth/LoginForm";
import SignupForm from "@/components/features/auth/SignupForm";
import AuthTabs from "@/components/features/auth/AuthTab";
import AuthBanner from "@/components/features/auth/AuthBanner";
import "./AuthPage.css";

const AuthPage = () => {
  return (
    <div className="auth-shell">
      <div className="sidebar-overlay" id="sidebarOverlay" />
      <AuthBanner />
      <main className="auth-main">
        <div className="auth-card" id="authCard">
          <AuthTabs />

          <div className="auth-panels" id="authPanels">
            {/* <!-- ============ LOGIN ============ --> */}
            <LoginForm />

            {/* <!-- ============ SIGN UP ============ --> */}
            <SignupForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
