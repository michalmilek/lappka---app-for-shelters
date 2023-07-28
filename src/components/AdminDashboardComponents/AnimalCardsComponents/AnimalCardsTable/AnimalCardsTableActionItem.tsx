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

  const dropdownRef = useRef<HTMLUListElement>(null);

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
    setIsDropdownOpen(true);
  };

  // Dodajemy event listener do dokumentu przy montowaniu komponentu
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    // Usuwamy event listener przy odmontowywaniu komponentu
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <ActionHeaderContainer>
      <StyledMoreIcon onClick={handleMoreIconClick} />
      {isDropdownOpen && (
        <StyledDropdownContainer ref={dropdownRef}>
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
