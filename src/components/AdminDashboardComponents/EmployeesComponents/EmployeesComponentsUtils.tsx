import { createColumnHelper } from "@tanstack/react-table";
import Typography from "components/SharedComponents/Typography/Typography";
import {
  ActionHeaderContainer,
  StyledTableTHTextContainer,
} from "../AnimalCardsComponents/AnimalCardsTable/AnimalCardsTable.styled";
import EmployeesComponentActionDropdown from "./EmployeesComponentDropdown";
import { t } from "i18next";
import i18n from "i18n";

export interface Employee {
  fullName: string;
  email: string;
  additionDate: string;
}

const columnHelper = createColumnHelper<Employee>();

export const employeesColumns = [
  columnHelper.accessor("fullName", {
    header: () => (
      <StyledTableTHTextContainer>
        <Typography
          variant="UI Small/UI Text 13 Med"
          color="midGray2">
          {t("employees:employees.name")}
        </Typography>
      </StyledTableTHTextContainer>
    ),
    cell: (props) => (
      <Typography
        variant="UI/UI Text 14 Reg"
        color="darkGray2">
        {props.getValue()}
      </Typography>
    ),
  }),
  columnHelper.accessor("email", {
    header: () => (
      <StyledTableTHTextContainer>
        <Typography
          variant="UI Small/UI Text 13 Med"
          color="midGray2">
          {t("employees:employees.email")}
        </Typography>
      </StyledTableTHTextContainer>
    ),
    cell: (props) => (
      <Typography
        variant="UI/UI Text 14 Reg"
        color="darkGray2">
        {props.getValue()}
      </Typography>
    ),
  }),
  columnHelper.accessor("additionDate", {
    header: () => (
      <StyledTableTHTextContainer>
        <Typography
          variant="UI Small/UI Text 13 Med"
          color="midGray2">
          {t("employees:employees.dateOfAddition")}
        </Typography>
      </StyledTableTHTextContainer>
    ),
    cell: (props) => (
      <Typography
        variant="UI/UI Text 14 Reg"
        color="darkGray2">
        {Intl.DateTimeFormat(i18n.language).format(new Date(props.getValue()))}
      </Typography>
    ),
  }),
  columnHelper.display({
    id: "actions",
    header: () => (
      <ActionHeaderContainer>
        <Typography
          variant="UI Small/UI Text 13 Med"
          color="midGray2">
          {t("employees:employees.action")}
        </Typography>
      </ActionHeaderContainer>
    ),
    cell: (_props) => <EmployeesComponentActionDropdown />,
  }),
];

export const dummyData = [
  {
    fullName: "Leszek Marciniak",
    email: "marciniak@gmail.com",
    additionDate: "06.08.2022",
  },
  {
    fullName: "Leszek Marciniak",
    email: "marciniak@gmail.com",
    additionDate: "06.08.2022",
  },
  {
    fullName: "Leszek Marciniak",
    email: "marciniak@gmail.com",
    additionDate: "06.08.2022",
  },
  {
    fullName: "Leszek Marciniak",
    email: "marciniak@gmail.com",
    additionDate: "06.08.2022",
  },
];
