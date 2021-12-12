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
  const isIconButton = () => {
    return !!(!children && (rightIcon || leftIcon));
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
  };

  return (
    <Box
      {...props}
      variant={variant}
      onClick={clickHandler}
      iconButton={isIconButton()}
    >
      {leftIcon && (
        <ButtonIcon gap={`margin-right: ${isIconButton() ? 0 : iconGap}px`}>
          {cloneElement(leftIcon, {
            size: leftIcon.props.size ? leftIcon.props.size : 'sm',
          })}
        </ButtonIcon>
      )}
      {children}
      {rightIcon && (
        <ButtonIcon gap={`margin-left: ${isIconButton() ? 0 : iconGap}px`}>
          {cloneElement(rightIcon, {
            size: rightIcon.props.size ? rightIcon.props.size : 'sm',
          })}
        </ButtonIcon>
      )}
    </Box>
  );
};

export default Button;
