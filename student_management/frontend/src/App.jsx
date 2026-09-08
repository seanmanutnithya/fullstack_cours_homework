import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { StudentProvider } from "./components/features/students/context/StudentContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import DashboardLayout from "./layout/DashboardLayout.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import AllStudents from "./pages/AllStudnents/AllStudents.jsx";
import StudentDetail from "./pages/StudentDetails/StudentDetail.jsx";
import AuthPage from "./pages/auth/AuthPage.jsx";
import Toast from "./components/Toast.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <StudentProvider>
          <Routes>
            <Route path="/login" element={<AuthPage />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <HomePage />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/allstudents"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <AllStudents />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/studentDetail"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <StudentDetail />
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
          </Routes>
          <Toast />
        </StudentProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
