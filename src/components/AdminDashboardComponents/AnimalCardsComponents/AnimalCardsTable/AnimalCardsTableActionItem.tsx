import styled from "styled-components";
import { CheckIcon, MoreIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import React, { useEffect, useRef, useState } from "react";
import {
  ActionHeaderContainer,
  StyledDropdownContainer,
  StyledDropdownOption,
} from "./AnimalCardsTable.styled";

const StyledMoreIcon = styled(MoreIcon)`
  cursor: pointer;
`;

const AnimalCardsTableActionItem = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [detailsOn, setDetailsOn] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const handleMoreIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <ActionHeaderContainer ref={dropdownRef}>
      <StyledMoreIcon onClick={handleMoreIconClick} />
      {isDropdownOpen && (
        <StyledDropdownContainer
          className={isDropdownOpen ? "fadeIn" : "fadeOut"}>
          <StyledDropdownOption onClick={() => setDetailsOn((prev) => !prev)}>
            <Typography
              $color="darkGray2"
              $variant="UI/UI Text 14 Reg">
              Szczegóły
            </Typography>
            {detailsOn && <CheckIcon />}
          </StyledDropdownOption>
          <StyledDropdownOption>
            <Typography
              $color="darkGray2"
              $variant="UI/UI Text 14 Reg">
              Usuń
            </Typography>
          </StyledDropdownOption>
        </StyledDropdownContainer>
      )}
    </ActionHeaderContainer>
  );
};

export default AnimalCardsTableActionItem;
