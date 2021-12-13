import { IconProps } from '../types';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import IconBox from '../components/IconBox';

const Trash = ({ size = 'md', color }: IconProps) => {
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
          d='M6 7.5h12v12a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 19.5v-12z'
        ></path>
        <rect
          width='15'
          height='1.5'
          x='4.5'
          y='4.5'
          fill='currentColor'
          rx='0.375'
        ></rect>
        <path
          fill='currentColor'
          d='M9 3.375C9 3.168 9.168 3 9.375 3h5.25c.207 0 .375.168.375.375V4.5H9V3.375z'
        ></path>
        <rect
          width='1.5'
          height='7.5'
          x='9'
          y='10.5'
          fill='none'
          rx='0.375'
        ></rect>
        <rect
          width='1.5'
          height='7.5'
          x='13.5'
          y='10.5'
          fill='none'
          rx='0.375'
        ></rect>
      </svg>
    </IconBox>
  );
};

export default Trash;
