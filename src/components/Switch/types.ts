import { ChangeEvent } from "react";

export interface SwitchProps {
  isChecked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
