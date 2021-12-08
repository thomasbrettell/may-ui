import { Select as Box, Wrapper, ChevronWrapper } from './styles';
import CaretDown from '../Icons/CaretDown';
import { FC } from 'react';
import { SelectProps } from './types';

const Select: FC<SelectProps> = (props) => {
  const { children } = props;
  return (
    <Wrapper>
      <Box>{children}</Box>
      <ChevronWrapper>
        <CaretDown />
      </ChevronWrapper>
    </Wrapper>
  );
};

export default Select;
