import Button from "components/SharedComponents/Button/Button";
import useToast from "hooks/useToast";
import React from "react";

const HomePage = () => {
  const { showToast } = useToast();

  return (
    <div>
      <Button
        onClick={() => {
          showToast("option", "success");
        }}>
        testestes
      </Button>
    </div>
  );
};
export default HomePage;

//<Navigate to={DashboardRoutes.DASHBOARD} />;
