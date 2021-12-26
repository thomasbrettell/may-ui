import { ChangeEvent, FC } from "react";
import { Label, Input, Track, Thumb, TrackWrapper } from "./styles";
import Check from "../Icons/Check";
import { SwitchProps } from "./types";

const Switch: FC<SwitchProps> = ({ isChecked, onChange }) => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };

  return (
    <Label>
      <Track isChecked={isChecked}>
        <Input type="checkbox" onChange={changeHandler} checked={isChecked} />
        <TrackWrapper isChecked={isChecked}>
          <Check color="white" />
          <Thumb />
        </TrackWrapper>
      </Track>
    </Label>
  );
};

export default Switch;
