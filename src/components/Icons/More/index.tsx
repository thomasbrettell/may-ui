import { IconProps } from '../types';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import IconBox from '../components/IconBox';

const More = ({ size = 'md', color }: IconProps) => {
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
          d='M6.5 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-7-1.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z'
          clipRule='evenodd'
        ></path>
      </svg>
    </IconBox>
  );
};

export default More;
