import React from "react";
import Select, { OptionProps, StylesConfig } from "react-select";
import { getColor } from "utils/styles/getStyle/getColor";
import { CheckIcon } from "../icons/icons";
import Typography from "../Typography/Typography";
import { SelectContainerWithLabels } from "./Select.styled";

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "value"> {
  value?: string;
  options: Array<OptionInterface>;
  handleChange: (value: string) => void; // Zmienione na przyjmowanie tylko stringa
  label?: string;
  error?: string;
}

interface OptionInterface {
  value: string;
  label: string;
}

const Option = (props: OptionProps<OptionInterface>) => {
  const styles = {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%",
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "-0.6%",
    padding: "4px 20px",
    cursor: "pointer",
    zIndex: 4500,
    color: getColor("darkGray2"),
    backgroundColor: props.isFocused ? "#f3f3f3" : "white",
    "&:hover": {
      background: "#f3f3f3",
    },
  };

  return (
    <div
      {...props.innerProps}
      ref={props.innerRef}
      style={styles}>
      {props.label}
      {props.isSelected && <CheckIcon />}
    </div>
  );
};

const SecondSelect = ({ label, handleChange, error, options }: SelectProps) => {
  const customStyles: StylesConfig<OptionInterface, false> = {
    control: (baseStyles, _state) => ({
      ...baseStyles,
      cursor: "pointer",
      border: `1px solid ${error ? getColor("error") : getColor("lightGray1")}`,
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "-0.6%",
      padding: "2px 0 2px 2px",

      "&:hover": {
        border: `1px solid ${
          error ? getColor("error") : getColor("lightGray1")
        }`,
      },
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: getColor("midGray1"),
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
  };

  return (
    <SelectContainerWithLabels>
      <Typography
        tag="label"
        color="darkGray2"
        variant="UI Small/UI Text 13 Med">
        {label}
      </Typography>
      <Select
        onChange={(newValue) => handleChange(newValue!.value)}
        tabSelectsValue
        placeholder="Wybierz z listy"
        options={options}
        styles={customStyles}
        components={{
          Option: (props: OptionProps<OptionInterface>) => (
            <Option {...props} />
          ),
        }}
      />
      <Typography
        tag="span"
        color="error"
        variant="UI Small/UI Text 13 Med">
        {error}
      </Typography>
    </SelectContainerWithLabels>
  );
};

export default SecondSelect;
