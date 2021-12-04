import { IconProps } from "../types";
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
const Image = ({size = 'md'}: IconProps) => {
  const theme = useContext(ThemeContext)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={theme.size.icon[size]}
      height={theme.size.icon[size]}
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect width="18" height="18" x="3" y="3" fill="#000" rx="3"></rect>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M9.969 14.3a.375.375 0 00.646-.002l2.539-4.361a.375.375 0 01.648 0l4.146 7.125a.375.375 0 01-.324.563H8.68s-.001 0 0 0l-.001-.001H6.376a.375.375 0 01-.323-.566l2.453-4.136a.375.375 0 01.645 0l.818 1.379z"
        clipRule="evenodd"
      ></path>
      <circle cx="8.438" cy="8.063" r="1.688" fill="#fff"></circle>
    </svg>
  );
};

export default Image;
