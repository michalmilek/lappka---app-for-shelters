import Typography from "components/SharedComponents/Typography/Typography";
import styled, { keyframes } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import { InfoCardInterface } from "./DashboardInfoCardsItem.styled";

const appearAnimation = keyframes`
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

const StyledErrorCard = styled.li<InfoCardInterface>`
  display: flex;
  background: ${getColor("white")};
  padding: 16px;
  justify-content: center;
  gap: 12px;
  align-items: center;
  height: 100%;
  min-height: 100px;
  flex-wrap: wrap;
  white-space: pre-wrap;
  width: 100%;
  min-width: 20vw;
  border-radius: 8px;
  animation: ${appearAnimation} 0.3s ease-in-out;

  grid-area: ${(props) => props.gridArea};

  @media screen and (max-width: 1800px) {
    width: 100%;
    min-width: 15vw;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

interface Props {
  gridArea: string;
}

const ErrorCard = ({ gridArea }: Props) => (
  <StyledErrorCard gridArea={gridArea}>
    <Typography
      tag="p"
      color="darkGray2"
      variant="UI/UI Text 16 Medium Bold">
      {"Wystąpił błąd podczas pobierania danych."}
    </Typography>
  </StyledErrorCard>
);

export default ErrorCard;
