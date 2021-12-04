import { IconProps } from '../types';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import IconBox from '../components/IconBox';

const Add = ({ size = 'md', color }: IconProps) => {
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
          stroke='currentColor'
          strokeLinecap='round'
          strokeWidth='1.5'
          d='M12 3.515v16.97M20.485 12H3.515'
        ></path>
      </svg>
    </IconBox>
  );
};

export default Add;
