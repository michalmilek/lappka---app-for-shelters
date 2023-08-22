import CustomRadio from "components/SharedComponents/Inputs/CustomRadio";
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
  return (
    <StyledDashboardChartDropdownContainer
      className={isDropDownActive ? "dropdown-entering" : "dropdown-exiting"}>
      <StyledDashboardChartDropdownContainerList>
        <CustomRadio
          name="filterDate"
          id="Week"
          value={"Week"}
          label="Tydzień"
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
          label="Miesiąc"
          onChange={(e) => handleTimeSelectChange(e.target.value as TimeType)}
        />
        <CustomRadio
          name="filterDate"
          value={"Year"}
          id="Year"
          label="Rok"
          checked={timeSelect === "Year"}
          onChange={(e) => handleTimeSelectChange(e.target.value as TimeType)}
        />
      </StyledDashboardChartDropdownContainerList>
    </StyledDashboardChartDropdownContainer>
  );
};

export default DashboardChartDropdown;
