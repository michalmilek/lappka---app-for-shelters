import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedPage = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!accessToken || !refreshToken) {
      navigate("/login");
    }
  }, [navigate]);

  return <>{children}</>;
};

export default ProtectedPage;
