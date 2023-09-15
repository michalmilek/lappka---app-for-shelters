import React from "react";
import { TooltipProps } from "recharts";
import styled from "styled-components";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
import { getColor } from "utils/styles/getStyle/getColor";
import Typography from "components/SharedComponents/Typography/Typography";

const TooltipContainer = styled.div`
  position: relative;
  background-color: ${getColor("darkGray2")};
  padding: 4px 8px;
  border-radius: 4px;
  width: 50px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-style: solid;
    border-width: 5px 5px 0;
    border-color: ${getColor("darkGray2")} transparent transparent transparent;
  }
`;

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const formattedValue = payload[0].value?.toLocaleString();
    return (
      <TooltipContainer>
        <Typography
          color="lightGray5"
          variant="UI Small/UI Text 12 Reg">
          {formattedValue}
        </Typography>
      </TooltipContainer>
    );
  }

  return null;
};

export default CustomTooltip;
