import CustomRadio from "components/SharedComponents/Inputs/CustomRadio";
import {
  StyledDashboardChartDropdownContainer,
  StyledDashboardChartDropdownContainerList,
} from "./DashboardAnimalChart.styled";

interface DashboardChartDropdownProps {
  timeSelect: string;
  handleTimeSelectChange: (value: string) => void;
}

const DashboardChartDropdown: React.FC<DashboardChartDropdownProps> = ({
  timeSelect,
  handleTimeSelectChange,
}) => {
  return (
    <StyledDashboardChartDropdownContainer>
      <StyledDashboardChartDropdownContainerList>
        <CustomRadio
          name="filterDate"
          value={"Week"}
          $label="Tydzień"
          checked={timeSelect === "Week"}
          onChange={(e) => handleTimeSelectChange(e.target.value)}
        />
        <CustomRadio
          name="filterDate"
          value={"Month"}
          checked={timeSelect === "Month"}
          $label="Miesiąc"
          onChange={(e) => handleTimeSelectChange(e.target.value)}
        />
        <CustomRadio
          name="filterDate"
          value={"Year"}
          $label="Rok"
          checked={timeSelect === "Year"}
          onChange={(e) => handleTimeSelectChange(e.target.value)}
        />
      </StyledDashboardChartDropdownContainerList>
    </StyledDashboardChartDropdownContainer>
  );
};

export default DashboardChartDropdown;
