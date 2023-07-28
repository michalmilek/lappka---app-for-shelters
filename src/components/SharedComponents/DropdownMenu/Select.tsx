import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { CheckIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import { getColor } from "utils/styles/getStyle/getColor";
import {
  OptionItem,
  OptionList,
  SelectContainer,
  SelectContainerWithLabels,
  SelectDiv,
} from "./Select.styled";
import useToast from "hooks/useToast";

export type Option = {
  value: string;
  label: string;
};

export interface SelectProps<T extends Option>
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  value: Option["value"];
  $options: T[];
  $handleChange: (value: T) => void;
  $dropdownIcon: React.ReactNode;
  $placeholder?: string;
  $label?: string;
  $error?: string;
}

export interface SelectPropsWithoutGeneric
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  $error?: string;
}

function Select<T extends Option>({
  $label,
  $error,
  value,
  $options,
  $handleChange,
  $dropdownIcon,
  placeholder = "Wybierz z listy",
  ...rest
}: SelectProps<T>) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const handleDropdownIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  function handleOptionSelect(option: T) {
    setIsDropdownOpen(false);
    $handleChange(option);
  }

  const selectedOption = $options.find((option) => option.value === value);

  return (
    <SelectContainerWithLabels>
      <Typography
        tag="label"
        $color="darkGray2"
        $variant="UI Small/UI Text 13 Med">
        {$label}
      </Typography>
      <SelectContainer>
        <SelectDiv
          $error={$error}
          {...rest}
          onClick={handleDropdownIconClick}>
          <Typography
            tag="label"
            $variant="UI/UI Text 14 Reg"
            $color={selectedOption ? "darkGray2" : "midGray4"}>
            {selectedOption ? selectedOption.label : placeholder}
          </Typography>
          {$dropdownIcon}
        </SelectDiv>
        <OptionList
          className={`${isDropdownOpen ? "slide-in" : "slide-out"}`}
          ref={dropdownRef}>
          {$options.map((option) => (
            <OptionItem
              key={option.value}
              onClick={() => handleOptionSelect(option)}>
              <Typography
                $color="darkGray2"
                $variant="UI/UI Text 14 Reg">
                {option.label}
              </Typography>
              {selectedOption?.value === option.value && <CheckIcon />}
            </OptionItem>
          ))}
        </OptionList>
      </SelectContainer>
      <Typography
        tag="span"
        $color="error"
        $variant="UI Small/UI Text 13 Med">
        {$error}
      </Typography>
    </SelectContainerWithLabels>
  );
}
export default Select;
