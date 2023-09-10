import styled from "styled-components";
import { MoreIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  ActionHeaderContainer,
  StyledDropdownContainer,
  StyledDropdownOption,
} from "./AnimalCardsTable.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsDeleteModalOpen,
  setIsDeleteModalOpen,
} from "redux/deleteCardSlice";
import DeleteCardModal from "../../../SharedComponents/Modal/ModalsWithLogic/DeleteCardModal";
import { useNavigate } from "react-router-dom";
import { DashboardRoutes } from "router/router";
import { getColor } from "utils/styles/getStyle/getColor";

const StyledMoreIcon = styled(MoreIcon)`
  cursor: pointer;

  &:focus-visible {
    outline: 1px solid ${getColor("focus")};
  }
`;

const AnimalCardsTableActionItem = ({ id }: { id: string }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [listIndexTarget, setListIndexTarget] = useState(1);
  const navigate = useNavigate();
  const isDeleteModalOpen = useSelector(selectIsDeleteModalOpen);
  const dispatch = useDispatch();
  const ref1 = useRef<HTMLLIElement>(null);
  const ref2 = useRef<HTMLLIElement>(null);
  const menuRef = useRef<SVGSVGElement>(null);

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isDropdownOpen) {
      if (e.key === "ArrowDown" && listIndexTarget < 1) {
        setListIndexTarget((prev) => prev + 1);
        e.preventDefault();
      } else if (e.key === "ArrowUp" && listIndexTarget > 0) {
        setListIndexTarget((prev) => prev - 1);
        e.preventDefault();
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsDropdownOpen(false);
        if (menuRef.current) {
          menuRef.current.focus();
        }
      }
    }
  };

  useEffect(() => {
    if (isDropdownOpen && ref1.current && ref2.current) {
      if (listIndexTarget === 0) {
        ref1.current.focus();
      } else if (listIndexTarget === 1) {
        ref2.current.focus();
      }
    }
  }, [isDropdownOpen, listIndexTarget]);

  return (
    <>
      <ActionHeaderContainer ref={dropdownRef}>
        <StyledMoreIcon
          role={"button"}
          tabIndex={0}
          ref={menuRef}
          onClick={handleMoreIconClick}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setIsDropdownOpen((prev) => !prev);
            } else if (e.key === "ArrowDown" && isDropdownOpen) {
              e.preventDefault();
              setListIndexTarget(1);
              ref1.current?.focus();
            }
          }}
        />
        {isDropdownOpen && (
          <StyledDropdownContainer
            className={isDropdownOpen ? "fadeIn" : "fadeOut"}>
            <StyledDropdownOption
              ref={ref1}
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                navigate(DashboardRoutes.animalCards + "/" + id);
                e.stopPropagation();
              }}>
              <Typography
                color="darkGray2"
                variant="UI/UI Text 14 Reg">
                Szczegóły
              </Typography>
            </StyledDropdownOption>
            <StyledDropdownOption
              onKeyDown={handleKeyDown}
              ref={ref2}
              tabIndex={0}
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
