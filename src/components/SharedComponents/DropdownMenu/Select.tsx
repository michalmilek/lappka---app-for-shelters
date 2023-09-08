import React, { useEffect, useRef, useState } from "react";
import { CheckIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import {
  OptionItem,
  OptionList,
  SelectContainer,
  SelectContainerWithLabels,
  SelectDiv,
  SelectLabel,
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

const handleKeyDown = (event: React.KeyboardEvent) => {
  if (event.key === "ArrowDown" && !isDropdownOpen) {
    const currentIndex = options.findIndex((option) => option.value === value);
    const nextIndex =
      currentIndex < options.length - 1 ? currentIndex + 1 : currentIndex;
    handleChange(options[nextIndex].value);
  } else if (event.key === "ArrowUp" && !isDropdownOpen) {
    const currentIndex = options.findIndex((option) => option.value === value);
    const nextIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    handleChange(options[nextIndex].value);
  } else if (event.key === "Enter" && isDropdownOpen) {
    const selectedOption = options.find((option) => option.value === value);
    if (selectedOption) {
      handleOptionSelect(selectedOption.value);
    }
  } else if (event.key === "Enter" && !isDropdownOpen) {
    setIsDropdownOpen(true);
  } else if (event.key === "Escape" && isDropdownOpen) {
    setIsDropdownOpen(false);
  } else if (event.key === "Tab" && isDropdownOpen) {
    event.preventDefault();
    setIsDropdownOpen(false);
  } else if (event.key === "Tab" && !isDropdownOpen) {
    event.preventDefault();
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const activeElement = document.activeElement as HTMLElement;

    if (activeElement) {
      const currentIndex = Array.from(focusableElements).indexOf(activeElement);

      if (currentIndex !== -1) {
        const nextElement = focusableElements[currentIndex + 1];
        if (nextElement && "focus" in nextElement) {
          (nextElement as HTMLElement).focus();
        }
      }
    }
  } else if (event.key === "ArrowDown" && isDropdownOpen) {
    event.preventDefault();
    const firstOption = document.getElementById(`option-${options[0].value}`);
    if (firstOption) {
      firstOption.focus();
    }
  }
};

const handleOptionKeyDown = (
  event: React.KeyboardEvent,
  optionValue: string | boolean
) => {
  /* if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    const activeElement = document.activeElement as HTMLElement;
    const currentIndex = options.includes(activeElement)
      ? options.indexOf(activeElement)
      : -1;
    const nextIndex =
      event.key === "ArrowDown" ? currentIndex + 1 : currentIndex - 1;
    const nextOption = options[nextIndex];
    console.log("🚀 ~ nextOption:", nextOption);

    if (nextOption) {
      // Ustawienie focusu na kolejnym elemencie
      const nextElement = document.getElementById(`option-${nextOption.value}`);
      if (nextElement) {
        nextElement.focus();
      }
    }
  } else if (event.key === "Enter") {
    setIsDropdownOpen(false);
    handleChange(optionValue);
  } */
};

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
        tabIndex={0}
        onKeyDown={handleKeyDown}
        error={error}
        {...rest}
        onClick={handleDropdownIconClick}>
        <SelectLabel
          title={
            selectedOption
              ? "Kliknij, aby wybrać opcję"
              : "Kliknij, aby zmienić swój wybór"
          }
          selectedOption={selectedOption}>
          {selectedOption ? selectedOption.label : placeholder}
        </SelectLabel>
        {dropdownIcon}
      </SelectDiv>
      <OptionList
        className={`${isDropdownOpen ? "slide-in" : "slide-out"}`}
        ref={dropdownRef}>
        {options.map((option) => (
          <OptionItem
            id={`option-${option.value}`}
            tabIndex={isDropdownOpen ? 0 : -1}
            key={option.label + Math.random() * 1000}
            onClick={() => handleOptionSelect(option.value)}
            onKeyDown={(e: React.KeyboardEvent) =>
              handleOptionKeyDown(e, option.value)
            }>
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
