import Input from "../components/SharedComponents/Inputs/Input";
import React from "react";
import CustomRadio from "components/SharedComponents/Inputs/CustomRadio";

const HomePage = () => {
  const [select, setSelect] = React.useState("optionA");

  const handleSelectChange = (event: any) => {
    const value = event.target.value;
    setSelect(value);
  };
  return (
    <div>
      <Input />
      <CustomRadio
        label="Test"
        name="group"
        value={"test3"}
        color="primary500"
        checked={select === "test3"}
        onChange={handleSelectChange}
      />
      <CustomRadio
        label="Test2"
        name="group"
        value={"test2"}
        color="primary500"
        checked={select === "test2"}
        onChange={handleSelectChange}
      />
      <CustomRadio
        label="Test3"
        name="group"
        value={"test"}
        color="primary500"
        checked={select === "test"}
        onChange={handleSelectChange}
      />
    </div>
  );
};

export default HomePage;
