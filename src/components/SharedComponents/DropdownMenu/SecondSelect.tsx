import React, { CSSProperties } from "react";
import Select, { StylesConfig } from "react-select";
import { getColor } from "utils/styles/getStyle/getColor";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

interface OptionInterface {
  value: string;
  label: string;
}

type isMulti = false;

const customStyles: StylesConfig<OptionInterface, isMulti> = {
  option: (provided, state) => ({
    ...provided,
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "-0.6%",
    padding: "4px 20px",
    cursor: "pointer",
    zIndex: 1500,
    color: getColor("darkGray2"),
    backgroundColor: state.isFocused ? "#f3f3f3" : "white",
    "&:hover": {
      background: "#f3f3f3",
    },
  }),
  control: (baseStyles, state) => ({
    width: 200,
  }),
};

const SecondSelect = () => {
  return (
    <Select
      defaultValue={options[0]}
      options={options}
    />
  );
};

export default SecondSelect;
