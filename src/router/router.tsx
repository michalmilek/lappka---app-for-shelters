import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

export const unprotectedRoutes = [
  { url: "/login", component: <LoginPage /> },
  { url: "/", component: <HomePage /> },
];
