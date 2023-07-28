import Button from "components/SharedComponents/Button/Button";
import Select from "components/SharedComponents/DropdownMenu/Select";
import { ArrowDownIcon } from "components/SharedComponents/icons/icons";
import useToast from "hooks/useToast";
import React from "react";
import { Navigate } from "react-router-dom";
import { DashboardRoutes } from "router/router";

interface Option {
  value: string;
  label: string;
}

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const HomePage = () => {
  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  const { showToast } = useToast();

  const handleSelectChange = (value: Option["value"]) => {
    const newSelectedOption = options.find((option) => option.value === value);
    if (newSelectedOption) {
      setSelectedOption(newSelectedOption);
    }
  };

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
