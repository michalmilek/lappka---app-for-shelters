import { createColumnHelper } from "@tanstack/react-table";
import Typography from "components/SharedComponents/Typography/Typography";
import {
  ActionHeaderContainer,
  Dot,
  DotFlexContainer,
  StyledSexContainer,
  StyledTableTHTextContainer,
} from "./AnimalCardsTable.styled";
import AnimalCardsTableActionItem from "./AnimalCardsTableActionItem";

export interface Animal {
  animalName: string;
  additionDate: string;
  genre: string;
  sex: "samiec" | "samiczka";
  colour: string;
  weight: string;
  sterilization: "Tak" | "Nie";
  visible: "Tak" | "Nie";
}

const columnHelper = createColumnHelper<Animal>();

export const columns = [
  columnHelper.accessor("animalName", {
    header: () => (
      <StyledTableTHTextContainer>
        <Typography
          variant="UI Small/UI Text 13 Med"
          color="midGray2">
          Imię zwierzaka
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
  columnHelper.accessor("genre", {
    header: () => (
      <StyledTableTHTextContainer>
        <Typography
          variant="UI Small/UI Text 13 Med"
          color="midGray2">
          Gatunek
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
  columnHelper.accessor("sex", {
    header: () => (
      <StyledTableTHTextContainer>
        <Typography
          variant="UI Small/UI Text 13 Med"
          color="midGray2">
          Płeć
        </Typography>
      </StyledTableTHTextContainer>
    ),
    cell: (props) => (
      <StyledSexContainer sex={props.getValue()}>
        <Typography
          variant="UI/UI Text 14 Semi Bold"
          color="white">
          {props.getValue()}
        </Typography>
      </StyledSexContainer>
    ),
  }),
  columnHelper.accessor("colour", {
    header: () => (
      <StyledTableTHTextContainer>
        <Typography
          variant="UI Small/UI Text 13 Med"
          color="midGray2">
          Umaszczenie
        </Typography>
      </StyledTableTHTextContainer>
    ),
    cell: (props) => (
      <Typography variant="UI/UI Text 14 Reg">{props.getValue()}</Typography>
    ),
  }),
  columnHelper.accessor("weight", {
    header: () => (
      <Typography
        variant="UI Small/UI Text 13 Med"
        color="midGray2">
        Waga
      </Typography>
    ),
    cell: (props) => (
      <Typography
        variant="UI/UI Text 14 Reg"
        color="darkGray2">
        {props.getValue()}
      </Typography>
    ),
  }),
  columnHelper.accessor("sterilization", {
    header: () => (
      <StyledTableTHTextContainer>
        <Typography
          variant="UI Small/UI Text 13 Med"
          color="midGray2">
          Sterylizacja
        </Typography>
      </StyledTableTHTextContainer>
    ),
    cell: (props) => (
      <DotFlexContainer>
        <Dot value={props.getValue()} />
        <Typography
          variant="UI/UI Text 14 Reg"
          color="darkGray2">
          {props.getValue()}
        </Typography>
      </DotFlexContainer>
    ),
  }),
  columnHelper.accessor("visible", {
    header: () => (
      <StyledTableTHTextContainer>
        <Typography
          variant="UI Small/UI Text 13 Med"
          color="midGray2">
          Widoczny
        </Typography>
      </StyledTableTHTextContainer>
    ),
    cell: (props) => (
      <DotFlexContainer>
        <Dot value={props.getValue()} />
        <Typography
          variant="UI/UI Text 14 Reg"
          color="darkGray2">
          {props.getValue()}
        </Typography>
      </DotFlexContainer>
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
    cell: (props) => <AnimalCardsTableActionItem />,
  }),
];

export const defaultData: Animal[] = [
  {
    animalName: "Kot",
    additionDate: "2021-07-19",
    genre: "Kot",
    sex: "samiec",
    colour: "czarny",
    weight: "4kg",
    sterilization: "Tak",
    visible: "Tak",
  },
  {
    animalName: "Kot",
    additionDate: "2021-07-19",
    genre: "Kot",
    sex: "samiec",
    colour: "czarny",
    weight: "4kg",
    sterilization: "Nie",
    visible: "Nie",
  },
  {
    animalName: "Kot",
    additionDate: "2021-07-19",
    genre: "Kot",
    sex: "samiec",
    colour: "czarny",
    weight: "4kg",
    sterilization: "Tak",
    visible: "Tak",
  },
  {
    animalName: "Kot",
    additionDate: "2021-07-19",
    genre: "Kot",
    sex: "samiczka",
    colour: "czarny",
    weight: "4kg",
    sterilization: "Nie",
    visible: "Tak",
  },
  {
    animalName: "Kot",
    additionDate: "2021-07-19",
    genre: "Kot",
    sex: "samiczka",
    colour: "czarny",
    weight: "4kg",
    sterilization: "Nie",
    visible: "Tak",
  },
  {
    animalName: "Kot",
    additionDate: "2021-07-19",
    genre: "Kot",
    sex: "samiczka",
    colour: "czarny",
    weight: "4kg",
    sterilization: "Nie",
    visible: "Tak",
  },
  {
    animalName: "Kot",
    additionDate: "2021-07-19",
    genre: "Kot",
    sex: "samiczka",
    colour: "czarny",
    weight: "4kg",
    sterilization: "Nie",
    visible: "Tak",
  },
];
