import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Select, { OptionProps, StylesConfig } from "react-select";
import { getColor } from "utils/styles/getStyle/getColor";
import { CheckIcon } from "../icons/icons";
import Typography from "../Typography/Typography";
import { SelectContainerWithLabels } from "./Select.styled";
import useDeviceType from "hooks/useDeviceType";
import { truncateString } from "utils/appUtils";

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "value"> {
  value?: string;
  options: Array<OptionInterface>;
  handleChange: (value: string) => void;
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

const SecondSelect = ({
  label,
  handleChange,
  error,
  options,
  value,
}: SelectProps) => {
  const deviceType = useDeviceType();
  const { t } = useTranslation();
  const customStyles: StylesConfig<OptionInterface, false> = useMemo(
    () => ({
      control: (baseStyles, _state) => ({
        ...baseStyles,
        cursor: "pointer",
        height: "40px",
        border: `1px solid ${
          error ? getColor("error") : getColor("lightGray1")
        }`,
        fontFamily: "Inter",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "24px",
        letterSpacing: "-0.6px",
        padding: "2px 0 2px 4px",
        outline: "none",

        "&:focus-visible": {
          outline: `1px solid ${getColor("focus")}`,
        },

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
      placeholder: (base) => ({
        ...base,
        color: getColor("midGray4"),
      }),
    }),
    [error]
  );

  return (
    <SelectContainerWithLabels>
      <Typography
        tag="label"
        color="darkGray2"
        variant="UI Small/UI Text 13 Med">
        {label}
      </Typography>
      <Select
        value={value ? options.find((option) => option.value === value) : null}
        onChange={(newValue) => {
          if (newValue) handleChange((newValue as OptionInterface).value);
        }}
        tabSelectsValue
        placeholder={
          deviceType === "mobile"
            ? truncateString(t("select.placeholder"))
            : t("select.placeholder")
        }
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
