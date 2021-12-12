import { ChangeEvent, FC } from 'react';
import { InputProps } from './types';
import { Input as Box, Wrapper, Error } from './styles';

const Input: FC<InputProps> = ({
  error,
  type = 'text',
  disabled,
  value = '',
  onChange,
  ...props
}) => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };

  return (
    <div>
      <Wrapper error={error} disabled={disabled}>
        <Box
          error={error}
          type={type}
          disabled={disabled}
          value={value}
          onChange={changeHandler}
          {...props}
        />
      </Wrapper>
      {error && <Error>{error}</Error>}
    </div>
  );
};

export default Input;
