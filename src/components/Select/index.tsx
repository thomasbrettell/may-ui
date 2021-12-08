import {
  Select as Box,
  Container,
  ChevronWrapper,
  Error,
  SelectWrapper,
} from './styles';
import CaretDown from '../Icons/CaretDown';
import { FC } from 'react';
import { SelectProps } from './types';

const Select: FC<SelectProps> = (props) => {
  const { children, placeholder, error, disabled } = props;
  return (
    <Container>
      <SelectWrapper>
        <Box placeholder={placeholder} error={error} disabled={disabled}>
          {placeholder && <option value=''>{placeholder}</option>}
          {children}
        </Box>
        <ChevronWrapper>
          <CaretDown />
        </ChevronWrapper>
      </SelectWrapper>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Select;
