import { createColumnHelper } from "@tanstack/react-table";
import Typography from "components/SharedComponents/Typography/Typography";
import { Navigate } from "react-router-dom";
import { DashboardRoutes } from "router/router";
import { GenderType, GenreType, Pet } from "services/pet/petTypes";
import {
  genderLabels,
  genderValueToLabel,
  typeLabels,
  typeValueToLabel,
} from "utils/appUtils";
import {
  ActionHeaderContainer,
  Dot,
  DotFlexContainer,
  StyledSexContainer,
  StyledTableImgContainer,
  StyledTableTHTextContainer,
} from "./AnimalCardsTable.styled";
import AnimalCardsTableActionItem from "./AnimalCardsTableActionItem";
import { TableProfileImage } from "./TableProfileImage";
import { t } from "i18next";

export interface ExtendedSearchParams extends URLSearchParams {
  pageIndex?: string;
  pageSize?: string;
  sortParam?: string;
  asc?: string;
}

export const sortParams = {
  name: "name",
  breed: "species",
  gender: "gender",
  weight: "weight",
  issterilized: "issterilized",
  createdat: "createdat",
};

export const sortParamFn = (fieldName: string) => {
  switch (fieldName) {
    case "name":
      return sortParams.name;
    case "breed":
      return sortParams.breed;
    case "gender":
      return sortParams.gender;
    case "weight":
      return sortParams.weight;
    case "issterilized":
      return sortParams.issterilized;
    case "createdat":
      return sortParams.createdat;
    default:
      return fieldName;
  }
};

const columnHelper = createColumnHelper<Pet>();

export const columns = [
  columnHelper.accessor("name", {
    header: () => (
      <StyledTableTHTextContainer>
        <Typography
          variant="UI Small/UI Text 13 Med"
          color="midGray2">
          {t("pet.name")}
        </Typography>
      </StyledTableTHTextContainer>
    ),
    cell: (props) => (
      <StyledTableImgContainer
        onClick={() => {
          return (
            <Navigate
              to={DashboardRoutes.animalCards + `/${props.row.original.petId}`}
            />
          );
        }}>
        <TableProfileImage
          imgId={props.row.original.profilePhoto}
          animalName={props.row.original.name}
        />
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
          {t("pet.createdAt")}
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
  columnHelper.accessor("animalCategory", {
    header: () => (
      <StyledTableTHTextContainer>
        <Typography
          variant="UI Small/UI Text 13 Med"
          color="midGray2">
          {t("pet.animalCategory")}
        </Typography>
      </StyledTableTHTextContainer>
    ),
    cell: (props) => (
      <Typography
        variant="UI/UI Text 14 Reg"
        color="darkGray2">
        {t(typeValueToLabel(props.getValue() as GenreType))}
      </Typography>
    ),
  }),
  columnHelper.accessor("gender", {
    header: () => (
      <StyledTableTHTextContainer>
        <Typography
          variant="UI Small/UI Text 13 Med"
          color="midGray2">
          {t("pet.gender")}
        </Typography>
      </StyledTableTHTextContainer>
    ),
    cell: (props) => (
      <StyledSexContainer sex={props.getValue()}>
        <Typography
          variant="UI/UI Text 14 Semi Bold"
          color="white">
          {t(genderValueToLabel(props.getValue() as GenderType))}
        </Typography>
      </StyledSexContainer>
    ),
  }),
  columnHelper.accessor("species", {
    header: () => (
      <StyledTableTHTextContainer>
        <Typography
          variant="UI Small/UI Text 13 Med"
          color="midGray2">
          {t("pet.species")}
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
        {t("pet.weight")}
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
          {t("pet.isSterilized")}
        </Typography>
      </StyledTableTHTextContainer>
    ),
    cell: (props) => (
      <DotFlexContainer>
        <Dot value={props.getValue()} />
        <Typography
          variant="UI/UI Text 14 Reg"
          color="darkGray2">
          {props.getValue() === true ? t("form.yes") : t("form.no")}
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
          {t("pet.isVisible")}
        </Typography>
      </StyledTableTHTextContainer>
    ),
    cell: (props) => (
      <DotFlexContainer>
        <Dot value={props.getValue()} />
        <Typography
          variant="UI/UI Text 14 Reg"
          color="darkGray2">
          {props.getValue() === true ? t("form.yes") : t("form.no")}
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
          {t("pet.action")}
        </Typography>
      </ActionHeaderContainer>
    ),
    cell: (props) => (
      <AnimalCardsTableActionItem id={props.row.original.petId} />
    ),
  }),
];
