import { IconProps } from '../types';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import IconBox from '../components/IconBox';

const Image = ({ size = 'md', color }: IconProps) => {
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
          d='M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm6.969 8.3a.375.375 0 00.646-.002l2.539-4.361a.375.375 0 01.648 0l4.146 7.125a.375.375 0 01-.324.563H8.68s-.001 0 0 0l-.001-.001H6.376a.375.375 0 01-.323-.566l2.453-4.136a.375.375 0 01.645 0l.818 1.379zM8.438 9.75a1.687 1.687 0 100-3.375 1.687 1.687 0 000 3.375z'
          clipRule='evenodd'
        ></path>
      </svg>
    </IconBox>
  );
};

export default Image;
