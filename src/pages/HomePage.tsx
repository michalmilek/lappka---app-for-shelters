import Button from "components/SharedComponents/Button/Button";
import useToast from "hooks/useToast";
import React from "react";
import toastService from "singletons/toastService";

const HomePage = () => {
  const { showToast } = useToast();

  return (
    <div>
      <Button
        onClick={() => {
          toastService.showToast("HELLO", "success");
        }}>
        testestes
      </Button>
    </div>
  );
};
export default HomePage;

//<Navigate to={DashboardRoutes.DASHBOARD} />;
