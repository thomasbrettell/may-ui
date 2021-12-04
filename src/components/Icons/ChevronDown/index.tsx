import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { IconProps } from "../types";

const ChevronDown = ({size = 'md'}: IconProps) => {
  const theme = useContext(ThemeContext)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={theme.size.icon[size]}
      height={theme.size.icon[size]}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 8.2l-7.985 7.986L4 8.17"
      ></path>
    </svg>
  );
};

export default ChevronDown
