import { IconProps } from '../types';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

const Check = ({ size = 'md' }: IconProps) => {
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
        d='M3.93 12.95l5.49 4.95L20 6.6'
      ></path>
    </svg>
  );
};

export default Check;
