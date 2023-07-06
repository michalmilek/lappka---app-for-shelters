import React, { ReactNode } from "react";
import styled from "styled-components";

interface TypographyProps {
  tag?: keyof JSX.IntrinsicElements;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  children: ReactNode;
}

const Typography = ({
  tag = "p",
  color,
  fontSize,
  fontWeight,
  children,
}: TypographyProps) => {
  const StyledTypography = styled(tag)<TypographyProps>`
    color: ${(props) => props.color || "black"};
    font-size: ${(props) => props.fontSize || "16px"};
    font-weight: ${(props) => props.fontWeight || "normal"};
  `;

  return (
    <StyledTypography
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
