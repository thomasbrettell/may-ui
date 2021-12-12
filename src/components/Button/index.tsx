import { FC } from 'react';
import { ButtonProps } from './types';
import { Button as Box } from './styles';

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  ...props
}) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
  };

  return (
    <Box {...props} variant={variant} onClick={clickHandler}>
      {children}
    </Box>
  );
};

export default Button;
