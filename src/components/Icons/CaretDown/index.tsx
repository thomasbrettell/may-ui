import { IconProps } from '../types';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

const CaretDown = ({ size = 'md' }: IconProps) => {
  const theme = useContext(ThemeContext)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={theme.size.icon[size]}
      height={theme.size.icon[size]}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path fill="#000" d="M16 10H8l4 4 4-4z"></path>
    </svg>
  );
};

export default CaretDown;
