import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { CheckIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import { getColor } from "utils/styles/getStyle/getColor";

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

const SelectContainerWithLabels = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SelectContainer = styled.div`
  position: relative;
  background: ${getColor("white")};
  z-index: 50;
  width: 100%;
`;

const SelectDiv = styled.div<SelectPropsWithoutGeneric>`
  cursor: pointer;
  z-index: 50;
  background: ${getColor("white")};
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    props.$error
      ? css`
          border: 1px solid ${getColor("error")};
        `
      : css`
          border: 1px solid ${getColor("lightGray1")};
        `}
  flex-wrap: nowrap;
  white-space: nowrap;
  border-radius: 6px;
  width: 100%;
  padding: 8px 8px 8px 12px;
  outline: none;
  position: relative;
  height: 40px;
  cursor: pointer;
`;

const OptionList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  background: ${getColor("white")};
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  width: 100%;
  padding: 4px 0;
  z-index: 999;
`;

const OptionItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 20px;
  cursor: pointer;
  z-index: 100;

  &:hover {
    background-color: #f3f3f3;
  }
`;

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
        {isDropdownOpen && (
          <OptionList ref={dropdownRef}>
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
        )}
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
