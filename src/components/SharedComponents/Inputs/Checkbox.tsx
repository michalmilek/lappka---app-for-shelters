import { styled } from "styled-components";

const CheckboxWrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 45px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 20px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  visibility: hidden;
`;

const CustomCheckbox = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: black;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const CheckboxInput = styled(HiddenCheckbox)`
  &:checked ~ ${CustomCheckbox} {
    background-color: green;
  }

  &:hover ~ ${CustomCheckbox} {
    background-color: yellow;
  }

  &:active ~ ${CustomCheckbox} {
    background-color: red;
  }

  &:checked ~ ${CustomCheckbox}:after {
    display: block;
    left: 8px;
    bottom: 5px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 4px 4px 0;
    transform: rotate(45deg);
  }
`;

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
}) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <CheckboxWrapper>
      {label}
      <CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <CustomCheckbox />
    </CheckboxWrapper>
  );
};

export default Checkbox;
