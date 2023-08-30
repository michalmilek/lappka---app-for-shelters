import Typography from "components/SharedComponents/Typography/Typography";
import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

const CustomErrorSkeleton = styled.div`
  width: 116px;
  height: 120px;
  background-color: ${getColor("error")};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function ErrorSkeleton() {
  return (
    <CustomErrorSkeleton>
      <Typography
        tag="p"
        color="lightGray4"
        variant="UI Small/UI Text 12 Reg">
        {"Wystąpił błąd podczas pobierania danych."}
      </Typography>
    </CustomErrorSkeleton>
  );
}

export { ErrorSkeleton };
