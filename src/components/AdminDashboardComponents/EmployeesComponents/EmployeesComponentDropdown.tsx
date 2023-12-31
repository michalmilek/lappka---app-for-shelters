import styled from "styled-components";
import { MoreIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import React, { useEffect, useRef, useState } from "react";
import {
  ActionHeaderContainer,
  StyledDropdownContainer,
  StyledDropdownOption,
} from "../AnimalCardsComponents/AnimalCardsTable/AnimalCardsTable.styled";
import { useTranslation } from "react-i18next";
import { useDeleteWorker } from "services/management/managementServices";

const StyledMoreIcon = styled(MoreIcon)`
  cursor: pointer;
`;

const EmployeesComponentActionDropdown = ({ email }: { email: string }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();
  const { mutate: deleteUserFn } = useDeleteWorker();

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
          <StyledDropdownOption
            onClick={() => {
              deleteUserFn(email);
              setIsDropdownOpen(false);
            }}>
            <Typography
              color="darkGray2"
              variant="UI/UI Text 14 Reg">
              {t("actions.delete")}
            </Typography>
          </StyledDropdownOption>
        </StyledDropdownContainer>
      )}
    </ActionHeaderContainer>
  );
};

export default EmployeesComponentActionDropdown;
