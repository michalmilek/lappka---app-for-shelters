import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "pages/RegisterPage";

export const unprotectedRoutes = [
  { url: "/login", component: <LoginPage /> },
  { url: "/register", component: <RegisterPage /> },
  { url: "/", component: <HomePage /> },
];
