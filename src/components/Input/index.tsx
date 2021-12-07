import { FC } from 'react';
import { InputProps } from './types';
import { Input as Box, Wrapper, Error } from './styles';

const Input: FC<InputProps> = (props) => {
  const { error, type = 'text', disabled } = props;
  console.log(props);
  return (
    <div>
      <Wrapper error={error} disabled={disabled}>
        <Box error={error} {...props} type={type} disabled={disabled} />
      </Wrapper>
      {error && <Error>{error}</Error>}
    </div>
  );
};

export default Input;
