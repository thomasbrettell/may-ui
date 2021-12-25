import { useState } from "react";
import { Label, Input, Track, Thumb, TrackWrapper } from "./styles";
import Check from "../Icons/Check";

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);
  const changeHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Label>
      <Track isChecked={isChecked}>
        <Input type="checkbox" onChange={changeHandler} />
        <TrackWrapper isChecked={isChecked}>
          <Check color="white" />
          <Thumb />
        </TrackWrapper>
      </Track>
    </Label>
  );
};

export default Switch;
