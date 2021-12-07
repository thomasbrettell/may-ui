import { FC } from 'react';
import { InputProps } from './types';

const Input: FC<InputProps> = (props) => {
  return (
    <label>
      <div>{props.label}</div>
      <input {...props} />
    </label>
  );
};

export default Input;
