import { useState } from "react";
import { Label, Input, Track, Thumb } from "./styles";

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);
  const changeHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Label>
      <Track isChecked={isChecked}>
        <Input type="checkbox" onChange={changeHandler} />
        <Thumb isChecked={isChecked} />
      </Track>
    </Label>
  );
};

export default Switch;
