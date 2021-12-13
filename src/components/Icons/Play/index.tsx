import { IconProps } from '../types';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import IconBox from '../components/IconBox';

const Play = ({ size = 'md', color }: IconProps) => {
  const theme = useContext(ThemeContext);
  return (
    <IconBox color={color}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={theme.size.default[size]}
        height={theme.size.default[size]}
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M12 21a9 9 0 100-18 9 9 0 000 18zM10.298 8.308l5.299 3.417a.323.323 0 010 .55l-5.3 3.417c-.232.15-.547-.008-.547-.275V8.583c0-.267.315-.425.548-.275z'
          clipRule='evenodd'
        ></path>
      </svg>
    </IconBox>
  );
};

export default Play;
