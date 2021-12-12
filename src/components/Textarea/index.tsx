import { Textarea as Box, Error } from './styles';
import { TextareaProps } from './types';
import { ChangeEvent, FC } from 'react';

const Textarea: FC<TextareaProps> = ({
  value,
  error,
  disabled,
  placeholder,
  onChange,
  resize = 'none',
  ...props
}) => {
  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(e);
  };

  return (
    <div>
      <Box
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        error={error}
        onChange={changeHandler}
        resize={resize}
        {...props}
      />
      {error && <Error>{error}</Error>}
    </div>
  );
};

export default Textarea;
