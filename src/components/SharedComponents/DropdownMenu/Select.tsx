import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CheckIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";

const SelectContainer = styled.div`
  position: relative;
`;

const OptionList = styled.ul`
  z-index: 50;
  position: absolute;
  top: 100%;
  left: 150%;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 0;
  margin: 0;
  width: 171px;
  padding: 4px 0;
`;

const OptionItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
  padding: 4px 20px;
  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }
`;

interface SelectProps {
  options: string[] | number[];
  selectedOption: string | number;
  onSelectOption: Function;
  dropdownIcon: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({
  options,
  selectedOption,
  onSelectOption,
  dropdownIcon,
}) => {
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
    setIsDropdownOpen(true);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <SelectContainer>
      <div onClick={handleDropdownIconClick}>{dropdownIcon}</div>
      {isDropdownOpen && (
        <OptionList ref={dropdownRef}>
          {options.map((option) => (
            <OptionItem
              key={option}
              onClick={() => {
                setIsDropdownOpen(false);
                onSelectOption(option);
              }}>
              <Typography
                color="darkGray2"
                variant="UI/UI Text 14 Reg">
                {option}
              </Typography>
              {selectedOption === option && <CheckIcon />}
            </OptionItem>
          ))}
        </OptionList>
      )}
    </SelectContainer>
  );
};

export default Select;
