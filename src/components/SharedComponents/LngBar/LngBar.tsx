import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import { UnstyledButton } from "../Button/Button.styled";

export const StyledFlagContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;

  .flag {
    width: 50px !important;
    height: auto !important;
    transition: transform 0.2s;
    background-color: #fff;
    border: 3px solid ${getColor("darkGray2")};
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const LngBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: "en" | "pl" | "de") => {
    i18n.changeLanguage(lng);
  };

  return (
    <StyledFlagContainer>
      <UnstyledButton
        onClick={() => {
          changeLanguage("en");
        }}>
        <ReactCountryFlag
          className="flag"
          countryCode="GB"
          aria-label={t("languageChange.EN")}
          svg
          title={t("languageChange.EN")}
        />
      </UnstyledButton>
      <UnstyledButton
        onClick={() => {
          changeLanguage("pl");
        }}>
        <ReactCountryFlag
          className="flag"
          title={t("languageChange.PL")}
          aria-label={t("languageChange.PL")}
          countryCode="PL"
          svg
        />
      </UnstyledButton>
      <UnstyledButton
        onClick={() => {
          changeLanguage("de");
        }}>
        <ReactCountryFlag
          className="flag"
          title={t("languageChange.DE")}
          aria-label={t("languageChange.DE")}
          countryCode="DE"
          svg
        />
      </UnstyledButton>
    </StyledFlagContainer>
  );
};

export default LngBar;
