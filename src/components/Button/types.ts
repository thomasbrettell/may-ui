export interface ButtonProps {
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}