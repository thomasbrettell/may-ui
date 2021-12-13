import { IconProps } from '../types';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import IconBox from '../components/IconBox';

const Close = ({ size = 'md', color }: IconProps) => {
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
          stroke='currentColor'
          strokeLinecap='round'
          strokeWidth='1.5'
          d='M6 6l12 12M18 6L6 18'
        ></path>
      </svg>
    </IconBox>
  );
};

export default Close;
