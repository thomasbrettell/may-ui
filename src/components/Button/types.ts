export interface ButtonProps {
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  iconGap?: number;
  iconButton?: boolean;
}
