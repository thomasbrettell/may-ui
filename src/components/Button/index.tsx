import { FC } from 'react';
import { ButtonProps } from './types';
import {Button as Box} from './styles'

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <Box {...props} variant={variant}>
      {children}
    </Box>
  );
};

export default Button;
