import React from "react";
import styled from "styled-components";

interface TypographyProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

const Typography = styled.p<TypographyProps>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "normal"};
`;

export default Typography;
