import React, { useEffect, useRef, useState } from "react";
import { CheckIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import {
  OptionItem,
  OptionList,
  SelectContainer,
  SelectContainerWithLabels,
  SelectDiv,
} from "./Select.styled";

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "value"> {
  value: string | boolean;
  options: Array<{ value: string | boolean; label: string }>;
  handleChange: (value: string | boolean) => void;
  dropdownIcon: React.ReactNode;
  placeholder?: string;
  label?: string;
  error?: string;
  zIndex?: number;
}

export interface SelectErrorProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
}

function Select({
  label,
  error,
  value,
  options,
  handleChange,
  dropdownIcon,
  placeholder = "Wybierz z listy",
  zIndex,
  ...rest
}: SelectProps) {
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

  function handleOptionSelect(value: string | boolean) {
    setIsDropdownOpen(false);
    handleChange(value);
  }

  const selectedOption = options.find((option) => option.value === value);

  return (
    <SelectContainerWithLabels>
      <Typography
        tag="label"
        color="darkGray2"
        variant="UI Small/UI Text 13 Med">
        {label}
      </Typography>
      <SelectContainer zIndex={zIndex}>
        <SelectDiv
          error={error}
          {...rest}
          onClick={handleDropdownIconClick}>
          <Typography
            tag="label"
            variant="UI/UI Text 14 Reg"
            color={selectedOption ? "darkGray2" : "midGray4"}>
            {selectedOption ? selectedOption.label : placeholder}
          </Typography>
          {dropdownIcon}
        </SelectDiv>
        <OptionList
          className={`${isDropdownOpen ? "slide-in" : "slide-out"}`}
          ref={dropdownRef}>
          {options.map((option) => (
            <OptionItem
              key={option.label + Math.random() * 1000}
              onClick={() => handleOptionSelect(option.value)}>
              <Typography
                color="darkGray2"
                variant="UI/UI Text 14 Reg">
                {option.label}
              </Typography>
              {selectedOption?.value === option.value && <CheckIcon />}
            </OptionItem>
          ))}
        </OptionList>
      </SelectContainer>
      <Typography
        tag="span"
        color="error"
        variant="UI Small/UI Text 13 Med">
        {error}
      </Typography>
    </SelectContainerWithLabels>
  );
}

export default Select;
