import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "pages/RegisterPage";
import ResetPasswordPage from "pages/ResetPasswordPage";

export const unprotectedRoutes = [
  { url: "/login", component: <LoginPage /> },
  { url: "/register", component: <RegisterPage /> },
  { url: "/reset-password", component: <ResetPasswordPage /> },
  { url: "/", component: <HomePage /> },
];
