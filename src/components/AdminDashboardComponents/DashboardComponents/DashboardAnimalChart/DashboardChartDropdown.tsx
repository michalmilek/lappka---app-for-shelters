import CustomRadio from "components/SharedComponents/Inputs/CustomRadio";
import { useTranslation } from "react-i18next";
import { TimeType } from "./DashboardAnimalChart";
import {
  StyledDashboardChartDropdownContainer,
  StyledDashboardChartDropdownContainerList,
} from "./DashboardAnimalChart.styled";

interface DashboardChartDropdownProps {
  isDropDownActive: boolean;
  timeSelect: string;
  handleTimeSelectChange: (value: TimeType) => void;
}

const DashboardChartDropdown: React.FC<DashboardChartDropdownProps> = ({
  isDropDownActive,
  timeSelect,
  handleTimeSelectChange,
}) => {
  const { t } = useTranslation("dashboard");
  return (
    <StyledDashboardChartDropdownContainer
      className={isDropDownActive ? "dropdown-entering" : "dropdown-exiting"}>
      <StyledDashboardChartDropdownContainerList>
        <CustomRadio
          name="filterDate"
          id="Week"
          value={"Week"}
          label={t("animalChart.week")}
          checked={timeSelect === "Week"}
          onChange={(e) => {
            handleTimeSelectChange(e.target.value as TimeType);
          }}
        />
        <CustomRadio
          name="filterDate"
          value={"Month"}
          id="Month"
          checked={timeSelect === "Month"}
          label={t("animalChart.month")}
          onChange={(e) => handleTimeSelectChange(e.target.value as TimeType)}
        />
        <CustomRadio
          name="filterDate"
          value={"Year"}
          id="Year"
          label={t("animalChart.year")}
          checked={timeSelect === "Year"}
          onChange={(e) => handleTimeSelectChange(e.target.value as TimeType)}
        />
      </StyledDashboardChartDropdownContainerList>
    </StyledDashboardChartDropdownContainer>
  );
};

export default DashboardChartDropdown;
