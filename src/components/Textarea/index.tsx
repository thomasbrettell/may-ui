import { Textarea as Box, Error } from './styles';
import { TextareaProps } from './types';
import { ChangeEvent, FC, useState } from 'react';

const Textarea: FC<TextareaProps> = ({
  value,
  error,
  disabled,
  placeholder,
  onChange,
  ...props
}) => {
  const [selfValue, setSelfVaue] = useState(value);
  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSelfVaue(e.target.value);
    onChange && onChange(e);
  };

  return (
    <div>
      <Box
        placeholder={placeholder}
        value={selfValue}
        disabled={disabled}
        error={error}
        onChange={changeHandler}
      />
      {error && <Error>{error}</Error>}
    </div>
  );
};

export default Textarea;
