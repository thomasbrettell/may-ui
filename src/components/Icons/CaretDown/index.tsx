import { IconProps } from '../types';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { FC } from 'react';
import IconBox from '../components/IconBox';

const CaretDown: FC<IconProps> = ({ size = 'md', color }) => {
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
        <path fill='currentColor' d='M16 10H8l4 4 4-4z'></path>
      </svg>
    </IconBox>
  );
};

export default CaretDown;
