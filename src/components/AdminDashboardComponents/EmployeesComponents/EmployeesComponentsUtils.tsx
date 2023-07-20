import { createColumnHelper } from "@tanstack/react-table";
import Typography from "components/SharedComponents/Typography/Typography";
import {
  ActionHeaderContainer,
  StyledTableTHTextContainer,
} from "../AnimalCardsComponents/AnimalCardsTable/AnimalCardsTable.styled";
import EmployeesComponentActionDropdown from "./EmployeesComponentDropdown";

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
          Imię i nazwisko
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
          Email
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
          Data dodania
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
  columnHelper.display({
    id: "actions",
    header: () => (
      <ActionHeaderContainer>
        <Typography
          variant="UI Small/UI Text 13 Med"
          color="midGray2">
          Akcja
        </Typography>
      </ActionHeaderContainer>
    ),
    cell: (props) => <EmployeesComponentActionDropdown />,
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
