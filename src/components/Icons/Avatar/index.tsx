import { IconProps } from '../types';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import IconBox from '../components/IconBox';

const Avatar = ({ size = 'md', color }: IconProps) => {
  const theme = useContext(ThemeContext);
  return (
    <IconBox color={color}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={theme.size.default[size]}
      height={theme.size.default[size]}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="9" r="3.75" fill="currentColor"></circle>
      <path
        fill="currentColor"
        d="M3.75 17.25a3 3 0 013-3h10.5a3 3 0 013 3v2.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-2.25z"
      ></path>
    </svg>
    </IconBox>
  );
};

export default Avatar;
