import styled from 'styled-components';
import { IconsProps } from '../types';
import { FC } from 'react';

const Box = styled.div`
  color: ${(p) => p.color};
  display: inline-flex;
`;

const IconBox: FC<IconsProps> = ({ color, children }) => {
  return <Box color={color}>{children}</Box>;
};

export default IconBox;
