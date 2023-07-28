import { getColor } from "utils/styles/getStyle/getColor";
import React from "react";
import styled, { css } from "styled-components";
import { Color, PaddingMarginSize } from "utils/styles/types/stylesTypes";
import Typography from "../Typography/Typography";

interface DividerProps {
  $color?: Color;
  $text?: string;
  $gapFromLines?: PaddingMarginSize;
  $mt?: PaddingMarginSize;
  $mb?: PaddingMarginSize;
}

const DividerWrapper = styled.div<DividerProps>`
  display: flex;
  align-items: center;
  margin-top: ${({ $mt }) => $mt || 0};
  margin-bottom: ${({ $mb }) => $mb || 0};
`;

const Line = styled.div<DividerProps>`
  flex-grow: 1;
  height: 2px;
  border-radius: 32px;
  background-color: ${({ $color }) => ($color ? getColor($color) : "black")};
`;

const TextContainer = styled.div<DividerProps>`
  ${({ $gapFromLines }) =>
    $gapFromLines &&
    css`
      padding: 0 ${$gapFromLines};
    `}
`;

const Divider: React.FC<DividerProps> = ({
  $color: color,
  $text: text,
  $gapFromLines: gapFromLines,
  $mt: mt,
  $mb: mb,
}) => {
  return (
    <DividerWrapper
      $mt={mt}
      $mb={mb}>
      <Line $color="lightGray4" />
      {text && (
        <TextContainer $gapFromLines={gapFromLines}>
          <Typography
            tag="span"
            $color={color}
            $variant="UI Small/UI Text 12 Reg">
            {text}
          </Typography>
        </TextContainer>
      )}
      <Line $color="lightGray4" />
    </DividerWrapper>
  );
};

export default Divider;
