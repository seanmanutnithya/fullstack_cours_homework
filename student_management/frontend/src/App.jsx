import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import AllStudents from "./pages/AllStudnents/AllStudents.jsx";
import { StudentProvider } from "./components/features/students/context/StudentContext.jsx";
import Toast from "./components/Toast.jsx";
import StudentDetail from "./pages/StudentDetails/StudentDetail.jsx";
import AuthPage from "./pages/auth/AuthPage.jsx";
import DashboardLayout from "./layout/DashboardLayout.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <StudentProvider>
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route
            path="/"
            element={
              <DashboardLayout>
                <HomePage />
              </DashboardLayout>
            }
          />
          <Route
            path="/allstudents"
            element={
              <DashboardLayout>
                <AllStudents />
              </DashboardLayout>
            }
          />
          <Route
            path="/studentDetail"
            element={
              <DashboardLayout>
                <StudentDetail />
              </DashboardLayout>
            }
          />
        </Routes>
        <Toast />
      </StudentProvider>
    </BrowserRouter>
  );
};

export default App;
