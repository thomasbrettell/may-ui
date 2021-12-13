import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { IconProps } from '../types';
import { FC } from 'react';
import IconBox from '../components/IconBox';

const ChevronDown: FC<IconProps> = ({ size = 'md', color }) => {
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
          strokeLinejoin='round'
          strokeWidth='2'
          d='M20 8.2l-7.985 7.986L4 8.17'
        ></path>
      </svg>
    </IconBox>
  );
};

export default ChevronDown;
