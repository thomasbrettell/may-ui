import { IconProps } from '../types';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import IconBox from '../components/IconBox';

const Check = ({ size = 'md', color }: IconProps) => {
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
          d='M3.93 12.95l5.49 4.95L20 6.6'
        ></path>
      </svg>
    </IconBox>
  );
};

export default Check;
