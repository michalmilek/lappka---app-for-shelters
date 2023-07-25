import Input from "../components/SharedComponents/Inputs/Input";
import React from "react";
import CustomRadio from "components/SharedComponents/Inputs/CustomRadio";

const HomePage = () => {
  const [select, setSelect] = React.useState("optionA");
  console.log("🚀 ~ select:", select);

  return (
    <div>
      <Input />
      <input
        type="radio"
        name="test"
        value={"optionB"}
        onChange={(e) => setSelect(e.target.value)}
      />
      <input
        type="radio"
        name="test"
        value={"optionB"}
        onChange={(e) => setSelect(e.target.value)}
      />
      <input
        type="radio"
        name="test"
        value={"optionC"}
        onChange={(e) => setSelect(e.target.value)}
      />
    </div>
  );
};

export default HomePage;
