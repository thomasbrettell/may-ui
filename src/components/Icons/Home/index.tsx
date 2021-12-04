import { IconProps } from '../types';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

const Home = ({ size = 'md' }: IconProps) => {
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
        fill='#000'
        d='M3 9.803c0-.502.25-.97.668-1.248l7.5-5a1.5 1.5 0 011.664 0l7.5 5A1.5 1.5 0 0121 9.803V19.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 19.5V9.803z'
      ></path>
      <path fill='#fff' d='M9 15a3 3 0 116 0v6H9v-6z'></path>
    </svg>
  );
};

export default Home;
