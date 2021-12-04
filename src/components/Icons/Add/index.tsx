import { IconProps } from '../types';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

const Add = ({ size = 'md' }: IconProps) => {
  const theme = useContext(ThemeContext)
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={theme.size.icon[size]}
      height={theme.size.icon[size]}
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        stroke='#000'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 3.515v16.97M20.485 12H3.515'
      ></path>
    </svg>
  );
};

export default Add;
