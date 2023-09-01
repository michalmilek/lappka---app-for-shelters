import useToast from "hooks/useToast";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { setLoading } from "redux/loadingSlice";
import { setShelterId } from "redux/shelterSlice";
import { useGetShelter } from "services/pet/petServices";
import { StyledDashboardMain } from "./DashboardComponents/Dashboard.styled";
import ProtectedSidebar from "./DashboardSidebar";

const ProtectedPage = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const { isLoading, isError, error, isSuccess, data } = useGetShelter();
  const dispatch = useDispatch();
  const { showToast } = useToast();

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading(true));
    } else {
      dispatch(setLoading(false));
    }
  }, [isLoading, dispatch]);

  useEffect(() => {
    if (isError) {
      showToast(
        "Błąd w pobieraniu danych, proszę spróbować ponownie później",
        "error"
      );
      console.log(error);
    }
  }, [isError, showToast, error]);

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setShelterId(data.id));
    }
  }, [data, dispatch, isSuccess]);

  if (!accessToken || !refreshToken) {
    return <Navigate to={"login"} />;
  }

  return (
    <StyledDashboardMain>
      <ProtectedSidebar />
      <Outlet />
    </StyledDashboardMain>
  );
};

export default ProtectedPage;
