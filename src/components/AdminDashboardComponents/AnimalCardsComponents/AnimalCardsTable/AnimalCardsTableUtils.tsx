import { createColumnHelper } from "@tanstack/react-table";
import Typography from "components/SharedComponents/Typography/Typography";
import { Navigate } from "react-router-dom";
import { DashboardRoutes } from "router/router";
import { Pet, PetWithImageUrl } from "services/pet/petTypes";
import {
  ActionHeaderContainer,
  Dot,
  DotFlexContainer,
  StyledSexContainer,
  StyledTableImg,
  StyledTableImgContainer,
  StyledTableTHTextContainer,
} from "./AnimalCardsTable.styled";
import AnimalCardsTableActionItem from "./AnimalCardsTableActionItem";

const columnHelper = createColumnHelper<PetWithImageUrl>();

export const columns = [
  columnHelper.accessor("name", {
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
      <StyledTableImgContainer
        onClick={() => {
          return (
            <Navigate
              to={DashboardRoutes.animalCards + `/${props.row.original.id}`}
            />
          );
        }}>
        <StyledTableImg src={`${props.row.original.profilePhotoUrl}`} />
        <Typography
          variant="UI/UI Text 14 Reg"
          color="darkGray2">
          {`${props.row.original.name}`}
        </Typography>
      </StyledTableImgContainer>
    ),
  }),
  columnHelper.accessor("createdAt", {
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
        {new Date(props.getValue()).toLocaleDateString("pl-PL")}
      </Typography>
    ),
  }),
  columnHelper.accessor("type", {
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
  columnHelper.accessor("gender", {
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
  columnHelper.accessor("breed", {
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
    enableHiding: true,
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
        {props.getValue() + " kg"}
      </Typography>
    ),
  }),
  columnHelper.accessor("isSterilized", {
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
          {props.getValue() === true ? "Tak" : "Nie"}
        </Typography>
      </DotFlexContainer>
    ),
  }),
  columnHelper.accessor("isVisible", {
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
          {props.getValue() === true ? "Tak" : "Nie"}
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
    cell: (_props) => <AnimalCardsTableActionItem />,
  }),
];
