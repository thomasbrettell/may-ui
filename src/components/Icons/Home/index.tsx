import { IconProps } from '../types';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import IconBox from '../components/IconBox';

const Home = ({ size = 'md', color }: IconProps) => {
  const theme = useContext(ThemeContext);
  return (
    <IconBox color={color}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={theme.size.icon[size]}
        height={theme.size.icon[size]}
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M3.668 8.555A1.5 1.5 0 003 9.803V19.5A1.5 1.5 0 004.5 21H9v-6a3 3 0 116 0v6h4.5a1.5 1.5 0 001.5-1.5V9.803a1.5 1.5 0 00-.668-1.248l-7.5-5a1.5 1.5 0 00-1.664 0l-7.5 5z'
          clipRule='evenodd'
        ></path>
      </svg>
    </IconBox>
  );
};

export default Home;
