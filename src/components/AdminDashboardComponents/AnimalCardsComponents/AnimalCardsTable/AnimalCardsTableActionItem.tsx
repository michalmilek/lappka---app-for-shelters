import styled from "styled-components";
import { CheckIcon, MoreIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import React, { useEffect, useRef, useState } from "react";
import {
  ActionHeaderContainer,
  StyledDropdownContainer,
  StyledDropdownOption,
} from "./AnimalCardsTable.styled";
import { UnstyledButton } from "components/SharedComponents/Button/Button.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDeleteCardId,
  selectIsDeleteModalOpen,
  setIsDeleteModalOpen,
} from "redux/deleteCardSlice";
import DeleteCardModal from "../../../SharedComponents/Modal/ModalsWithLogic/DeleteCardModal";
import { useNavigate } from "react-router-dom";
import { DashboardRoutes } from "router/router";

const StyledMoreIcon = styled(MoreIcon)`
  cursor: pointer;
`;

const AnimalCardsTableActionItem = ({ id }: { id: string }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  /*   const [detailsOn, setDetailsOn] = useState(false); */
  const navigate = useNavigate();
  const isDeleteModalOpen = useSelector(selectIsDeleteModalOpen);
  const dispatch = useDispatch();

  const handleIsDeleteModalOpen = (value: boolean) => {
    dispatch(setIsDeleteModalOpen(value));
  };

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
    <>
      <ActionHeaderContainer ref={dropdownRef}>
        <StyledMoreIcon onClick={handleMoreIconClick} />
        {isDropdownOpen && (
          <StyledDropdownContainer
            className={isDropdownOpen ? "fadeIn" : "fadeOut"}>
            <StyledDropdownOption
              onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                navigate(DashboardRoutes.animalCards + "/" + id);
                e.stopPropagation();
                //setDetailsOn((prev) => !prev);
              }}>
              <Typography
                color="darkGray2"
                variant="UI/UI Text 14 Reg">
                Szczegóły
              </Typography>
              {/* {detailsOn && <CheckIcon />} */}
            </StyledDropdownOption>
            <StyledDropdownOption
              onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                e.stopPropagation();
                dispatch(setIsDeleteModalOpen(true));
                setIsDropdownOpen(false);
              }}>
              <Typography
                tag="span"
                color="darkGray2"
                variant="UI/UI Text 14 Reg">
                Usuń
              </Typography>
            </StyledDropdownOption>
          </StyledDropdownContainer>
        )}
      </ActionHeaderContainer>

      <DeleteCardModal
        isDeleteModalOpen={isDeleteModalOpen}
        handleDeleteModalState={handleIsDeleteModalOpen}
        id={id}
      />
    </>
  );
};

export default AnimalCardsTableActionItem;
