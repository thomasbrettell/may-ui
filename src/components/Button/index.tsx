import { FC, cloneElement } from 'react';
import { ButtonProps } from './types';
import { Button as Box } from './styles';
import ButtonIcon from './components/ButtonIcon';

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  rightIcon,
  leftIcon,
  iconGap = 5,
  ...props
}) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
  };

  return (
    <Box {...props} variant={variant} onClick={clickHandler}>
      {leftIcon && (
        <ButtonIcon gap={`margin-right: ${iconGap}px`}>
          {cloneElement(leftIcon, { size: 'sm' })}
        </ButtonIcon>
      )}
      {children}
      {rightIcon && (
        <ButtonIcon gap={`margin-left: ${iconGap}px`}>
          {cloneElement(rightIcon, { size: 'sm' })}
        </ButtonIcon>
      )}
    </Box>
  );
};

export default Button;
