import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { IconProps } from '../types';
import IconBox from '../components/IconBox';

const Edit = ({ size = 'md', color }: IconProps) => {
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
          d='M13.826 6.697l3.182 3.182-8.375 8.375a.375.375 0 01-.265.11H5.49a.15.15 0 01-.15-.15v-2.876c0-.1.04-.195.11-.265l8.375-8.376zM16.213 4.31a.375.375 0 01.53 0l2.652 2.652a.375.375 0 010 .53l-1.326 1.326-3.182-3.182 1.326-1.326z'
        ></path>
      </svg>
    </IconBox>
  );
};

export default Edit;
